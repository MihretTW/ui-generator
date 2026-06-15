import React, { useState, useEffect } from 'react';
import CardContainer from './components/CardContainer';
import TextElement from './components/TextElement';
import ButtonPreview from './components/ButtonPreview';
import CardControls from './components/CardControls';

function CardBuilder() {
  const [settings, setSettings] = useState({
    cardWidth: 380,
    cardHeight: 320,
    cardBackground: '#ffffff',
    cardTextColor: '#333333',
    cardBorderRadius: 16,
    cardShadow: 20,
    cardShadowColor: '#000000',
    cardPadding: 32,
    cardHoverScale: 105,
    cardHoverBackground: '#f8f9ff',
    fontFamily: 'Arial, sans-serif',

    title: "Beautiful Card",
    description: "This is an amazing card built with our generator.",

    buttonText: "Learn More",
    buttonWidth: 160,
    buttonHeight: 48,
    buttonBackgroundColor: '#0066ff',
    buttonTextColor: '#ffffff',
    buttonBorderRadius: 8,
  });

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
  const [isTablet, setIsTablet] = useState(typeof window !== 'undefined' ? (window.innerWidth > 768 && window.innerWidth <= 1024) : false);

  // Update document title and meta description
  useEffect(() => {
    document.title = "🎨 Card Builder Pro - Create Beautiful Cards Instantly";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Design and customize beautiful cards in real-time with our interactive card builder. Live preview, responsive design, and easy-to-use controls.";
    
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.name = "viewport";
      viewport.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes";
      document.head.appendChild(viewport);
    }
  }, []);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-adjust card width on small screens
  useEffect(() => {
    if (isMobile && settings.cardWidth > windowWidth - 80) {
      setSettings(prev => ({
        ...prev,
        cardWidth: Math.min(prev.cardWidth, windowWidth - 60)
      }));
    }
  }, [isMobile, windowWidth, settings.cardWidth]);

  // Layout styles with responsive behavior
  const getLayoutStyles = () => {
    if (isMobile) {
      return {
        container: {
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          fontFamily: settings.fontFamily
        },
        header: {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '10px 12px',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.2)',
          flexShrink: 0
        },
        headerTitle: {
          fontSize: '16px',
          fontWeight: 'bold',
          margin: 0,
          marginBottom: '3px'
        },
        headerDescription: {
          fontSize: '9px',
          margin: 0,
          opacity: 0.95
        },
        mainContainer: {
          display: 'flex',
          flex: 1,
          overflow: 'hidden',
          gap: '0px'
        },
        controlsPanel: {
          width: '50%',
          overflowY: 'auto',
          borderRight: '1px solid #ddd',
          background: '#fafafa',
          boxSizing: 'border-box',
          padding: '0',
          height: '100%',
          fontSize: '11px'
        },
        rightPanel: {
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          height: '100%'
        },
        previewPanel: {
          flex: '0 0 auto',
          minHeight: '250px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f0f2f5',
          padding: '12px',
          boxSizing: 'border-box',
          borderBottom: '1px solid #ddd',
          overflow: 'auto'
        },
        debugPanel: {
          flex: 1,
          overflowY: 'auto',
          padding: '10px',
          background: '#fafafa',
          boxSizing: 'border-box',
          fontSize: '10px'
        }
      };
    } else if (isTablet) {
      return {
        container: {
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          fontFamily: settings.fontFamily
        },
        header: {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '14px 20px',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.2)',
          flexShrink: 0
        },
        headerTitle: {
          fontSize: '20px',
          fontWeight: 'bold',
          margin: 0,
          marginBottom: '5px'
        },
        headerDescription: {
          fontSize: '11px',
          margin: 0,
          opacity: 0.95
        },
        mainContent: {
          display: 'flex',
          flex: 1,
          overflow: 'hidden'
        },
        controlsPanel: {
          width: '35%',
          minWidth: '260px',
          overflowY: 'auto',
          borderRight: '1px solid #ddd',
          background: '#fafafa',
          boxSizing: 'border-box',
          flexShrink: 0,
          fontSize: '12px'
        },
        previewPanel: {
          flex: '1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f0f2f5',
          padding: '16px',
          overflow: 'auto',
          boxSizing: 'border-box'
        },
        debugPanel: {
          width: '30%',
          minWidth: '250px',
          overflowY: 'auto',
          borderLeft: '1px solid #ddd',
          padding: '14px',
          background: '#fafafa',
          boxSizing: 'border-box',
          flexShrink: 0,
          fontSize: '11px'
        }
      };
    } else {
      return {
        container: {
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          fontFamily: settings.fontFamily
        },
        header: {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '20px 32px',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.2)',
          flexShrink: 0
        },
        headerTitle: {
          fontSize: '28px',
          fontWeight: 'bold',
          margin: 0,
          marginBottom: '8px',
          letterSpacing: '-0.5px'
        },
        headerDescription: {
          fontSize: '14px',
          margin: 0,
          opacity: 0.95,
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        },
        mainContent: {
          display: 'flex',
          flex: 1,
          overflow: 'hidden'
        },
        controlsPanel: {
          width: '320px',
          minWidth: '280px',
          maxWidth: '380px',
          overflowY: 'auto',
          borderRight: '1px solid #ddd',
          background: '#fafafa',
          boxSizing: 'border-box',
          flexShrink: 0,
          fontSize: '14px'
        },
        previewPanel: {
          flex: 1,
          minWidth: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f0f2f5',
          padding: '20px',
          overflow: 'auto',
          boxSizing: 'border-box'
        },
        debugPanel: {
          width: '360px',
          minWidth: '280px',
          overflowY: 'auto',
          borderLeft: '1px solid #ddd',
          padding: '20px',
          background: '#fafafa',
          boxSizing: 'border-box',
          flexShrink: 0,
          fontSize: '13px'
        }
      };
    }
  };

  const styles = getLayoutStyles();

  // Handle settings update with validation
  const handleSettingsUpdate = (newSettings) => {
    setSettings(newSettings);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cardBuilderSettings', JSON.stringify(newSettings));
    }
  };

  // Load saved settings on mount
  useEffect(() => {
    const savedSettings = typeof window !== 'undefined' ? localStorage.getItem('cardBuilderSettings') : null;
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (e) {
        console.error('Failed to load saved settings', e);
      }
    }
  }, []);

  // Get responsive card dimensions and font sizes
  const getResponsiveCardWidth = () => {
    if (isMobile) {
      return Math.min(settings.cardWidth, windowWidth - 80);
    }
    return settings.cardWidth;
  };

  // Adjust preview font sizes for mobile
  const responsiveSettings = {
    ...settings,
    cardWidth: getResponsiveCardWidth(),
    isMobile: isMobile,
    titleFontSize: isMobile ? '1.2rem' : (isTablet ? '1.5rem' : '1.8rem'),
    descriptionFontSize: isMobile ? '0.85rem' : (isTablet ? '0.9rem' : '1rem'),
    buttonFontSize: isMobile ? '0.8rem' : (isTablet ? '0.9rem' : '1rem')
  };

  return (
    <div style={styles.container}>
      {/* Website Header with Title and Description */}
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>
          🎨 Card Builder Pro
        </h1>
        <p style={styles.headerDescription}>
          Design, customize, and preview beautiful cards in real-time • Live editing
        </p>
      </div>

      {/* For mobile: side-by-side layout with scrollable controls */}
      {isMobile ? (
        <div style={styles.mainContainer}>
          {/* Left - Scrollable Controls with smaller fonts */}
          <div style={styles.controlsPanel}>
            <CardControls 
              settings={settings} 
              setSettings={handleSettingsUpdate}
              isMobile={isMobile}
            />
          </div>

          {/* Right - Preview and Debug */}
          <div style={styles.rightPanel}>
            {/* Preview Section - Always visible with adjusted font sizes */}
            <div style={styles.previewPanel}>
              <CardContainer settings={responsiveSettings}>
                <TextElement type="h2" settings={responsiveSettings} />
                <TextElement type="p" settings={responsiveSettings} />
                <ButtonPreview settings={responsiveSettings} />
              </CardContainer>
            </div>

            {/* Debug Section - Scrollable with smaller fonts */}
            <div style={styles.debugPanel}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '8px',
                flexWrap: 'wrap',
                gap: '6px'
              }}>
                <h4 style={{ margin: 0, fontSize: '10px', fontWeight: 'bold' }}>
                  📋 Settings JSON
                </h4>
                <button
                  onClick={() => {
                    const defaultSettings = {
                      cardWidth: 380,
                      cardHeight: 320,
                      cardBackground: '#ffffff',
                      cardTextColor: '#333333',
                      cardBorderRadius: 16,
                      cardShadow: 20,
                      cardShadowColor: '#000000',
                      cardPadding: 32,
                      cardHoverScale: 105,
                      cardHoverBackground: '#f8f9ff',
                      fontFamily: 'Arial, sans-serif',
                      title: "Beautiful Card",
                      description: "This is an amazing card built with our generator.",
                      buttonText: "Learn More",
                      buttonWidth: 160,
                      buttonHeight: 48,
                      buttonBackgroundColor: '#0066ff',
                      buttonTextColor: '#ffffff',
                      buttonBorderRadius: 8,
                    };
                    handleSettingsUpdate(defaultSettings);
                  }}
                  style={{
                    padding: '3px 8px',
                    fontSize: '9px',
                    background: '#f0f0f0',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                >
                  Reset
                </button>
              </div>
              
              <pre style={{
                fontSize: '8px',
                background: '#1e1e1e',
                color: '#d4d4d4',
                padding: '8px',
                borderRadius: '6px',
                border: '1px solid #333',
                maxHeight: 'calc(100% - 70px)',
                overflow: 'auto',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                fontFamily: 'monospace'
              }}>
                {JSON.stringify(settings, null, 2)}
              </pre>
              
              <div style={{
                marginTop: '8px',
                padding: '5px',
                background: '#e3f2fd',
                borderRadius: '6px',
                fontSize: '8px',
                textAlign: 'center',
                color: '#1976d2'
              }}>
                💡 Scroll controls on left • Preview stays visible
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* For tablet and desktop: three-column layout */
        <div style={styles.mainContent}>
          {/* Left - Controls Panel */}
          <div style={styles.controlsPanel}>
            <CardControls 
              settings={settings} 
              setSettings={handleSettingsUpdate}
              isMobile={isMobile}
            />
          </div>

          {/* Center - LIVE PREVIEW */}
          <div style={styles.previewPanel}>
            <CardContainer settings={responsiveSettings}>
              <TextElement type="h2" settings={responsiveSettings} />
              <TextElement type="p" settings={responsiveSettings} />
              <ButtonPreview settings={responsiveSettings} />
            </CardContainer>
          </div>

          {/* Right - Code/Debug Panel */}
          <div style={styles.debugPanel}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '12px',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              <h4 style={{ margin: 0, fontSize: isTablet ? '13px' : '16px' }}>
                📋 Current Settings
              </h4>
              <button
                onClick={() => {
                  const defaultSettings = {
                    cardWidth: 380,
                    cardHeight: 320,
                    cardBackground: '#ffffff',
                    cardTextColor: '#333333',
                    cardBorderRadius: 16,
                    cardShadow: 20,
                    cardShadowColor: '#000000',
                    cardPadding: 32,
                    cardHoverScale: 105,
                    cardHoverBackground: '#f8f9ff',
                    fontFamily: 'Arial, sans-serif',
                    title: "Beautiful Card",
                    description: "This is an amazing card built with our generator.",
                    buttonText: "Learn More",
                    buttonWidth: 160,
                    buttonHeight: 48,
                    buttonBackgroundColor: '#0066ff',
                    buttonTextColor: '#ffffff',
                    buttonBorderRadius: 8,
                  };
                  handleSettingsUpdate(defaultSettings);
                }}
                style={{
                  padding: isTablet ? '4px 10px' : '6px 12px',
                  fontSize: isTablet ? '11px' : '12px',
                  background: '#f0f0f0',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Reset to Default
              </button>
            </div>
            
            <pre style={{
              fontSize: isTablet ? '11px' : '13px',
              background: '#1e1e1e',
              color: '#d4d4d4',
              padding: isTablet ? '10px' : '12px',
              borderRadius: '8px',
              border: '1px solid #333',
              maxHeight: 'calc(100% - 100px)',
              overflow: 'auto',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              fontFamily: 'monospace'
            }}>
              {JSON.stringify(settings, null, 2)}
            </pre>
            
            <div style={{
              marginTop: '12px',
              fontSize: isTablet ? '10px' : '11px',
              color: '#666',
              textAlign: 'center',
              borderTop: '1px solid #eee',
              paddingTop: '12px'
            }}>
              🎨 Live preview updates in real-time
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardBuilder;