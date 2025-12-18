import { defineConfig } from 'vite';
import fullReload from 'vite-plugin-full-reload';

export default defineConfig({
  plugins: [
    fullReload(['*.php', '**/*.php', 'css/*.css'], {
      root: './',
      delay: 100
    }),
  ],
  build: {
    outDir: './',
    emptyOutDir: false,
    watch: {
      exclude: ['css/**', 'js/**', 'node_modules/**']
    },
    rollupOptions: {
      input: {
        'app-js': './resources/js/app.js',
        'app-css': './resources/css/app.css',
        'editor-style': './resources/css/editor-style.css',
      },
      output: {
        entryFileNames: (assetInfo) => {
          // Map app-js to app.js for proper WordPress integration
          if (assetInfo.name === 'app-js') {
            return 'js/app.js';
          }
          return 'js/[name].js';
        },
        chunkFileNames: 'js/[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            // Map app-css to app.css for proper WordPress integration
            if (assetInfo.name === 'app-css.css') {
              return 'css/app.css';
            }
            return 'css/[name].[ext]';
          }
          return 'assets/[name].[ext]';
        },
      },
    },
  },
  server: {
    host: true, // Allow external connections
    port: 3000,
  },
  preview: {
    host: true, // Allow external connections
    port: 3000,
  },
});
