import React from 'react';

function TextElement({ type, settings }) {
  // Ensure settings exist with fallbacks
  const textColor = settings?.cardTextColor || '#333333';
  const fontFamily = settings?.fontFamily || 'Arial, sans-serif';
  const isMobile = settings?.isMobile || false;
  const isTablet = !isMobile && window.innerWidth <= 1024;
  
  // Get the actual text content from settings
  const getTextContent = () => {
    if (type === 'h2') {
      return settings?.title || "Beautiful Card";
    }
    return settings?.description || "This is an amazing card built with our generator.";
  };

  // Responsive font sizes
  const getFontSize = () => {
    if (type === 'h2') {
      if (isMobile) return '1.3rem';
      if (isTablet) return '1.6rem';
      return settings?.titleFontSize || '1.8rem';
    }
    if (isMobile) return '0.8rem';
    if (isTablet) return '0.9rem';
    return settings?.descriptionFontSize || '1rem';
  };

  const textStyle = {
    margin: 0,
    color: textColor,
    fontFamily: fontFamily,
    transition: 'color 0.2s ease',
    wordBreak: 'break-word',
    maxWidth: '100%',
    fontSize: getFontSize(),
    lineHeight: type === 'h2' ? (isMobile ? 1.3 : 1.4) : (isMobile ? 1.4 : 1.5)
  };

  if (type === 'h2') {
    return (
      <h2 style={{ ...textStyle, fontWeight: 700 }}>
        {getTextContent()}
      </h2>
    );
  }
  
  return (
    <p style={textStyle}>
      {getTextContent()}
    </p>
  );
}

export default TextElement;