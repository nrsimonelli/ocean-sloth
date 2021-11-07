import { styled } from '../stitches.config';

export const Button = styled('button', {
  // get rid of ugly default styles
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1',
  WebkitTaphighlightColor: 'rgba(0,0,0,0)',
  fontWeight: '$2',

  '&:disabled': {
    backgroundColor: '$base2',
    boxShadow: 'inset 0 0 0 1px $colors$base7',
    color: '$base8',
    pointerEvents: 'none',
  },

  variants: {
    shape: {
      1: { borderRadius: '$1' },
      2: { borderRadius: '$2' },
      3: { borderRadius: '$3' },
      4: { borderRadius: '$4' },
      round: { borderRadius: '$round' },
      pill: { borderRadius: '$pill' },
      none: { borderRadius: 0 },
    },
    size: {},
    type: {
      ghost: {
        backgroundColor: 'transparent',
        boxShadow: 'inset 0 0 0 1px $colors$white',
        '&:hover': {
          backgroundColor: '$white',
          color: '$primary11',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$white, 0 0 0 1px $colors$white',
        },
      },
    },
    color: {},
  },
  // compoundVariants: [{}],
  defaultVariants: {
    type: 'ghost',
  },
});
