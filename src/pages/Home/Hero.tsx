import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Flex } from '../../components/Flex';
import { Typography, TypoTitle } from '../../components/Typography';
import About from './About';

const Hero = () => {
  return (
    <>
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
            <TypoTitle size='9' responsive css={{ mb: '$1' }}>
              hello friend
            </TypoTitle>
            <Typography size='4'>
              A sub description for this component to add some texture
              to the page
            </Typography>
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
                <Typography>Learn More</Typography>
              </Button>

              <Button as='a' shape='pill' href='#event'>
                <Typography>Event Types</Typography>
              </Button>
              <Link to='leaderboards'>
                <Button shape='pill'>
                  <Typography>Official Rankings</Typography>
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Flex>
      <About />
    </>
  );
};

export default Hero;
