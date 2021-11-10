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
        css={{ height: '$vh', p: '$4' }}
      >
        <TitleText css={{ mb: '$1' }}>
          Official Scythe Leaderboard
        </TitleText>
        <Text size='4'>
          A sub description for this component to add some texture to
          the page
        </Text>
      </Flex>
    </Container>
  );
};

export default Leader;
