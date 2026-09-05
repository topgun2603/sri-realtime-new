import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      // Firebase is loaded on demand and lands in its own chunk well above
      // this threshold; the app code itself stays comfortably under it.
      chunkSizeWarningLimit: 700,
      rollupOptions: {
        output: {
          manualChunks: {
            // Split the framework out so it stays cached across deploys.
            react: ['react', 'react-dom', 'react-router-dom'],
            motion: ['motion'],
          },
        },
      },
    },
    server: {
      // In middleware mode Vite opens its own websocket for HMR. Give it a
      // configurable port too, or a second local project on the default will
      // take it and HMR silently dies.
      hmr:
        process.env.DISABLE_HMR === 'true'
          ? false
          : { port: Number(process.env.HMR_PORT) || 24678 },
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
