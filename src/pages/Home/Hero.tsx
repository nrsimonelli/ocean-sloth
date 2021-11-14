import React from 'react';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Flex } from '../../components/Flex';
import { Text, TitleText } from '../../components/Text';

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
          <TitleText size='10' css={{ mb: '$1' }}>
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
            <Button shape='pill'>
              <Text>Official Rankings</Text>
            </Button>
            <Button shape='pill'>
              <Text>Events Table</Text>
            </Button>
            <Button shape='pill'>
              <Text>Player History</Text>
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Hero;
