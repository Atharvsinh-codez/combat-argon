import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    target: 'es2022',
    assetsInlineLimit: 100000000,
    cssCodeSplit: false,
    chunkSizeWarningLimit: 5000,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        entryFileNames: 'assets/bundle.js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: true
  }
});
