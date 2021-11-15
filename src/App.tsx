import React from 'react';
import { Route, Routes } from 'react-router';
import { Flex } from './components/Flex';
import Lost from './pages/Lost/Lost';
import Nav from './pages/Home/Nav';
import Home from './pages/Home/Home';
import { globalCss } from './stitches.config';
import Leader from './pages/Leader/Leader';
import Event from './pages/Event/Event';
import Hero from './pages/Home/Hero';
import Blog from './pages/Blog/Blog';
import Content from './pages/Content/Content';

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
        {/* 
          <Route path='/' element={<Home />}>


        */}

        <Route path='/' element={<Home />}>
          <Route index element={<Hero />} />
          <Route path='leaderboards' element={<Leader />} />
          <Route path='tournaments' element={<Event />} />
          <Route path='*' element={<Lost />} />
        </Route>
        <Route path='blog' element={<Blog />}>
          <Route index element={<Content />} />
        </Route>
      </Routes>
    </Flex>
  );
};

export default App;
