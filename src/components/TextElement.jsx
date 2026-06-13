import React from 'react';

function TextElement({ type = 'p', settings }) {
  const isTitle = type === 'h2';

  const style = {
    margin: 0,
    fontSize: `${isTitle 
      ? (settings.titleFontSize || 28) 
      : (settings.descriptionFontSize || 16)
    }px`,
    fontWeight: isTitle ? '700' : '400',
    color: settings.color || 'inherit',
    textAlign: 'center',
    lineHeight: '1.4',
    fontFamily: settings.fontFamily || 'Arial',   // ← This was missing
  };

  if (isTitle) {
    return <h2 style={style}>{settings.text || "Beautiful Card"}</h2>;
  }
  return <p style={style}>{settings.text || "This is a nice description for your card."}</p>;
}

export default TextElement;