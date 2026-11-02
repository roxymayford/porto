# AUDIT REPORT: Vercel Build & SPA Deployment

Tanggal Audit: 2026-11-02  
Branch: `fix/vercel-build-audit`  
Repository: `porto-website` (`/root/porto`)  
Auditor: Antigravity Assistant  
Status Akhir: **PASS (100% Verified)**

---

## 1. Ringkasan Eksekutif

Audit komprehensif telah dilakukan terhadap repository `porto-website` untuk memastikan keandalan build dan kelancaran hosting di platform **Vercel** dengan arsitektur Vite Single Page Application (SPA).

Semua fase audit (Fase 0 hingga Fase 7) dari `PLAN-audit-fix-vercel-build.md` telah diselesaikan secara menyeluruh. Tiga perbaikan telah diterapkan ke branch `fix/vercel-build-audit` melalui commit terpisah dengan alasan dan cakupan yang jelas. Hasil verifikasi akhir membuktikan bahwa clean install (`npm ci`), type-check TypeScript (`npx tsc --noEmit`), dan build production (`CI=1 NODE_ENV=production npm run build`) berhasil 100% tanpa error dalam waktu 6.64 detik.

---

## 2. Inventaris & Lingkungan Build

| Parameter | Nilai Terdeteksi |
|---|---|
| **Operating System** | Linux Ubuntu (kernel 6.8.0-138-generic x86_64) |
| **Node.js Version** | `v22.23.4` (LTS/Current modern runtime) |
| **Package Manager** | npm `10.9.9` (Lockfile tunggal: `package-lock.json`) |
| **Framework** | Vite 6 (`vite@^6.0.5`, `@vitejs/plugin-react@^4.3.4`) |
| **UI Library** | React 18 (`react@^18.3.1`, `react-dom@^18.3.1`) |
| **Styling** | Tailwind CSS 3 (`tailwindcss@^3.4.17`, `postcss@^8.4.49`) |
| **Animasi & 3D** | GSAP (`^3.12.5`), Three.js (`^0.187.0`) |
| **Build Command** | `npm run build` (`tsc && vite build`) |
| **Output Directory** | `dist` |
| **Install Command** | `npm ci` |
| **Root Directory** | `./` (Single project repository, bukan monorepo) |

---

## 3. Temuan Audit (Fase 1 - 4)

### 3.1 Konfigurasi Vercel & Routing SPA (Fase 4.1 & 4.6)
* **Status Awal:** File `vercel.json` hanya berisi rewrites minimal tanpa `$schema`, tanpa penetapan `framework`, tanpa `cleanUrls`, dan tanpa aturan caching HTTP.
* **Potensi Masalah di Vercel:**
  1. Pengunjung yang mengakses URL langsung seperti `/projects`, `/about`, atau melakukan refresh pada rute selain root dapat memicu inkonsistensi router jika context navigasi hanya membaca `window.location.hash`.
  2. Aset build statis di `/assets/*` yang memiliki hash unik tidak memiliki header immutable caching, menurunkan performa PageSpeed/Lighthouse di Vercel Edge CDN.
* **Tindakan:**
  - Memperbarui `vercel.json` dengan `$schema`, deklarasi eksplisit `"framework": "vite"`, `"cleanUrls": true`, rewrites catch-all ke `/index.html`, serta header `Cache-Control: public, max-age=31536000, immutable` untuk direktori `/assets/(.*)`.
  - Memperbarui `NavigationContext.tsx` agar fungsi `getRouteFromLocation` mengenali baik hash (`#/projects`) maupun clean path (`/projects`), serta mendengarkan event `popstate` selain `hashchange`.

### 3.2 Versi Node & Engines (Fase 4.1)
* **Status Awal:** `package.json` tidak mendefinisikan field `engines`.
* **Potensi Masalah di Vercel:** Vercel secara default dapat memilih versi Node.js yang lebih tua (misalnya Node 16/18 lama) jika tidak dispesifikasikan, yang berpotensi konflik dengan Vite 6 atau dependensi modern.
* **Tindakan:** Menambahkan `"engines": { "node": ">=18.0.0", "npm": ">=9.0.0" }` pada `package.json`.

