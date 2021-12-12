import { styled } from '../stitches.config';

export const Typography = styled('span', {
  // Reset
  lineHeight: 'inherit',
  margin: '0',
  display: 'block',

  variants: {
    line: {
      1: {
        lineHeight: '$1',
      },
      2: {
        lineHeight: '$2',
      },
      3: {
        lineHeight: '$3',
      },
    },
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
      10: {
        fontSize: '120px',
        letterSpacing: '-.06em',
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
      warning: {
        color: '$warning3',
      },
      success: {
        color: '$success3',
      },
      info: {
        color: '$info3',
      },
      error: {
        color: '$error3',
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
    mb2: {
      true: {
        mb: '$2',
      },
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
    {
      responsive: true,
      size: '9',
      css: {
        fontSize: '$9',
        '@bp2': {
          fontSize: '84px',
        },
      },
    },
    {
      responsive: true,
      size: '10',
      css: {
        fontSize: '21vw',
        '@bp2': {
          fontSize: '120px',
        },
        '@bp3': {
          fontSize: '160px',
        },
      },
    },
  ],

  defaultVariants: {
    line: '3',
    size: '3',
    weight: '1',
  },
});

export const TypoHeading = styled(Typography, {
  defaultVariants: {
    line: '3',
    weight: '2',
    size: '4',
  },
});

export const TypoSub = styled(Typography, {
  defaultVariants: {
    line: '3',
    weight: '1',
    size: '5',
  },
});

export const TypoTitle = styled(Typography, {
  defaultVariants: {
    line: '1',
    weight: '3',
    size: '8',
  },
});

export const TypoHero = styled(Typography, {
  defaultVariants: {
    line: '1',
    weight: '3',
    size: '10',
    responsive: true,
  },
});
