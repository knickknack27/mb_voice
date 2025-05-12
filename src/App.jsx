import React, { useState } from 'react';
import VoiceAssistant from './components/VoiceAssistant';

export default function App() {
  const [transcript, setTranscript] = useState('');

  return (
    <div className="app-container">
      <VoiceAssistant onTranscript={setTranscript} />
      <div className="transcript-area">
        {transcript ? transcript : <span className="placeholder">Say something...</span>}
      </div>
    </div>
  );
} 