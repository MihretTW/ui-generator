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

    title: "Beautiful Card",
    description: "This is an amazing card built with our generator.",

    buttonText: "Learn More",
    buttonWidth: 160,
    buttonHeight: 48,
    buttonBackgroundColor: '#0066ff',
    buttonTextColor: '#ffffff',
    buttonBorderRadius: 8,
  });

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      width: '100%',
      overflow: 'hidden',
      fontFamily: 'Arial, sans-serif'
    }}>

      {/* Left - Controls */}
      <div style={{
        width: '340px',
        minWidth: '300px',
        overflowY: 'auto',
        borderRight: '1px solid #ddd',
        background: '#fafafa',
        boxSizing: 'border-box'
      }}>
        <CardControls settings={settings} setSettings={setSettings} />
      </div>

      {/* Center - LIVE PREVIEW */}
      <div style={{
        flex: 1,
        minWidth: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f0f2f5',
        padding: '40px',
        overflow: 'auto',
        boxSizing: 'border-box'
      }}>
        <CardContainer settings={settings}>
          <TextElement type="h2" settings={settings} />
          <TextElement type="p" settings={settings} />
          <ButtonPreview settings={settings} />
        </CardContainer>
      </div>

      {/* Right - Code / Debug Panel */}
      <div style={{
        width: '380px',
        minWidth: '320px',
        overflowY: 'auto',
        borderLeft: '1px solid #ddd',
        padding: '20px',
        background: '#fafafa',
        boxSizing: 'border-box'
      }}>
        <h3>📋 Generated Code (Coming Soon)</h3>
        <p style={{ color: '#666', marginBottom: '16px' }}>
          The code generator will appear here.
        </p>

        <h4>Current Settings (Debug)</h4>
        <pre style={{
          fontSize: '12px',
          background: '#fff',
          padding: '12px',
          borderRadius: '6px',
          border: '1px solid #eee',
          maxHeight: '70vh',
          overflow: 'auto'
        }}>
          {JSON.stringify(settings, null, 2)}
        </pre>
      </div>

    </div>
  );
}

export default CardBuilder;