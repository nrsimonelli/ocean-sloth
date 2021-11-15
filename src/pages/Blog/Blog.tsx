import React from 'react';
import { Outlet } from 'react-router';
import { Div } from '../../components/Div';
import { Flex } from '../../components/Flex';
import {
  HeadingText,
  TitleText,
  SubText,
} from '../../components/Text';
import Content from '../Content/Content';

const Blog = () => {
  return (
    <Flex
      direction='row'
      align='start'
      wrap={{ '@initial': 'wrap', '@bp2': 'noWrap' }}
    >
      <Flex
        direction={{ '@initial': 'row', '@bp2': 'column' }}
        align={{ '@initial': 'center', '@bp2': 'start' }}
        border
        css={{
          width: '$full',

          bg: '$accent9',

          '@bp2': {
            flexBasis: 250,
            minHeight: '$vh',
          },
        }}
      >
        <Flex
          border
          align='center'
          justify='between'
          css={{
            width: '$full',
            px: '$3',
            height: '$nav',
          }}
        >
          <HeadingText>Nav Icon</HeadingText>
          <HeadingText>Dropdown</HeadingText>
        </Flex>
        <Flex
          direction='column'
          css={{
            display: 'none',
            '@bp2': { display: 'flex', width: '$full' },
            [`& ${Flex}`]: {
              px: '$3',
              py: '$1',
              width: '$full',
              '&:hover': {
                bg: '$blackA11',
              },
            },
          }}
        >
          <Flex>link</Flex>
          <Flex>link</Flex>
          <Flex>link</Flex>
          <Flex>link</Flex>
          <Flex>link</Flex>
          <Flex>link</Flex>
          <Flex>link</Flex>
          <Flex>link</Flex>
        </Flex>
      </Flex>

      <Flex
        direction='column'
        justify='start'
        align='start'
        border
        css={{
          minHeight: '$vh',
          px: '$3',
          flexGrow: '1',
          py: '$3',
          '@bp2': {
            pt: '$10',
          },
        }}
      >
        <TitleText>Body</TitleText>
        <SubText>A collection of lorem ipsum</SubText>
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default Blog;
