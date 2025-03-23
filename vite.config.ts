import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

import react from '@vitejs/plugin-react';
import { dependencies } from './package.json';
// import bytes from 'bytes';

const packagesSplit: string[] = [

];

function renderChunks(deps: Record<string, string>) {
  const chunks: Record<string, string[]> = {};
  Object.keys(deps).forEach((key) => {
    if (packagesSplit.includes(key)) return;
    chunks[ key ] = [ key ];
  });
  return chunks;
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    build: {
      minify: true,
      // chunkSizeWarningLimit: bytes('2MB'),
      sourcemap: mode !== 'production',
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: packagesSplit,
            ...renderChunks(dependencies),
          },
        },
      },
    },
    plugins: [ tailwindcss(), react() ],
    preview: {
      host: '0.0.0.0',
      cors: true,
      port: 4173,
    },
    server: {
      allowedHosts: [ "hp15da0011la" ],
      watch: { usePolling: true },
      host: '0.0.0.0',
      cors: true,
      port: 5173,
    },
  };
});
