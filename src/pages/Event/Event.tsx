import React from 'react';
import { Container } from '../../components/Container';
import { Flex } from '../../components/Flex';
import { Typography, TypoTitle } from '../../components/Typography';

const Event = () => {
  return (
    <Container type='3'>
      <Flex
        direction='column'
        justify='center'
        css={{ height: '$vh', p: '$3', bg: '$success3' }}
      >
        <TypoTitle css={{ mb: '$1' }}>Event List Page</TypoTitle>
        <Typography size='4'>
          A sub description for this component to add some texture to
          the page
        </Typography>
      </Flex>
    </Container>
  );
};

export default Event;