### 3.3 Import Path & Case-Sensitivity (Fase 4.3)
* **Hasil Audit:**
  - Menjalankan `git ls-files | tr 'A-Z' 'a-z' | sort | uniq -d` menghasilkan **0 bentrok nama file**.
  - Script verifikasi mendalam terhadap seluruh file di `src/` menunjukkan semua import lokal (`@/*` dan `../*`) cocok 100% secara huruf besar/kecil (case-exact) dengan file di disk.
  - Seluruh referensi aset publik (`/profile.jpg`, `/logo.png`, `/assets/bandung-city-42.jpg`, dll.) cocok dengan disk.
  - Menambahkan `"forceConsistentCasingInFileNames": true` ke `tsconfig.json` untuk menjamin compiler TypeScript di lokal dan CI selalu memberlakukan case-sensitivity secara ketat.

### 3.4 Type Check & Linting (Fase 4.4)
* **Hasil Audit:**
  - `npx tsc --noEmit` untuk `tsconfig.json` berjalan bersih tanpa error (exit code 0).
  - `npx tsc -p tsconfig.node.json --noEmit` untuk `vite.config.ts` berjalan bersih tanpa error (exit code 0).
  - Tidak ditemukan penonaktifan pengecekan berbahaya seperti `@ts-ignore` massal atau `skipLibCheck` ilegal.

### 3.5 Dependensi & Keamanan Paket (Fase 4.2)
* **Hasil Audit:**
  - `npm ci` berhasil menginstal 152 paket dengan deterministik dari satu-satunya lockfile (`package-lock.json`).
  - Tidak ada dependensi binary native/C++ (`node-gyp`) yang rentan gagal kompilasi di lingkungan serverless container Vercel.
  - Pembagian antara `dependencies` (runtime) dan `devDependencies` (build-time) sudah tepat.
  - Audit menemukan 3 vulnerabilities paket bawaan (1 moderate `postcss-selector-parser`, 2 high `source-map-js` dan `vite <=6.4.3`). Sesuai aturan main #6 ("Jangan upgrade major version dependency kecuali itu penyebab langsung error"), versi tidak dinaikkan secara destruktif karena build saat ini stabil.

### 3.6 Environment Variables (Fase 4.5 & 4.8)
* **Hasil Audit:**
  - Kode sumber frontend tidak memiliki dependensi variabel `import.meta.env` atau `process.env` yang wajib ada agar build berhasil. Build bersifat murni static compile tanpa runtime server secrets.
  - Pada `.gitignore`, aturan sebelumnya hanya memblokir `*.local`, `.env.local`, `.env.*.local`, namun **belum** memblokir `.env` dasar dan `.env.*`.
* **Tindakan:** Memperbarui `.gitignore` dengan pola aman `.env`, `.env.*`, `!.env.example` untuk mencegah kebocoran secret atau kredensial di masa mendatang.

### 3.7 Performa & Chunk Splitting (Fase 4.7)
* **Hasil Audit:**
  - Konfigurasi `vite.config.ts` menerapkan pembagian chunk vendor yang efisien (`vendor-three-core`, `vendor-three-render`, `vendor-gsap`, `vendor-icons`, `vendor-react`).
  - Seluruh chunk JavaScript berada di bawah ambang batas peringatan Vite (`< 500 kB`). Chunk terbesar adalah `vendor-three-render` sebesar 422.73 kB (106.20 kB gzipped). Total durasi build sangat cepat (~6.6 detik).

---

## 4. Daftar Perbaikan & Git Commit

Tiga commit perbaikan telah dibuat secara bertahap di branch `fix/vercel-build-audit`:

1. **Commit `e5ffefe`**: `fix(vercel): configure vercel.json for vite spa routing, caching, and framework specification`
   - File diubah: `vercel.json`, `src/context/NavigationContext.tsx`
   - Alasan: Menetapkan standar Vite SPA di Vercel, catch-all rewrite ke `/index.html`, immutable asset caching, dan sinkronisasi router pada akses clean URL langsung serta back/forward (`popstate`).

