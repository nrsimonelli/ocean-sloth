import React from 'react';
import { Container } from '../../components/Container';
import { Div } from '../../components/Div';
import { Flex } from '../../components/Flex';
import { Typography } from '../../components/Typography';

const LeaderTable = () => {
  return (
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
              <Typography>Rank</Typography>
            </Div>
            <Div border css={{ flex: '2' }}>
              <Typography>Rating</Typography>
            </Div>
            <Div border css={{ flex: '1' }}>
              <Typography>Header</Typography>
            </Div>
            <Div border css={{ flex: '2' }}>
              <Typography>Wins</Typography>
            </Div>
          </Flex>
          <Flex border css={{}}>
            <Div css={{ width: '$8 ' }}>
              <Typography>1</Typography>
            </Div>
            <Div css={{ width: '$10' }}>
              <Typography>1234</Typography>
            </Div>
            <Div css={{ flex: '1' }}>
              <Typography>Name</Typography>
            </Div>
            <Div css={{ width: '$8' }}>
              <Typography>55</Typography>
            </Div>
          </Flex>
          <Flex border css={{}}>
            <Div css={{ width: '$8 ' }}>
              <Typography>2</Typography>
            </Div>
            <Div css={{ width: '$10' }}>
              <Typography>432</Typography>
            </Div>
            <Div css={{ flex: '1' }}>
              <Typography>Name</Typography>
            </Div>
            <Div css={{ width: '$8' }}>
              <Typography>42</Typography>
            </Div>
          </Flex>
          <Flex border css={{}}>
            <Div css={{ width: '$8 ' }}>
              <Typography>3</Typography>
            </Div>
            <Div css={{ width: '$10' }}>
              <Typography>323</Typography>
            </Div>
            <Div css={{ flex: '1' }}>
              <Typography>Name</Typography>
            </Div>
            <Div css={{ width: '$8' }}>
              <Typography>31</Typography>
            </Div>
          </Flex>
        </Div>
      </Flex>
    </Container>
  );
};

export default LeaderTable;
