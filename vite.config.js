import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { wayfinder } from "@laravel/vite-plugin-wayfinder";

export default defineConfig({
  plugins: [
    wayfinder(),
    laravel({
      input: [
        'resources/js/app.tsx',
        'resources/css/app.css',
      ],
      refresh: true,
    }),
    react(),
    tailwindcss(),
  ],
});