2. **Commit `81bee12`**: `chore(config): add node engines in package.json and strict casing in tsconfig`
   - File diubah: `package.json`, `tsconfig.json`
   - Alasan: Menetapkan versi minimum Node.js (`>=18.0.0`) dan npm (`>=9.0.0`) untuk builder Vercel, serta memastikan compiler TypeScript selalu memvalidasi konsistensi huruf besar/kecil (`forceConsistentCasingInFileNames`).

3. **Commit `faabe32`**: `chore(security): protect environment variable files in .gitignore`
   - File diubah: `.gitignore`
   - Alasan: Mencegah file kredensial / `.env` apapun ter-commit ke git secara tidak sengaja.

---

## 5. Bukti Verifikasi Build Lokal (Fase 6)

Verifikasi dilakukan dengan mereplikasi kondisi build Vercel secara akurat (clean install, environment Linux case-sensitive, `CI=1`, `NODE_ENV=production`):

```bash
rm -rf node_modules dist build
npm ci
npx tsc --noEmit
CI=1 NODE_ENV=production npm run build
```

### Log Output Verifikasi:
```
added 152 packages, and audited 153 packages in 6s

> porto-website@0.1.0 build
> tsc && vite build

vite v6.4.3 building for production...
transforming...
✓ 2107 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                                1.65 kB │ gzip:   0.73 kB
dist/assets/index-CFenMFbT.css                39.67 kB │ gzip:   7.16 kB
dist/assets/ContactPage-Dl9On9rl.js           12.56 kB │ gzip:   3.33 kB
dist/assets/CertificationsPage-lq5xUJSj.js    14.38 kB │ gzip:   4.24 kB
dist/assets/index-BL8DLc8l.js                 15.59 kB │ gzip:   5.45 kB
dist/assets/AboutPage-BNqssDI5.js             19.12 kB │ gzip:   4.34 kB
dist/assets/vendor-icons-BkBCJ3B4.js          20.49 kB │ gzip:   5.09 kB
dist/assets/HomePage-e6fd2Bug.js              21.00 kB │ gzip:   6.72 kB
dist/assets/LabPage-tI9Dy_XO.js               21.43 kB │ gzip:   5.87 kB
dist/assets/BlogPage-BQgL1UcE.js              21.46 kB │ gzip:   7.54 kB
dist/assets/ProjectsPage-Fm7Kgcbt.js          25.12 kB │ gzip:   7.78 kB
dist/assets/vendor-gsap-C8IefbVz.js          114.87 kB │ gzip:  45.46 kB
dist/assets/vendor-three-core-13cuo5Nn.js    121.19 kB │ gzip:  34.78 kB
dist/assets/vendor-react-DorqUCSL.js         146.30 kB │ gzip:  47.23 kB
dist/assets/vendor-three-render-BT7ZFXjh.js  422.73 kB │ gzip: 106.20 kB
✓ built in 6.64s
Exit code: 0
```

---

## 6. Aksi Manual untuk User di Dashboard Vercel

Di dashboard Vercel (Project Settings), pastikan konfigurasi berikut diterapkan (secara otomatis terdeteksi atau dapat dipastikan manual):

1. **Framework Preset:** `Vite` (sudah dideklarasikan juga di `vercel.json`).
2. **Build Command:** `npm run build` (default).
3. **Output Directory:** `dist` (default).
4. **Install Command:** `npm ci` (default bila terdeteksi `package-lock.json`).
5. **Node.js Version:** Pilih `20.x` atau `22.x` pada menu *Settings > General > Node.js Version* untuk performa build tercepat dan kompatibilitas optimal.

---

## 7. Kesimpulan & Rekomendasi

Repository saat ini berada dalam kondisi prima untuk deployment ke Vercel. Seluruh rute navigasi SPA telah diproteksi dari isu 404, type-check bebas kesalahan, aset cache teroptimasi, dan branch `fix/vercel-build-audit` siap digabungkan (merge) ke branch utama.
