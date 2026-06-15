import React, { useState, useRef } from 'react';

function CardContainer({ settings, children }) {
  const cardRef = useRef(null);
  
  // Ensure all settings have valid values
  const cardWidth = settings.cardWidth || 380;
  const cardHeight = settings.cardHeight || 320;
  const cardBackground = settings.cardBackground || '#ffffff';
  const cardTextColor = settings.cardTextColor || '#333333';
  const cardBorderRadius = settings.cardBorderRadius || 16;
  const cardShadow = settings.cardShadow || 20;
  const cardShadowColor = settings.cardShadowColor || '#000000';
  const cardPadding = settings.cardPadding || 32;
  const cardHoverScale = settings.cardHoverScale || 105;
  const cardHoverBackground = settings.cardHoverBackground || '#f8f9ff';
  const fontFamily = settings.fontFamily || 'Arial';

  // Base style object
  const baseStyle = {
    width: `${cardWidth}px`,
    minHeight: `${cardHeight}px`,
    backgroundColor: cardBackground,
    color: cardTextColor,
    borderRadius: `${cardBorderRadius}px`,
    boxShadow: `0 ${Math.min(cardShadow, 30)}px ${Math.max(cardShadow * 0.6, 5)}px ${cardShadowColor}40`,
    padding: `${cardPadding}px`,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
    textAlign: 'center',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fontFamily: fontFamily,
    cursor: 'default',
    // Responsive adaptations
    maxWidth: '100%',
    boxSizing: 'border-box',
    // Ensure proper rendering on all devices
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  };

  // Hover style object
  const getHoverStyle = () => ({
    backgroundColor: cardHoverBackground,
    transform: `scale(${cardHoverScale / 100})`,
    boxShadow: `0 ${Math.min(cardShadow + 12, 45)}px ${Math.max((cardShadow + 12) * 0.7, 8)}px ${cardShadowColor}55`,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
  });

  // Handle mouse enter
  const handleMouseEnter = (e) => {
    const element = e.currentTarget;
    const hoverStyles = getHoverStyle();
    
    // Apply hover styles smoothly
    element.style.backgroundColor = hoverStyles.backgroundColor;
    element.style.transform = hoverStyles.transform;
    element.style.boxShadow = hoverStyles.boxShadow;
  };

  // Handle mouse leave
  const handleMouseLeave = (e) => {
    const element = e.currentTarget;
    
    // Revert to original styles
    element.style.backgroundColor = baseStyle.backgroundColor;
    element.style.transform = 'scale(1)';
    element.style.boxShadow = baseStyle.boxShadow;
  };

  // Add responsive breakpoint handling
  React.useEffect(() => {
    const handleResize = () => {
      if (cardRef.current && window.innerWidth < 480) {
        // Adjust padding for mobile if needed
        const mobilePadding = Math.min(cardPadding, 24);
        if (mobilePadding !== cardPadding) {
          cardRef.current.style.padding = `${mobilePadding}px`;
        }
      } else if (cardRef.current) {
        cardRef.current.style.padding = `${cardPadding}px`;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call

    return () => window.removeEventListener('resize', handleResize);
  }, [cardPadding]);

  return (
    <div 
      ref={cardRef}
      style={baseStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // Add responsive class names for additional styling
      className="card-container"
    >
      {children}
    </div>
  );
}

export default CardContainer;