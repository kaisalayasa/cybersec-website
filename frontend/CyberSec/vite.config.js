import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Let Vite serve Brotli-compressed files (.br) correctly
    mimeTypes: {
      'application/wasm': ['wasm'],
    },
    headers: {
      // These headers help Unity WebGL builds load properly
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
  build: {
    // Ensure Vite doesn’t mess with Unity build files in /public
    assetsDir: 'assets',
  },
});
