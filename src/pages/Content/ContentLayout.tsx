import React, { useState } from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Div } from '../../components/Div';
import { Flex } from '../../components/Flex';
import { ScrollArea } from '../../components/ScrollArea';
import { HeadingText, Text } from '../../components/Text';

const ContentLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex
      direction={{ '@initial': 'column', '@bp2': 'row' }}
      align='start'
      css={{ mainGradient: 'to bottom left' }}
    >
      <Container
        css={{
          height: '$nav',
          position: 'fixed',
          top: 0,
          color: '$primary1',
          overflowX: 'hidden',
          zIndex: '$4',
          bg: 'inherit',
        }}
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
          <Flex
            css={{
              [`& ${Div}`]: {
                minWidth: '$10',
                textAlign: 'center',
                px: '$1',
                py: '$1',
                '@bp1': {
                  minWidth: '$14',
                },
              },
            }}
          >
            <Div>
              <Text size='2' case='uppercase'>
                <Link to='/'>home</Link>
              </Text>
            </Div>
            <Div>
              <Text size='2' case='uppercase'>
                <Link to='leaderboards'>rankings</Link>
              </Text>
            </Div>
            <Div>
              <Text size='2' case='uppercase'>
                <Link to='tournaments'>events</Link>
              </Text>
            </Div>

            <Button
              css={{ '@bp2': { display: 'none' } }}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Menu open
            </Button>
          </Flex>
        </Flex>
      </Container>

      <Div
        css={{
          width: '$full',
          maxHeight: 'auto',
          color: '$primary1',
          top: '$10',
          left: '0',
          overflowX: 'hidden',
          position: 'fixed',
          zIndex: '$3',
          ...(isOpen ? { bottom: 0 } : {}),

          '@bp2': {
            bottom: '0',
            width: '250px',
          },
        }}
      >
        <ScrollArea>
          <Div
            css={{
              display: isOpen ? 'block' : 'none',
              '@bp2': { display: 'block' },
            }}
          >
            <Div css={{ p: '$3' }}>
              <HeadingText>Overview</HeadingText>
              <Text>description</Text>
              <Text mb2>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </Text>
              <Text mb2>
                Scelerisque in dictum non consectetur a erat nam at
                lectus. Non arcu risus quis varius quam quisque.
              </Text>
              <Text mb2>
                Non tellus orci ac auctor augue mauris augue neque.
                Nisi vitae suscipit tellus mauris.
              </Text>
              <Text mb2>
                Enim ut tellus elementum sagittis vitae et leo duis
                ut.
              </Text>
              <Text mb2>
                Tellus mauris a diam maecenas sed enim ut sem.
                Tristique senectus et netus et malesuada fames ac
                turpis.
              </Text>
              <Text mb2>
                Est placerat in egestas erat imperdiet sed euismod
                nisi porta. Maecenas sed enim ut sem.
              </Text>
              <Text mb2>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </Text>
              <Text mb2>
                Scelerisque in dictum non consectetur a erat nam at
                lectus. Non arcu risus quis varius quam quisque.
              </Text>
              <Text mb2>
                Non tellus orci ac auctor augue mauris augue neque.
                Nisi vitae suscipit tellus mauris.
              </Text>
              <Text mb2>
                Enim ut tellus elementum sagittis vitae et leo duis
                ut.
              </Text>
              <Text mb2>
                Tellus mauris a diam maecenas sed enim ut sem.
                Tristique senectus et netus et malesuada fames ac
                turpis.
              </Text>
              <Text mb2>
                Est placerat in egestas erat imperdiet sed euismod
                nisi porta. Maecenas sed enim ut sem.
              </Text>
              <Text mb2>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </Text>
              <Text mb2>
                Scelerisque in dictum non consectetur a erat nam at
                lectus. Non arcu risus quis varius quam quisque.
              </Text>
              <Text mb2>
                Non tellus orci ac auctor augue mauris augue neque.
                Nisi vitae suscipit tellus mauris.
              </Text>
              <Text mb2>
                Enim ut tellus elementum sagittis vitae et leo duis
                ut.
              </Text>
              <Text mb2>
                Tellus mauris a diam maecenas sed enim ut sem.
                Tristique senectus et netus et malesuada fames ac
                turpis.
              </Text>
              <Text mb2>
                Est placerat in egestas erat imperdiet sed euismod
                nisi porta. Maecenas sed enim ut sem.
              </Text>
            </Div>
            {/* empty div for spacing here if needed */}
          </Div>
        </ScrollArea>
      </Div>

      {/* <Flex
        direction={{ '@initial': 'row', '@bp2': 'column' }}
        align={{ '@initial': 'center', '@bp2': 'start' }}
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
      </Flex> */}

      <Flex
        direction='column'
        css={{
          minHeight: '$vh',
          flexGrow: '1',
          py: '$10',

          '@bp2': {
            pl: '250px',
          },
        }}
      >
        <Flex
          border
          css={{
            bg: '$appBg2',
            borderRadius: '$4',
            zIndex: '$1',
            boxShadow:
              '0 2px 10px 0 rgba(0,0,0,.03), 0 2px 20px 10px rgba(0,0,0,.02)',
          }}
        >
          <Outlet />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContentLayout;
