import React from 'react';
import { Container } from '../components/Container';
import { Flex } from '../components/Flex';
import { Text, HeadingText, TitleText } from '../components/Text';
import { NAV_HEIGHT, SCREENS } from '../constants';

const SingleColumn = () => {
  return (
    <Container
      screen
      border
      type='3'
      css={{
        mt: '-64px',
        zIndex: '$2',
        bg: '$primary1',
        borderRadius: '$4',
      }}
    >
      <Flex pad='3'>
        <TitleText>Hello</TitleText>
      </Flex>
    </Container>
  );
};

export default SingleColumn;
