import React from 'react';
import { Container } from './components/Container';
import { Flex } from './components/Flex';
import { Text } from './components/Text';
import { globalCss } from './stitches.config';

const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  html: {
    scrollBehavior: 'smooth',
    fontSize: '100%',
  },
  body: {
    margin: 0,
    padding: 0,
    color: '$hiContrast',
    backgroundColor: '$appBg1',
    fontFamily: '$untitled',
    lineHeight: '1.5',
    minHeight: '$vh',
    WebkitTextSizeAdjust: '100%',
  },

  'h1, h2, h3, h4, h5': { fontWeight: 500 },
});

const App = () => {
  globalStyles();
  return (
    <Flex direction='column' css={{ minHeight: '$vh' }}>
      <Container border type='responsive'>
        Ocean Sloth
      </Container>
    </Flex>
  );
};

export default App;
