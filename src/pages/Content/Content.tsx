import React from 'react';
import { Div } from '../../components/Div';
import { HeadingText, Text } from '../../components/Text';

const Content = () => {
  return (
    <Div>
      <HeadingText css={{ mt: '$4', mb: '4px' }}>Summary</HeadingText>

      <Text mb2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Text mb2>
        Scelerisque in dictum non consectetur a erat nam at lectus.
        Non arcu risus quis varius quam quisque.
      </Text>
      <Text mb2>
        Non tellus orci ac auctor augue mauris augue neque. Nisi vitae
        suscipit tellus mauris.
      </Text>
      <Text mb2>
        Enim ut tellus elementum sagittis vitae et leo duis ut.
      </Text>
      <Text mb2>
        Tellus mauris a diam maecenas sed enim ut sem. Tristique
        senectus et netus et malesuada fames ac turpis.
      </Text>
      <Text mb2>
        Est placerat in egestas erat imperdiet sed euismod nisi porta.
        Maecenas sed enim ut sem.
      </Text>
    </Div>
  );
};

export default Content;
