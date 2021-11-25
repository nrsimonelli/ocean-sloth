import React from 'react';
import { Route, Routes } from 'react-router';
import { Flex } from './components/Flex';
import Lost from './pages/Lost/Lost';
import Home from './pages/Home/Home';
import { globalCss } from './stitches.config';
import Leader from './pages/Leader/Leader';
import Event from './pages/Event/Event';
import Hero from './pages/Home/Hero';
import ContentLayout from './pages/Content/ContentLayout';
import Overview from './pages/Content/Overview';

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
        <Route path='/' element={<Home />}>
          <Route index element={<Hero />} />
          <Route path='leaderboards' element={<Leader />} />
          <Route path='tournaments' element={<Event />} />
          <Route path='*' element={<Lost />} />
        </Route>
        <Route path='guide' element={<ContentLayout />}>
          <Route index element={<Overview />} />
        </Route>
      </Routes>
    </Flex>
  );
};

export default App;
