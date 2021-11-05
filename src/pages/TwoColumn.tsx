import React from 'react';
import { Box } from '../components/Box';
import { Container } from '../components/Container';
import { Flex } from '../components/Flex';
import { Text, HeadingText } from '../components/Text';
import { NAV_HEIGHT } from '../constants';

const TwoColumn = () => {
  return (
    <>
      <Flex
        align='center'
        direction='row'
        border
        css={{ height: NAV_HEIGHT, px: '$2' }}
      >
        <Text
          size='7'
          css={{ display: 'inherit', '@bp2': { display: 'none' } }}
        >
          MENU
        </Text>
      </Flex>
      <Flex
        direction='row'
        css={{
          boxShadow: 'inset 0px 0px 0px 2px $colors$error',
          minHeight: `calc(100vh - ${NAV_HEIGHT})`,
        }}
      >
        <Flex
          direction='column'
          align='center'
          border
          css={{
            display: 'none',
            flexGrow: '1',
            flexBasis: '$15',
            '@bp2': {
              display: 'flex',
            },
          }}
        >
          <Text size='7' css={{ py: '$2' }}>
            MENU
          </Text>
        </Flex>
        <Flex
          direction='column'
          border
          css={{ width: '$15', flexGrow: '8' }}
        ></Flex>
      </Flex>
    </>
  );
};

export default TwoColumn;
