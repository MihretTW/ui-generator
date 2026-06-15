import React from 'react';

function ButtonPreview({ settings }) {
  const isMobile = settings?.isMobile || false;
  const isTablet = !isMobile && window.innerWidth <= 1024;
  
  const buttonStyle = {
    width: `${settings?.buttonWidth || 160}px`,
    height: `${isMobile ? Math.min(settings?.buttonHeight || 48, 40) : (settings?.buttonHeight || 48)}px`,
    backgroundColor: settings?.buttonBackgroundColor || '#0066ff',
    color: settings?.buttonTextColor || '#ffffff',
    borderRadius: `${settings?.buttonBorderRadius || 8}px`,
    border: 'none',
    fontFamily: settings?.fontFamily || 'inherit',
    fontSize: isMobile ? '0.75rem' : (isTablet ? '0.85rem' : '1rem'),
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    padding: isMobile ? '0 12px' : '0 16px'
  };

  return (
    <button style={buttonStyle}>
      {settings?.buttonText || "Learn More"}
    </button>
  );
}

export default ButtonPreview;