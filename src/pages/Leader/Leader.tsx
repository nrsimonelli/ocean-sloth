import React from 'react';
import { Container } from '../../components/Container';
import { Flex } from '../../components/Flex';
import { Text, TitleText } from '../../components/Text';

const Leader = () => {
  return (
    <Container type='3'>
      <Flex
        direction='column'
        justify='center'
        css={{ minHeight: '450px', px: '$3', bg: '$error3' }}
      >
        <TitleText case='capitalize' css={{ mb: '$1' }}>
          Official Leaderboard
        </TitleText>
        <Text size='4' css={{ mb: '$10' }}>
          A sub description for this component to add some texture to
          the page
        </Text>
      </Flex>
      <Flex
        direction='column'
        justify='start'
        css={{
          transform: 'translateY(-64px)',
          p: '$3',
          bg: '$appBg1',
          color: '$hiContrast',
          borderRadius: '$4',
          zIndex: '$1',
          boxShadow:
            '0 2px 10px 0 rgba(0,0,0,.03), 0 2px 20px 10px rgba(0,0,0,.02)',
        }}
      >
        <Text>table</Text>
        <Text>table</Text>
        <Text>table</Text>
        <Text>table</Text>
        <Text>table</Text>
        <Text>table</Text>
        <Text>table</Text>
        <Text>table</Text>
        <Text>table</Text>
        <Text>table</Text>
      </Flex>
    </Container>
  );
};

export default Leader;
