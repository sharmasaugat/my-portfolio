
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "./src/styles/index.css"; @import "./src/styles/globals.css";`
      }
    }
  }
});