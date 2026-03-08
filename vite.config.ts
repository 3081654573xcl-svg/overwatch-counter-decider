import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      proxy: {
        '/heroes': {
          target: 'https://raw.githubusercontent.com/rares-sh/overwatch-2-api/master/public/heroes',
          changeOrigin: true,
          rewrite: (path) => {
            const match = path.match(/\/heroes\/(.*)\.png$/);
            if (!match) return path;
            const id = match[1];
            
            // Map IDs to CDN IDs
            const map: Record<string, string> = {
              'soldier76': 'soldier-76',
              'wreckingball': 'wrecking-ball',
              'junkerqueen': 'junker-queen',
              'dva': 'dva',
            };
            
            const cdnId = map[id] || id;
            return `/${cdnId}/portrait.png`;
          },
        },
      },
    },
  };
});
