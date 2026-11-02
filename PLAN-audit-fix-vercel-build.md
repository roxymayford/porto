# PLAN: Audit Repo & Fix Vercel Build Failure

## Tujuan

Audit seluruh repo, temukan semua penyebab build gagal di Vercel, perbaiki, lalu buktikan build lokal lulus dengan kondisi yang semirip mungkin dengan Vercel (Linux, case-sensitive, clean install, `NODE_ENV=production`).

## Input (isi sebelum dijalankan)

- Error log Vercel: simpan di `vercel-build.log` (root repo) atau paste di bagian **Log Error** paling bawah file ini.
- Branch kerja: `fix/vercel-build-audit`
- Framework: auto-detect (Next.js / Vite / CRA / Astro / Nuxt / dll)

## Aturan Main (WAJIB)

1. Kerja di branch baru `fix/vercel-build-audit`. Jangan commit langsung ke `main`.
2. Jangan force push, jangan `git reset --hard`, jangan hapus file tanpa alasan yang dicatat.
3. Jangan baca, cetak, atau commit isi `.env*` / secret. Cukup catat **nama** variabelnya.
4. Jangan "memperbaiki" dengan mematikan pengecekan (`ignoreBuildErrors`, `eslint.ignoreDuringBuilds`, `// @ts-ignore` massal, `skipLibCheck` sembarangan). Boleh hanya sebagai opsi terakhir, dan harus ditandai jelas di laporan.
5. Satu perubahan = satu alasan. Commit kecil per fase dengan pesan jelas (`fix: ...`, `chore: ...`).
6. Jangan upgrade major version dependency kecuali itu penyebab langsung error.
7. Kalau butuh aksi di luar repo (env var di dashboard Vercel, setting project), **jangan ditebak**. Catat di bagian "Aksi Manual untuk User".

---

## Fase 0 — Persiapan

- [x] `git status` bersih? Kalau tidak, stash atau catat perubahan yang ada.
- [x] `git checkout -b fix/vercel-build-audit`
- [x] Catat: OS, versi Node (`node -v`), package manager + versinya.
- [x] Deteksi package manager dari lockfile:
  - `package-lock.json` → npm
- [x] Pastikan hanya ada **satu** lockfile.

## Fase 1 — Inventaris Repo

- [x] Petakan struktur: `ls`, `git ls-files | head -200`.
- [x] Cek apakah monorepo.
- [x] Baca: `package.json`, `vercel.json` (kalau ada), config framework (`vite.config.*`), `tsconfig*.json`.
- [x] Catat: build command, output directory, install command, root directory yang dipakai.

## Fase 2 — Analisis Log Vercel

- [x] Cek apakah ada file log Vercel (`vercel-build.log`). Jika tidak ada file log spesifik yang disediakan user, lakukan audit proaktif atas kegagalan umum build Vercel pada Vite SPA (SPA routing vercel.json, clean install, type-check, build script, output directory).

## Fase 3 — Reproduksi Build Lokal

- [x] Tiru kondisi Vercel (install bersih, mode production, CI aktif):
```bash
rm -rf node_modules dist build
npm ci
CI=1 NODE_ENV=production npm run build
```

## Fase 4 — Audit Menyeluruh (Checklist)
- [x] 4.1 Versi & Konfigurasi (engines, vercel.json rewrites untuk SPA routing agar tidak 404 saat direct access/refresh).
- [x] 4.2 Dependencies (clean npm ci, peer dependencies, native/binary build risks).
- [x] 4.3 Import Path & Case-Sensitivity (cek bentrok casing `git ls-files | tr 'A-Z' 'a-z' | sort | uniq -d`, `forceConsistentCasingInFileNames`).
- [x] 4.4 Type & Lint (`npx tsc --noEmit`).
- [x] 4.5 Environment Variables (`import.meta.env`).
- [x] 4.6 Kode & Framework (Vite/SPA rewrites vercel.json, asset paths).
- [x] 4.7 Resource & Performa Build.
- [x] 4.8 Higiene Repo.

## Fase 5 — Perbaikan
- [x] Lakukan perbaikan yang diperlukan dengan commit terpisah per fase/alasan di branch `fix/vercel-build-audit`.

## Fase 6 — Verifikasi
- [x] Lakukan clean install dan `CI=1 NODE_ENV=production npm run build`.

## Fase 7 — Laporan Akhir
- [x] Buat file `AUDIT-REPORT.md` sesuai format di template plan.
