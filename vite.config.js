import { defineConfig } from 'vite'

export default defineConfig({
  // …other root-level config…
  preview: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 4173,
    // whitelist your render hostname here:
    allowedHosts: ['mb-voice.onrender.com']
  }
})
