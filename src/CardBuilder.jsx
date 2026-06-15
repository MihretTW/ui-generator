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
          overflow: 'auto',
          fontFamily: settings.fontFamily
        },
        controlsPanel: {
          width: '100%',
          maxHeight: '40vh',
          overflowY: 'auto',
          borderRight: 'none',
          borderBottom: '1px solid #ddd',
          background: '#fafafa',
          boxSizing: 'border-box',
          flexShrink: 0
        },
        previewPanel: {
          flex: 1,
          minHeight: '40vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f0f2f5',
          padding: '16px',
          overflow: 'auto',
          boxSizing: 'border-box'
        },
        debugPanel: {
          width: '100%',
          maxHeight: '35vh',
          overflowY: 'auto',
          borderLeft: 'none',
          borderTop: '1px solid #ddd',
          padding: '16px',
          background: '#fafafa',
          boxSizing: 'border-box',
          flexShrink: 0
        }
      };
    } else if (isTablet) {
      return {
        container: {
          display: 'flex',
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          fontFamily: settings.fontFamily
        },
        controlsPanel: {
          width: '280px',
          minWidth: '260px',
          overflowY: 'auto',
          borderRight: '1px solid #ddd',
          background: '#fafafa',
          boxSizing: 'border-box',
          flexShrink: 0
        },
        previewPanel: {
          flex: 1,
          minWidth: '250px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f0f2f5',
          padding: '20px',
          overflow: 'auto',
          boxSizing: 'border-box'
        },
        debugPanel: {
          width: '300px',
          minWidth: '260px',
          overflowY: 'auto',
          borderLeft: '1px solid #ddd',
          padding: '16px',
          background: '#fafafa',
          boxSizing: 'border-box',
          flexShrink: 0
        }
      };
    } else {
      return {
        container: {
          display: 'flex',
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          fontFamily: settings.fontFamily
        },
        controlsPanel: {
          width: '320px',
          minWidth: '280px',
          maxWidth: '380px',
          overflowY: 'auto',
          borderRight: '1px solid #ddd',
          background: '#fafafa',
          boxSizing: 'border-box',
          flexShrink: 0
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
          flexShrink: 0
        }
      };
    }
  };

  const styles = getLayoutStyles();

  // Handle settings update with validation
  const handleSettingsUpdate = (newSettings) => {
    setSettings(newSettings);
    // Optional: Save to localStorage for persistence
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

  // Get responsive card dimensions
  const getResponsiveCardWidth = () => {
    if (isMobile) {
      return Math.min(settings.cardWidth, windowWidth - 60);
    }
    return settings.cardWidth;
  };

  const responsiveSettings = {
    ...settings,
    cardWidth: getResponsiveCardWidth()
  };

  return (
    <div style={styles.container}>
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
          <h4 style={{ margin: 0, fontSize: isMobile ? '14px' : '16px' }}>
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
              padding: '6px 12px',
              fontSize: '12px',
              background: '#f0f0f0',
              border: '1px solid #ddd',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.background = '#e0e0e0'}
            onMouseLeave={(e) => e.target.style.background = '#f0f0f0'}
          >
            Reset to Default
          </button>
        </div>
        
        <pre style={{
          fontSize: isMobile ? '11px' : '13px',
          background: '#1e1e1e',
          color: '#d4d4d4',
          padding: '12px',
          borderRadius: '8px',
          border: '1px solid #333',
          maxHeight: isMobile ? 'calc(35vh - 80px)' : 'calc(75vh - 80px)',
          overflow: 'auto',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          fontFamily: 'monospace'
        }}>
          {JSON.stringify(settings, null, 2)}
        </pre>
        
        {isMobile && (
          <div style={{
            marginTop: '12px',
            padding: '8px',
            background: '#e3f2fd',
            borderRadius: '6px',
            fontSize: '11px',
            textAlign: 'center',
            color: '#1976d2'
          }}>
            💡 Tip: Rotate device or resize for better experience
          </div>
        )}
        
        <div style={{
          marginTop: '12px',
          fontSize: '11px',
          color: '#666',
          textAlign: 'center',
          borderTop: '1px solid #eee',
          paddingTop: '12px'
        }}>
          🎨 Live preview updates in real-time
        </div>
      </div>
    </div>
  );
}

export default CardBuilder;