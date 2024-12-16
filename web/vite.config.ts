import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config({ path: './src/config/.env' });
const port = Number(process.env.PORT) || 3000;

export default defineConfig({
  plugins: [react()],
  server: {
    port: port,
  },
  preview: {
    port: port,
  },
});
