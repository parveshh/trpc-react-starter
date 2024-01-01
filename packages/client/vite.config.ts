import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsRef from 'esbuild-plugin-ts-references';

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      jsx: 'automatic',
    },
  },
  plugins: [react(), tsRef],
});
