import { styled } from '../stitches.config';

export const Div = styled('div', {
  // Reset
  boxSizing: 'border-box',
  // TEMP
  variants: {
    border: {
      true: {
        boxShadow: 'inset 0 0 0 2px $colors$error',
      },
    },
  },
});
