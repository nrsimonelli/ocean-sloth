import React from 'react';
import { Container } from '../components/Container';
import { Flex } from '../components/Flex';
import { TitleText } from '../components/Text';

const SingleColumn = () => {
  return (
    <Container
      screen
      type='3'
      css={{
        mt: '-64px',
        zIndex: '$2',
        bg: '$primary1',
        borderRadius: '$4',
        boxShadow:
          '0 2px 10px 0 rgba(0,0,0,.03), 0 2px 20px 10px rgba(0,0,0,.02)',
      }}
    >
      <Flex pad='3'>
        <TitleText>Hello</TitleText>
      </Flex>
    </Container>
  );
};

export default SingleColumn;
