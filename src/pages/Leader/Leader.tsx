import React from 'react';
import { Container } from '../../components/Container';
import { Div } from '../../components/Div';
import { Flex } from '../../components/Flex';
import { Text, TitleText } from '../../components/Text';

const Leader = () => {
  return (
    <>
      <Flex
        direction='column'
        justify='center'
        css={{
          minHeight: '$vh',
          color: '$primary1',
          mainGradient: 'to bottom left',
        }}
      >
        <Container type='3' css={{}}>
          <Div css={{ p: '$3' }}>
            <TitleText
              responsive
              case='capitalize'
              css={{ mb: '$1' }}
            >
              Official Leaderboard
            </TitleText>
            <Text size='4' css={{ mb: '$10' }}>
              A sub description for this component to add some texture
              to the page
            </Text>
          </Div>
        </Container>
      </Flex>
      <Container
        type='3'
        css={{
          transform: 'translateY(-30vh)',
        }}
      >
        <Flex
          direction='column'
          justify='start'
          css={{
            p: '$3',
            bg: '$appBg1',
            color: '$hiContrast',
            borderRadius: '$4',
            zIndex: '$1',
            minHeight: '$bp2',
            boxShadow:
              '0 2px 10px 0 rgba(0,0,0,.03), 0 2px 20px 10px rgba(0,0,0,.02)',
          }}
        >
          <Div css={{ textAlign: 'center' }}>
            <Flex border css={{}}>
              <Div border css={{ flex: '2' }}>
                <Text>Rank</Text>
              </Div>
              <Div border css={{ flex: '2' }}>
                <Text>Rating</Text>
              </Div>
              <Div border css={{ flex: '1' }}>
                <Text>Header</Text>
              </Div>
              <Div border css={{ flex: '2' }}>
                <Text>Wins</Text>
              </Div>
            </Flex>
            <Flex border css={{}}>
              <Div css={{ width: '$8 ' }}>
                <Text>1</Text>
              </Div>
              <Div css={{ width: '$10' }}>
                <Text>1234</Text>
              </Div>
              <Div css={{ flex: '1' }}>
                <Text>Name</Text>
              </Div>
              <Div css={{ width: '$8' }}>
                <Text>55</Text>
              </Div>
            </Flex>
            <Flex border css={{}}>
              <Div css={{ width: '$8 ' }}>
                <Text>2</Text>
              </Div>
              <Div css={{ width: '$10' }}>
                <Text>432</Text>
              </Div>
              <Div css={{ flex: '1' }}>
                <Text>Name</Text>
              </Div>
              <Div css={{ width: '$8' }}>
                <Text>42</Text>
              </Div>
            </Flex>
            <Flex border css={{}}>
              <Div css={{ width: '$8 ' }}>
                <Text>3</Text>
              </Div>
              <Div css={{ width: '$10' }}>
                <Text>323</Text>
              </Div>
              <Div css={{ flex: '1' }}>
                <Text>Name</Text>
              </Div>
              <Div css={{ width: '$8' }}>
                <Text>31</Text>
              </Div>
            </Flex>
          </Div>
        </Flex>
      </Container>
    </>
  );
};

export default Leader;
