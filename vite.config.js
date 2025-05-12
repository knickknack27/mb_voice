import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '12af-106-51-64-247.ngrok-free.app'
    ]
  }
}); 