import React from 'react';
import { Container } from '../../components/Container';
import { Div } from '../../components/Div';
import { Flex } from '../../components/Flex';
import { Typography, TypoTitle } from '../../components/Typography';
import LeaderTable from './LeaderTable';

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
            <TypoTitle
              size='9'
              responsive
              case='capitalize'
              css={{ mb: '$1' }}
            >
              Official Leaderboard
            </TypoTitle>
            <Typography size='4' css={{ mb: '$10' }}>
              A sub description for this component to add some texture
              to the page
            </Typography>
          </Div>
        </Container>
      </Flex>
      <LeaderTable />
    </>
  );
};

export default Leader;
