import React from 'react';

function CardControls({ settings, setSettings }) {
  const handleChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "20px" }}>
      
      <h3>🎨 Card Settings</h3>

      <div>
        <label>Width (px)</label>
        <input
          type="number"
          value={settings.cardWidth || 380}
          onChange={(e) => handleChange('cardWidth', e.target.value)}
          style={{ width: '100%' }}
        />
      </div>

      <div>
        <label>Height (px)</label>
        <input
          type="number"
          value={settings.cardHeight || 320}
          onChange={(e) => handleChange('cardHeight', e.target.value)}
          style={{ width: '100%' }}
        />
      </div>

      <div>
        <label>Background Color</label>
        <input
          type="color"
          value={settings.cardBackground || '#ffffff'}
          onChange={(e) => handleChange('cardBackground', e.target.value)}
        />
      </div>

      <div>
        <label>Text Color</label>
        <input
          type="color"
          value={settings.cardTextColor || '#333333'}
          onChange={(e) => handleChange('cardTextColor', e.target.value)}
        />
      </div>

      <div>
        <label>Border Radius: {settings.cardBorderRadius || 16}px</label>
        <input
          type="range"
          min="0"
          max="50"
          value={settings.cardBorderRadius || 16}
          onChange={(e) => handleChange('cardBorderRadius', e.target.value)}
        />
      </div>

      <div>
        <label>Shadow Size: {settings.cardShadow || 20}px</label>
        <input
          type="range"
          min="0"
          max="50"
          value={settings.cardShadow || 20}
          onChange={(e) => handleChange('cardShadow', e.target.value)}
        />
      </div>

      <div>
        <label>Shadow Color</label>
        <input
          type="color"
          value={settings.cardShadowColor || '#000000'}
          onChange={(e) => handleChange('cardShadowColor', e.target.value)}
        />
      </div>

      <h3>✨ Hover Effects</h3>

      <div>
        <label>Card Hover Scale (%)</label>
        <input 
          type="range" 
          min="100" 
          max="110" 
          value={settings.cardHoverScale || 105} 
          onChange={e => handleChange('cardHoverScale', e.target.value)} 
        />
        <span>{settings.cardHoverScale || 105}%</span>
      </div>

      <div>
        <label>Card Hover Background</label>
        <input 
          type="color" 
          value={settings.cardHoverBackground || '#f8f9ff'} 
          onChange={e => handleChange('cardHoverBackground', e.target.value)} 
        />
      </div>

      <hr />

      <h3>📝 Content Settings</h3>

      <div>
        <label>Title Text</label>
        <input
          type="text"
          value={settings.title || ''}
          onChange={(e) => handleChange('title', e.target.value)}
          placeholder="Beautiful Card"
        />
      </div>

      <div>
        <label>Description Text</label>
        <textarea
          value={settings.description || ''}
          onChange={(e) => handleChange('description', e.target.value)}
          placeholder="This is an amazing card..."
          rows={3}
        />
      </div>

<hr />
      <h3>🔤 Typography</h3>

      <div>
        <label>Font Family</label>
        <select 
          value={settings.fontFamily || 'Arial'} 
          onChange={e => handleChange('fontFamily', e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        >
          <option value="Arial">Arial</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Roboto">Roboto</option>
          <option value="Inter">Inter (Modern)</option>
        </select>
      </div>

      <div>
        <label>Title Font Size (px)</label>
        <input 
          type="number" 
          value={settings.titleFontSize || 28} 
          onChange={e => handleChange('titleFontSize', e.target.value)} 
        />
      </div>

      <div>
        <label>Description Font Size (px)</label>
        <input 
          type="number" 
          value={settings.descriptionFontSize || 16} 
          onChange={e => handleChange('descriptionFontSize', e.target.value)} 
        />
      </div>

      <hr />

      <h3>🔘 Button Settings</h3>

      <div>
        <label>Button Text</label>
        <input 
          type="text" 
          value={settings.buttonText || ''} 
          onChange={e => handleChange('buttonText', e.target.value)} 
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

      <div>
        <label>Button Hover Background</label>
        <input 
          type="color" 
          value={settings.buttonHoverBackground || '#0052cc'} 
          onChange={e => handleChange('buttonHoverBackground', e.target.value)} 
        />
      </div>
    </div>
  );
}

export default CardControls;