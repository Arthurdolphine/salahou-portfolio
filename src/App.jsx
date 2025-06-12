import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-dark-900 text-light font-sans antialiased transition-colors duration-300">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
