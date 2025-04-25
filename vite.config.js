import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    base: './',
    server: {
      proxy: {
        '/api/proxy': {
          target: env.VITE_BACKEND_URL, // ✅ Correct way to use env in Vite config
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/proxy/, ''),
        },
      },
    },
  };
});
