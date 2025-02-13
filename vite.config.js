import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://127.0.0.1:8000', // Your Django backend
  //       changeOrigin: true, // Needed if Django is on a different origin
  //       secure: false // If using HTTPS locally, set to true
  //     },
  //     '/media': {
  //       // Add this rule to proxy media files
  //       target: 'http://127.0.0.1:8000',
  //       changeOrigin: true,
  //       secure: false
  //     }
  //   }
  // }
});
