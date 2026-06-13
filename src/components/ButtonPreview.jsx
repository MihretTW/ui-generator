import React from 'react';

function ButtonPreview({ settings }) {
  const buttonStyle = {
    width: `${settings.buttonWidth || 160}px`,
    height: `${settings.buttonHeight || 48}px`,
    borderRadius: `${settings.buttonBorderRadius || 8}px`,
    backgroundColor: settings.buttonBackgroundColor || '#0066ff',
    color: settings.buttonTextColor || '#ffffff',
    fontSize: `${settings.buttonFontSize || 16}px`,
    border: settings.buttonBorder || 'none',
    cursor: 'pointer',
    padding: '0 20px',
    fontWeight: '500',
    transition: 'all 0.2s ease',
  };

  return (
    <button style={buttonStyle}>
      {settings.buttonText || "Learn More"}
    </button>
  );
}

export default ButtonPreview;