import React from 'react';
import { Div } from '../../components/Div';
import {
  TypoHeading,
  Typography,
  TypoTitle,
} from '../../components/Typography';

const Overview = () => {
  return (
    <Div
      css={{
        p: '$3',
      }}
    >
      <TypoTitle>Hello</TypoTitle>
      <TypoHeading css={{ mt: '$4', mb: '4px' }}>Summary</TypoHeading>

      <Typography mb2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Typography mb2>
        Scelerisque in dictum non consectetur a erat nam at lectus.
        Non arcu risus quis varius quam quisque.
      </Typography>
      <Typography mb2>
        Non tellus orci ac auctor augue mauris augue neque. Nisi vitae
        suscipit tellus mauris.
      </Typography>
      <Typography mb2>
        Enim ut tellus elementum sagittis vitae et leo duis ut.
      </Typography>
      <Typography mb2>
        Tellus mauris a diam maecenas sed enim ut sem. Tristique
        senectus et netus et malesuada fames ac turpis.
      </Typography>
      <Typography mb2>
        Est placerat in egestas erat imperdiet sed euismod nisi porta.
        Maecenas sed enim ut sem.
      </Typography>
      <Typography mb2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Typography mb2>
        Scelerisque in dictum non consectetur a erat nam at lectus.
        Non arcu risus quis varius quam quisque.
      </Typography>
      <Typography mb2>
        Non tellus orci ac auctor augue mauris augue neque. Nisi vitae
        suscipit tellus mauris.
      </Typography>
      <Typography mb2>
        Enim ut tellus elementum sagittis vitae et leo duis ut.
      </Typography>
      <Typography mb2>
        Tellus mauris a diam maecenas sed enim ut sem. Tristique
        senectus et netus et malesuada fames ac turpis.
      </Typography>
      <Typography mb2>
        Est placerat in egestas erat imperdiet sed euismod nisi porta.
        Maecenas sed enim ut sem.
      </Typography>
    </Div>
  );
};

export default Overview;
