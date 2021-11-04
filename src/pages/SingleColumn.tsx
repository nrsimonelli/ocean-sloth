import React from 'react';
import { Container } from '../components/Container';
import { Flex } from '../components/Flex';
import { Text, HeadingText } from '../components/Text';

const SingleColumn = () => {
  return (
    <>
      <Flex color='1' direction='row' css={{ height: '$10' }}>
        <Container border type='responsive'>
          <Text></Text>
        </Container>
      </Flex>
      <Container
        color='2'
        type='responsive'
        css={{ flexGrow: 1, padding: '$2' }}
      >
        <HeadingText size='8'>Heading</HeadingText>
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
