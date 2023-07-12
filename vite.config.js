import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from '@rollup/plugin-babel';

export default defineConfig({
  plugins: [react(), /*require('@babel/plugin-transform-runtime'),*/],
  base: '/SelaBlog/',
  build: {
    rollupOptions: {
      plugins: [
        babel({
          babelHelpers: 'bundled',
          presets: ['@babel/preset-env', '@babel/preset-react'],
        }),
      ],
    },
  },
})
