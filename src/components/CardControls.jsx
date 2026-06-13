import React from 'react';

function CardControls({ settings, setSettings }) {
  const handleChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div>
        <label>Width (px)</label>
        <input
          type="number"
          value={settings.width || ''}
          onChange={(e) => handleChange('width', e.target.value)}
          style={{ width: '100%' }}
        />
      </div>

      <div>
        <label>Height (px)</label>
        <input
          type="number"
          value={settings.height || ''}
          onChange={(e) => handleChange('height', e.target.value)}
          style={{ width: '100%' }}
        />
      </div>

      <div>
        <label>Text Color</label>
        <input
          type="color"
          value={settings.color || '#000000'}
          onChange={(e) => handleChange('color', e.target.value)}
        />
      </div>

      <div>
        <label>Background Color</label>
        <input
          type="color"
          value={settings.background || '#ffffff'}
          onChange={(e) => handleChange('background', e.target.value)}
        />
      </div>

      <div>
        <label>Border Radius: {settings.borderRadius}</label>
        <input
          type="range"
          min="0"
          max="50"
          value={parseInt(settings.borderRadius) || 0}
          onChange={(e) => handleChange('borderRadius', e.target.value + 'px')}
        />
      </div>

      <div>
  <label>Shadow Size: {settings.shadow || '0px'}</label>
  <input
    type="range"
    min="0"
    max="50"
    value={parseInt(settings.shadow) || 0}
    onChange={(e) => handleChange('shadow', e.target.value + 'px')}
  />
</div>

<div>
  <label>Shadow Color</label>
  <input
    type="color"
    value={settings.shadowColor || '#000000'}
    onChange={(e) => handleChange('shadowColor', e.target.value)}
  />
</div>

      <h3>🔘 Button Settings</h3>

      <div>
        <label>Button Text</label>
        <input 
          type="text" 
          value={settings.buttonText || ''} 
          onChange={e => handleChange('buttonText', e.target.value)} 
          placeholder="Learn More"
        />
      </div>

      <div>
        <label>Button Width (px)</label>
        <input 
          type="number" 
          value={settings.buttonWidth || 160} 
          onChange={e => handleChange('buttonWidth', e.target.value)} 
        />
      </div>

      <div>
        <label>Button Background</label>
        <input 
          type="color" 
          value={settings.buttonBackgroundColor || '#0066ff'} 
          onChange={e => handleChange('buttonBackgroundColor', e.target.value)} 
        />
      </div>

      <div>
        <label>Button Text Color</label>
        <input 
          type="color" 
          value={settings.buttonTextColor || '#ffffff'} 
          onChange={e => handleChange('buttonTextColor', e.target.value)} 
        />
      </div>

      <div>
        <label>Button Border Radius: {settings.buttonBorderRadius || 8}px</label>
        <input 
          type="range" 
          min="0" 
          max="30" 
          value={settings.buttonBorderRadius || 8} 
          onChange={e => handleChange('buttonBorderRadius', e.target.value)} 
        />
      </div>
    </div>
  );
}

export default CardControls;

