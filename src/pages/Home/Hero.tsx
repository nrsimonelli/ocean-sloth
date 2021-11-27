import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Flex } from '../../components/Flex';
import { HeroText, Text, TitleText } from '../../components/Text';
import About from './About';

const Hero = () => {
  return (
    <Flex
      direction='column'
      align='center'
      css={{
        minHeight: '$vh',
        color: '$primary1',
        mainGradient: 'to bottom left',
      }}
    >
      <Container type='3'>
        <Flex
          direction='column'
          justify='center'
          css={{ height: '$vh', p: '$3' }}
        >
          <TitleText size='9' responsive css={{ mb: '$1' }}>
            hello friend
          </TitleText>
          <Text size='4'>
            A sub description for this component to add some texture
            to the page
          </Text>
          <Flex
            wrap='wrap'
            css={{
              mt: '$9',
              [`& ${Button}`]: {
                mr: '$3',
                mb: '$3',
                px: '$2',
                py: '12px',
              },
            }}
          >
            <Button as='a' shape='pill' href='#about'>
              <Text>Learn More</Text>
            </Button>

            <Button as='a' shape='pill' href='#'>
              <Text>Events Table</Text>
            </Button>
            <Button as='a' shape='pill' href='#'>
              <Text>Player History</Text>
            </Button>
          </Flex>
        </Flex>
      </Container>
      <About />
    </Flex>
  );
};

export default Hero;
