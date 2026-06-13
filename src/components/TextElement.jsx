import React from 'react';

function TextElement({ type = 'p', settings }) {
  const fontSize = type === 'h2' 
    ? (settings.fontSize || settings.titleFontSize || 28)
    : (settings.fontSize || settings.descriptionFontSize || 16);

  const style = {
    margin: 0,
    fontSize: `${fontSize}px`,
    fontWeight: type === 'h2' ? '700' : '400',
    color: settings.color || 'inherit',
    textAlign: 'center',
    lineHeight: '1.4',
    fontFamily: settings.fontFamily || 'Arial',
  };

  if (type === 'h2') {
    return <h2 style={style}>{settings.text || "Beautiful Card"}</h2>;
  }
  return <p style={style}>{settings.text || "This is a nice description for your card."}</p>;
}

export default TextElement;