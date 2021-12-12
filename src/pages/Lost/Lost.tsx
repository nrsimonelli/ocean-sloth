import React from 'react';
import { Container } from '../../components/Container';
import { Flex } from '../../components/Flex';
import { Typography, TypoTitle } from '../../components/Typography';

const Lost = () => {
  return (
    <Container type='3'>
      <Flex
        direction='column'
        justify='center'
        css={{ height: '$vh', p: '$4' }}
      >
        <TypoTitle css={{ mb: '$1' }}>404</TypoTitle>
        <Typography size='4'>
          A sub description for this component to add some texture to
          the page
        </Typography>
      </Flex>
    </Container>
  );
};

export default Lost;
