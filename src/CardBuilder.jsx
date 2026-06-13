import React, { useState } from 'react';
import CardContainer from './components/CardContainer';
import TextElement from './components/TextElement';
import ButtonPreview from './components/ButtonPreview';
import CardControls from './components/CardControls';

function CardBuilder() {
  const [settings, setSettings] = useState({
    cardWidth: 380,
    cardHeight: 320,
    cardBackground: '#ffffff',
    cardTextColor: '#333333',
    cardBorderRadius: 16,
    cardShadow: 20,
    cardShadowColor: '#000000',
    cardPadding: 32,

    // Content
    title: "Beautiful Card",
    description: "This is an amazing card built with our generator.",

    // Button
    buttonText: "Learn More",
    buttonWidth: 160,
    buttonHeight: 48,
    buttonBackgroundColor: '#0066ff',
    buttonTextColor: '#ffffff',
    buttonBorderRadius: 8,
  });

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Left - Controls */}
      <div style={{ width: '340px', overflowY: 'auto', borderRight: '1px solid #ddd', background: '#fafafa' }}>
        <CardControls settings={settings} setSettings={setSettings} />
      </div>

      {/* Center - LIVE PREVIEW */}
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        background: '#f0f2f5',
        padding: '40px'
      }}>
        <CardContainer settings={settings}>
          <TextElement 
            type="h2" 
            settings={{ text: settings.title, color: settings.cardTextColor }} 
          />
          <TextElement 
            type="p" 
            settings={{ text: settings.description, color: settings.cardTextColor }} 
          />
          <ButtonPreview settings={settings} />
        </CardContainer>
      </div>

      {/* Right Panel */}
      <div style={{ 
        width: '380px', 
        borderLeft: '1px solid #ddd', 
        padding: '20px', 
        background: '#fafafa',
        overflowY: 'auto'
      }}>
        <h3>Live Preview</h3>
        <p>The card in the center updates in real-time.</p>
      </div>
    </div>
  );
}

export default CardBuilder;