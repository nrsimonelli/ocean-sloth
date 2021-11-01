import React from 'react';
import { globalCss } from './stitches.config';

const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  body: {
    margin: 0,
    color: '$hiContrast',
    backgroundColor: '$loContrast',
    fontFamily: '$untitled',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTextSizeAdjust: '100%',
  },

  'h1, h2, h3, h4, h5': { fontWeight: 500 },
});

const App = () => {
  globalStyles();
  return <div>Ocean Sloth</div>;
};

export default App;
