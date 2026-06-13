import React from 'react';

function CardContainer({ settings, children }) {
  const style = {
    width: `${settings.cardWidth || 380}px`,
    minHeight: `${settings.cardHeight || 320}px`,
    backgroundColor: settings.cardBackground || '#ffffff',
    color: settings.cardTextColor || '#333333',
    borderRadius: `${settings.cardBorderRadius || 16}px`,
    boxShadow: `0 10px ${settings.cardShadow || '20px'} ${settings.cardShadowColor || '#000000'}33`,
    padding: `${settings.cardPadding || 32}px`,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    fontFamily: settings.fontFamily || 'Arial',
    cursor: 'default',
  };

  const hoverStyle = {
    backgroundColor: settings.cardHoverBackground || '#f8f9ff',
    transform: `scale(${settings.cardHoverScale / 100 || 1.05})`,
    boxShadow: `0 20px ${parseInt(settings.cardShadow || 20) + 10}px ${settings.cardShadowColor || '#000000'}44`,
  };

  return (
    <div 
      style={style}
      onMouseEnter={(e) => {
        Object.assign(e.currentTarget.style, hoverStyle);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = style.backgroundColor;
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = style.boxShadow;
      }}
    >
      {children}
    </div>
  );
}

export default CardContainer;