import React from 'react';

function TextElement({ type = 'p', settings }) {
  const style = {
    margin: 0,
    fontSize: `${settings.fontSize || (type === 'h2' ? 28 : 16)}px`,
    fontWeight: type === 'h2' ? '700' : '400',
    color: settings.color || 'inherit',
    textAlign: settings.textAlign || 'center',
  };

  if (type === 'h2') {
    return <h2 style={style}>{settings.text || "Beautiful Card Title"}</h2>;
  }
  return <p style={style}>{settings.text || "This is a nice description for your card."}</p>;
}

export default TextElement;