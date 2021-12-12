import React from 'react';
import { Container } from '../../components/Container';
import { Flex } from '../../components/Flex';
import { Typography, TypoTitle } from '../../components/Typography';

const About = () => {
  return (
    <Container
      screen
      type='3'
      css={{
        transform: 'translateY(-80px)',
        bg: '$appBg1',
        color: '$hiContrast',
        borderRadius: '$4',
        zIndex: '$1',
        boxShadow:
          '0 2px 10px 0 rgba(0,0,0,.03), 0 2px 20px 10px rgba(0,0,0,.02)',
      }}
    >
      <Flex direction='column' pad='3'>
        <TypoTitle id='about'>About</TypoTitle>
        <Typography>what is this page about?</Typography>
        <TypoTitle id='event'>Event Types</TypoTitle>
        <Typography>here are the different event types</Typography>
      </Flex>
    </Container>
  );
};

export default About;
