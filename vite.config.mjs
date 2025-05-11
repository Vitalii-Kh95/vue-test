import { fileURLToPath, URL } from 'node:url';
import os from 'os';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

function getLocalIPAddress() {
  const interfaces = os.networkInterfaces();
  for (const iface of Object.values(interfaces)) {
    for (const alias of iface) {
      if (alias.family === 'IPv4' && !alias.internal) {
        return alias.address;
      }
    }
  }
  return 'localhost';
}

// https://vite.dev/config/
export default defineConfig({
  define: {
    __HOST_IP__: JSON.stringify(getLocalIPAddress())
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  // server: {
  //   host: true,
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:8000',
  //       changeOrigin: true,
  //       secure: false
  //     }
  //   }
  // }
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
