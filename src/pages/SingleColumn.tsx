import React from 'react';
import { Container } from '../components/Container';
import { Flex } from '../components/Flex';
import { Text, TextHeading } from '../components/Text';
import { NAV_HEIGHT } from '../constants';

const SingleColumn = () => {
  return (
    <>
      <Flex color='1' direction='row' css={{ height: NAV_HEIGHT }}>
        <Container border type='full'>
          <Text></Text>
        </Container>
      </Flex>
      <Container
        color='2'
        type='full'
        border
        css={{ flexGrow: 1, padding: '$2' }}
      >
        <TextHeading size='8'>Heading</TextHeading>
        <Text>Ocean sloth</Text>
        <Text>
          A paragraph of default text to showcase the way it will
          look.
        </Text>
      </Container>
    </>
  );
};

export default SingleColumn;
