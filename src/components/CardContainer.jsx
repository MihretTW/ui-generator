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
  };

  return <div style={style}>{children}</div>;
}

export default CardContainer;