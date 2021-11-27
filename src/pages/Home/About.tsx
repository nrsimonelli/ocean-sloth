import React from 'react';
import { Container } from '../../components/Container';
import { Flex } from '../../components/Flex';
import { Text, TitleText } from '../../components/Text';

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
        <TitleText>About</TitleText>
        <Text id='about'>what is this page about?</Text>
      </Flex>
    </Container>
  );
};

export default About;
