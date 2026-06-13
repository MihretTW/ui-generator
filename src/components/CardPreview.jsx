import React from 'react';
import ButtonPreview from './ButtonPreview.jsx';

function CardPreview({ settings }) {
  const cardStyle = {
    width: `${settings.width || 340}px`,
    height: `${settings.height || 300}px`,
    backgroundColor: settings.background || '#ffffff',
    color: settings.color || '#333333',
    borderRadius: settings.borderRadius || '12px',
    boxShadow: `0 8px ${settings.shadow || '16px'} ${settings.shadowColor || '#000000'}88`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '32px',
    gap: '20px',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={cardStyle}>
      <h2 style={{ margin: 0, fontSize: '26px' }}>
        {settings.title || "Card Title"}
      </h2>

      <p style={{ margin: '8px 0 16px 0', opacity: 0.85 }}>
        {settings.description || "This is a sample card description."}
      </p>

      {/* Using ButtonPreview component */}
      <ButtonPreview settings={settings} />
    </div>
  );
}

export default CardPreview;