import React, { useState } from 'react';
import CardBuilder from './CardBuilder';   // Main builder component

function App() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <CardBuilder />
    </div>
  );
}

export default App;