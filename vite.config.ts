import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes('node_modules/three/src/core') ||
            id.includes('node_modules/three/src/math') ||
            id.includes('node_modules/three/src/cameras') ||
            id.includes('node_modules/three/src/scenes') ||
            id.includes('node_modules/three/src/textures') ||
            id.includes('node_modules/three/src/constants') ||
            id.includes('node_modules/three/src/utils.js') ||
            id.includes('node_modules/three/src/extras/DataUtils.js') ||
            id.includes('node_modules/three/src/extras/ImageUtils.js')
          ) {
            return 'vendor-three-core';
          }
          if (id.includes('node_modules/three')) {
            return 'vendor-three-render';
          }
          if (id.includes('node_modules/gsap')) {
            return 'vendor-gsap';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-icons';
          }
          if (
            id.includes('node_modules/react') ||
            id.includes('node_modules/react-dom') ||
            id.includes('node_modules/next-themes')
          ) {
            return 'vendor-react';
          }
        },
      },
    },
  },
});
