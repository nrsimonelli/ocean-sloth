import React from 'react';
import { Flex } from '../../components/Flex';

const Footer = () => {
  return (
    <Flex
      direction='column'
      align='center'
      css={{
        minHeight: '$15',
        color: '$primary1',
        mainGradient: 'to bottom left',
      }}
    >
      FOOTER
    </Flex>
  );
};

export default Footer;
