import React from 'react';

function ButtonPreview({ settings }) {
  const buttonStyle = {
    width: `${settings.buttonWidth || 160}px`,
    height: `${settings.buttonHeight || 48}px`,
    borderRadius: `${settings.buttonBorderRadius || 8}px`,
    backgroundColor: settings.buttonBackgroundColor || '#0066ff',
    color: settings.buttonTextColor || '#ffffff',
    fontSize: `${settings.buttonFontSize || 16}px`,
    border: 'none',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    fontFamily: settings.fontFamily || 'Arial',
  };

  return (
    <button 
      style={buttonStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = settings.buttonHoverBackground || '#0052cc';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = settings.buttonBackgroundColor || '#0066ff';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {settings.buttonText || "Learn More"}
    </button>
  );
}

export default ButtonPreview;