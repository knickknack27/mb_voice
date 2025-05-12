# Red Voice Assistant

A minimalist ElevenLabs-like interactive voice assistant UI, using only red and white colors, with a flaring animated assistant and Vapi Web SDK integration.

## Features
- Minimalist, modern UI (white background, red flaring assistant)
- Animated voice assistant visual
- Microphone button to start/stop listening
- Transcript display
- Integrates with [Vapi Web SDK](https://docs.vapi.ai/)

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your Vapi API key:**
   - Open `src/components/VoiceAssistant.jsx`
   - Replace `'YOUR_VAPI_API_KEY'` with your actual Vapi API key.

3. **Run the app:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Customization
- All colors and animations are in `src/components/VoiceAssistant.css` and `src/styles.css`.
- The voice assistant visual is fully customizable.

---

© 2024 Red Voice Assistant 