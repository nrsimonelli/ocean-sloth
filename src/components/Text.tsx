import { styled } from '../stitches.config';

export const Text = styled('span', {
  // Reset
  lineHeight: '1',
  margin: '0',
  display: 'block',

  variants: {
    weight: {
      1: {
        fontWeight: '$1',
      },
      2: {
        fontWeight: '$2',
      },
      3: {
        fontWeight: '$3',
      },
    },
    size: {
      1: {
        fontSize: '$1',
      },
      2: {
        fontSize: '$2',
      },
      3: {
        fontSize: '$3',
      },
      4: {
        fontSize: '$4',
      },
      5: {
        fontSize: '$5',
        letterSpacing: '-.015em',
      },
      6: {
        fontSize: '$6',
        letterSpacing: '-.016em',
      },
      7: {
        fontSize: '$7',
        letterSpacing: '-.031em',
        textIndent: '-.005em',
      },
      8: {
        fontSize: '$8',
        letterSpacing: '-.034em',
        textIndent: '-.018em',
      },
      9: {
        fontSize: '$9',
        letterSpacing: '-.055em',
        textIndent: '-.025em',
      },
    },
    color: {
      primary: {
        color: '$primary11',
      },
      secondary: {
        color: '$secondary11',
      },
      accent: {
        color: '$accent11',
      },
      base: {
        color: '$loContrast',
      },
      contrast: {
        color: '$hiContrast',
      },
    },
    case: {
      uppercase: {
        textTransform: 'uppercase',
      },
      lowercase: {
        textTransform: 'lowercase',
      },
      capitalize: {
        textTransform: 'capitalize',
      },
      initial: {
        textTransform: 'initial',
      },
      inherit: {
        textTransform: 'inherit',
      },
    },
    responsive: {
      true: {},
    },
  },
  compoundVariants: [
    {
      responsive: true,
      size: '4',
      css: {
        fontSize: '$4',
        '@bp2': {
          fontSize: '$5',
        },
      },
    },
    {
      responsive: true,
      size: '6',
      css: {
        fontSize: '$6',
        '@bp2': {
          fontSize: '$7',
        },
      },
    },
    {
      responsive: true,
      size: '7',
      css: {
        fontSize: '$7',
        '@bp2': {
          fontSize: '$8',
        },
      },
    },
    {
      responsive: true,
      size: '8',
      css: {
        fontSize: '$8',
        '@bp2': {
          fontSize: '$9',
        },
      },
    },
  ],

  defaultVariants: {
    size: '3',
    weight: '1',
  },
});

export const HeadingText = styled(Text, {
  defaultVariants: {
    weight: '2',
    size: '4',
    responsive: true,
  },
});
