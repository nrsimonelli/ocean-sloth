import { styled } from '../stitches.config';

export const Container = styled('div', {
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,
  mx: 'auto',
  width: '$full',

  variants: {
    type: {
      1: { maxWidth: '$bp1' },
      2: { maxWidth: '$bp2' },
      3: { maxWidth: '$bp3' },
      4: { maxWidth: '$bp4' },
      5: { maxWidth: '$bp5' },
      full: { maxWidth: 'none' },
      responsive: {
        '@bp1': {
          maxWidth: '$bp1',
        },
        '@bp2': {
          maxWidth: '$bp2',
        },
        '@bp3': {
          maxWidth: '$bp3',
        },
        '@bp4': {
          maxWidth: '$bp4',
        },
        '@bp5': {
          maxWidth: '$bp5',
        },
      },
    },
    screen: {
      true: {
        minHeight: '$vh',
      },
    },
    border: {
      true: {
        boxShadow: 'inset 0 0 0 1px $colors$secondary8',
      },
    },
    // will remove later
    color: {
      1: {
        backgroundColor: '$primary5',
      },
      2: {
        backgroundColor: '$secondary5',
      },
      3: {
        backgroundColor: '$accent5',
      },
      4: {
        backgroundColor: '$base5',
      },
    },
  },
  defaultVariants: {
    type: 'full',
  },
});
