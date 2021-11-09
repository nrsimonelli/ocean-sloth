import React from 'react';
import { Flex } from './components/Flex';
import About from './pages/Welcome/About';
import Welcome from './pages/Welcome/Welcome';
import { globalCss } from './stitches.config';

const globalStyles = globalCss({
  '*, *::before, *::after': {
    DivSizing: 'border-Div',
  },
  html: {
    scrollBehavior: 'smooth',
    fontSize: '100%',
  },
  body: {
    margin: 0,
    padding: 0,
    color: '$hiContrast',
    backgroundColor: '$appBg2',
    fontFamily: '$untitled',
    lineHeight: '1',
    WebkitTextSizeAdjust: '100%',
  },

  'h1, h2, h3, h4, h5': { fontWeight: 500 },
});

const App = () => {
  globalStyles();
  return (
    <Flex
      direction='column'
      css={{
        minHeight: '$vh',
      }}
    >
      <Welcome />
      <About />
    </Flex>
  );
};

export default App;
