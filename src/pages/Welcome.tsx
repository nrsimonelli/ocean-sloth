import React from 'react';
import { Div } from '../components/Div';
import { Container } from '../components/Container';
import { Flex } from '../components/Flex';
import { Text, TitleText } from '../components/Text';
import { GRADIENT_STRING, NAV_HEIGHT } from '../constants';
import { Button } from '../components/Button';

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
      <Container
        type='3'
        css={{ height: NAV_HEIGHT, position: 'absolute', top: 0 }}
      >
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
          <Flex css={{}}>
            <Div css={{ minWidth: '$14', textAlign: 'center' }}>
              <Text size='3' case='uppercase'>
                link1
              </Text>
            </Div>
            <Div css={{ minWidth: '$14', textAlign: 'center' }}>
              <Text size='3' case='uppercase'>
                link2
              </Text>
            </Div>
            <Div css={{ minWidth: '$14', textAlign: 'center' }}>
              <Text size='3' case='uppercase'>
                link3
              </Text>
            </Div>
          </Flex>
        </Flex>
      </Container>
      <Container type='3'>
        <Flex
          direction='column'
          justify='center'
          css={{ height: '$vh', p: '$4' }}
        >
          <TitleText css={{ mb: '$1' }}>hello friend</TitleText>
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

export default Welcome;
