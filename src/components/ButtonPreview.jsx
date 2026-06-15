import React from 'react';

function ButtonPreview({ settings }) {
  const buttonStyle = {
    width: `${settings?.buttonWidth || 160}px`,
    height: `${settings?.buttonHeight || 48}px`,
    backgroundColor: settings?.buttonBackgroundColor || '#0066ff',
    color: settings?.buttonTextColor || '#ffffff',
    borderRadius: `${settings?.buttonBorderRadius || 8}px`,
    border: 'none',
    fontFamily: settings?.fontFamily || 'inherit',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  };

  return (
    <button style={buttonStyle}>
      {settings?.buttonText || "Learn More"}
    </button>
  );
}

export default ButtonPreview;