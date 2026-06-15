import React from 'react';

function TextElement({ type, settings }) {
  // Ensure settings exist with fallbacks
  const textColor = settings?.cardTextColor || '#333333';
  const fontFamily = settings?.fontFamily || 'Arial, sans-serif';
  
  // Get the actual text content from settings
  const getTextContent = () => {
    if (type === 'h2') {
      return settings?.title || "Beautiful Card";
    }
    return settings?.description || "This is an amazing card built with our generator.";
  };

  const textStyle = {
    margin: 0,
    color: textColor,
    fontFamily: fontFamily,
    transition: 'color 0.2s ease',
    wordBreak: 'break-word',
    maxWidth: '100%'
  };

  if (type === 'h2') {
    return (
      <h2 style={{ ...textStyle, fontSize: '1.8rem', fontWeight: 700 }}>
        {getTextContent()}
      </h2>
    );
  }
  
  return (
    <p style={{ ...textStyle, fontSize: '1rem', lineHeight: 1.5 }}>
      {getTextContent()}
    </p>
  );
}

export default TextElement;