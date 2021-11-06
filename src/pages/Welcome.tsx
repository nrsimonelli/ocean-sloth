import React from 'react';
import { Div } from '../components/Div';
import { Container } from '../components/Container';
import { Flex } from '../components/Flex';
import { Text } from '../components/Text';
import { GRADIENT_STRING, NAV_HEIGHT } from '../constants';

const Welcome = () => {
  return (
    <Flex
      direction='column'
      align='center'
      wrap='wrap'
      css={{
        minHeight: '$vh',
        color: '$base1',
        backgroundImage: GRADIENT_STRING,
      }}
    >
      <Container type='3' border css={{ height: NAV_HEIGHT }}>
        <Flex
          direction='row'
          justify='between'
          align='center'
          css={{ height: '$full', px: '$3' }}
        >
          <Div>
            <svg
              width='36'
              height='36'
              viewBox='0 0 15 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM7.49988 1.82689C4.36688 1.8269 1.82707 4.36672 1.82707 7.49972C1.82707 10.6327 4.36688 13.1725 7.49988 13.1726V1.82689Z'
                fill='currentColor'
                fill-rule='evenodd'
                clip-rule='evenodd'
              ></path>
            </svg>
          </Div>
          <Flex
            border
            css={{ [`& ${Text} + ${Text}`]: { pl: '$4' } }}
          >
            <Text>link1</Text>
            <Text>link1</Text>
            <Text>link1</Text>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Welcome;
