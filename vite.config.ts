import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Pre-Production-Consulting/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
