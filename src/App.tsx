import React from 'react';
import { Route, Routes } from 'react-router';
import { Flex } from './components/Flex';
import Lost from './pages/Lost/Lost';
import Nav from './pages/Nav/Nav';
import Home from './pages/Home/Home';
import { globalCss } from './stitches.config';
import Leader from './pages/Leader/Leader';
import Event from './pages/Event/Event';

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
  a: {
    color: 'inherit',
    textDecoration: 'inherit',
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
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route index element={<Home />} />
          <Route path='/leaderboards' element={<Leader />} />
          <Route path='/tournaments' element={<Event />} />
          <Route path='*' element={<Lost />} />
        </Route>
      </Routes>
    </Flex>
  );
};

export default App;
