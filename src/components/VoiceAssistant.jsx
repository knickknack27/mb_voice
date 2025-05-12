import React, { useRef, useState } from 'react';
// Import Vapi Web SDK (assume installed as @vapi-ai/web)
import Vapi from '@vapi-ai/web';
import './VoiceAssistant.css';

const VAPI_PUBLIC_KEY = '9e0e6aaf-36c3-4134-8821-7736677ade34'; // <-- Replace with your Vapi public key
const ASSISTANT_ID = 'f0be4e4d-490c-4120-bb9a-021347ea2def'; // <-- Replace with your assistant's ID from the Vapi dashboard

export default function VoiceAssistant({ onTranscript }) {
  const [listening, setListening] = useState(false);
  const vapiRef = useRef(null);

  // Initialize Vapi only once
  const initVapi = () => {
    if (!vapiRef.current) {
      vapiRef.current = new Vapi(VAPI_PUBLIC_KEY);
      vapiRef.current.on('transcript', (data) => {
        if (data && data.text) onTranscript(data.text);
      });
      vapiRef.current.on('error', (err) => {
        console.error('[Vapi] Error:', err);
      });
      vapiRef.current.on('call-started', () => {
        console.log('[Vapi] Call started');
      });
      vapiRef.current.on('call-ended', () => {
        console.log('[Vapi] Call ended');
        setListening(false);
      });
    }
  };

  const handleMicClick = () => {
    initVapi();
    if (!listening) {
      vapiRef.current.start(ASSISTANT_ID);
      setListening(true);
    } else {
      vapiRef.current.stop();
      setListening(false);
    }
  };

  return (
    <div className="voice-assistant-container">
      <div className={`flare-circle ${listening ? 'active' : ''}`}></div>
      <button className={`mic-btn ${listening ? 'active' : ''}`} onClick={handleMicClick} aria-label={listening ? 'Stop listening' : 'Start listening'}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#fff" />
          <path d="M16 22c2.21 0 4-1.79 4-4v-6a4 4 0 10-8 0v6c0 2.21 1.79 4 4 4z" fill="#D32F2F"/>
          <rect x="14" y="24" width="4" height="2" rx="1" fill="#D32F2F"/>
        </svg>
      </button>
    </div>
  );
} 