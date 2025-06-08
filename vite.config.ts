import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/blogistan-hub/', // 👈 Add this for GitHub Pages deployment
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react']
  }
});
