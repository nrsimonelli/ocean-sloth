import {
  slate,
  blue,
  sky,
  indigo,
  whiteA,
  blackA,
  crimson,
  mint,
  yellow,
} from '@radix-ui/colors';
import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

import { SCREENS } from './constants';

export const { styled, config, theme, globalCss, css } =
  createStitches({
    theme: {
      colors: {
        ...slate,
        ...blue,
        ...sky,
        ...indigo,
        ...crimson,
        ...mint,
        ...yellow,
        ...whiteA,
        ...blackA,

        // App backgrounds and raised components
        // 1 - 2 - 3
        // normal, hover, active. Buttons are +1 to each
        // 3 - 4 - 5
        // borders non-interactive, interactive, hover
        // 6 - 7 - 8
        // pure color & solid bg
        // 9 - 10
        // low and high contrast text
        // 11 - 12
        // Dark modes use the same scale

        appBg1: '$base1',
        appBg2: '$base2',
        appBg3: '$base3',

        shadow1: '$blackA1',
        shadow2: '$blackA2',
        shadow3: '$blackA3',

        error1: '$crimson2',
        error2: '$crimson9',
        error3: '$crimson11',

        success1: '$mint2',
        success2: '$mint9',
        success3: '$mint11',

        warning1: '$yellow2',
        warning2: '$yellow9',
        warning3: '$yellow11',

        info1: '$blue2',
        info2: '$blue9',
        info3: '$blue11',

        loContrast: '$base11',
        hiContrast: '$base12',

        white: '$whiteA12',
        black: '$blackA12',

        base1: '$slate1',
        base2: '$slate2',
        base3: '$slate3',
        base4: '$slate4',
        base5: '$slate5',
        base6: '$slate6',
        base7: '$slate7',
        base8: '$slate8',
        base9: '$slate9',
        base10: '$slate10',
        base11: '$slate11',
        base12: '$slate12',

        primary1: '$blue1',
        primary2: '$blue2',
        primary3: '$blue3',
        primary4: '$blue4',
        primary5: '$blue5',
        primary6: '$blue6',
        primary7: '$blue7',
        primary8: '$blue8',
        primary9: '$blue9',
        primary10: '$blue10',
        primary11: '$blue11',
        primary12: '$blue12',

        secondary1: '$indigo1',
        secondary2: '$indigo2',
        secondary3: '$indigo3',
        secondary4: '$indigo4',
        secondary5: '$indigo5',
        secondary6: '$indigo6',
        secondary7: '$indigo7',
        secondary8: '$indigo8',
        secondary9: '$indigo9',
        secondary10: '$indigo10',
        secondary11: '$indigo11',
        secondary12: '$indigo12',

        accent1: '$sky1',
        accent2: '$sky2',
        accent3: '$sky3',
        accent4: '$sky4',
        accent5: '$sky5',
        accent6: '$sky6',
        accent7: '$sky7',
        accent8: '$sky8',
        accent9: '$sky9',
        accent10: '$sky10',
        accent11: '$sky11',
        accent12: '$sky12',
      },
      fonts: {
        untitled:
          'Untitled Sans, -apple-system, system-ui, sans-serif',
        mono: 'Söhne Mono, menlo, monospace',
      },
      fontSizes: {
        1: '12px',
        2: '13px',
        3: '15px',
        4: '17px',
        5: '19px',
        6: '21px',
        7: '27px',
        8: '35px',
        9: '59px',
      },
      space: {
        1: '8px',
        2: '16px',
        3: '24px',
        4: '32px',
        5: '40px',
        6: '48px',
        7: '56px',
        8: '64px',
        9: '72px',
        10: '80px',
        11: '88px',
        12: '96px',
        13: '104px',
        14: '112px',
        15: '120px',
      },
      sizes: {
        1: '8px',
        2: '16px',
        3: '24px',
        4: '32px',
        5: '40px',
        6: '48px',
        7: '56px',
        8: '64px',
        9: '72px',
        10: '80px',
        11: '88px',
        12: '96px',
        13: '104px',
        14: '112px',
        15: '120px',
        full: '100%',
        vh: '100vh',
        vw: '100vw',
        nav: '80px',
        bp1: SCREENS[1],
        bp2: SCREENS[2],
        bp3: SCREENS[3],
        bp4: SCREENS[4],
        bp5: SCREENS[5],
      },
      radii: {
        1: '4px',
        2: '6px',
        3: '8px',
        4: '12px',
        pill: '9999px',
      },
      fontWeights: {
        1: 400,
        2: 500,
        3: 600,
      },
      lineHeights: {
        1: '1',
        2: '1.25',
        3: '1.5',
      },
      borderWidths: {},
      borderStyles: {},
      shadows: {},
      zIndices: {
        1: '100',
        2: '200',
        3: '300',
        4: '400',
        5: '999',
      },
      transitions: {},
    },
    media: {
      bp1: `(min-width: ${SCREENS[1]})`,
      bp2: `(min-width: ${SCREENS[2]})`,
      bp3: `(min-width: ${SCREENS[3]})`,
      bp4: `(min-width: ${SCREENS[4]})`,
      bp5: `(min-width: ${SCREENS[5]})`,
    },
    utils: {
      mainGradient: (
        value: Stitches.PropertyValue<'backgroundImage'>
      ) => ({
        backgroundImage: `linear-gradient(${value}, 
          hsl(205.88, 100%, 50%) 0%, 
          hsl(206.05, 99.66%, 50.06%) 8.1%,
          hsl(206.52, 98.7%, 50.25%) 15.5%,
          hsl(207.27, 97.2%, 50.53%) 22.5%,
          hsl(208.29, 95.24%, 50.89%) 29%,
          hsl(209.56, 92.9%, 51.32%) 35.3%,
          hsl(211.07, 90.26%, 51.79%) 41.2%,
          hsl(212.81, 87.42%, 52.29%) 47.1%,
          hsl(214.74, 84.46%, 52.8%) 52.9%,
          hsl(216.81, 81.5%, 53.3%) 58.8%,
          hsl(218.96, 78.63%, 53.78%) 64.7%,
          hsl(221.09, 75.99%, 54.2%) 71%,
          hsl(223.05, 73.7%, 54.57%) 77.5%,
          hsl(224.69, 71.9%, 54.85%) 84.5%,
          hsl(225.8, 70.73%, 55.03%) 91.9%, hsl(226.21, 70.31%, 55.1%) 100%)`,
      }),
      customGradient: (
        value: Stitches.PropertyValue<'backgroundImage'>
      ) => ({
        backgroundImage: `linear-gradient(${value})`,
      }),
      bg: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
        backgroundColor: value,
      }),
      p: (value: Stitches.PropertyValue<'padding'>) => ({
        padding: value,
      }),
      pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
      }),
      pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
        paddingRight: value,
      }),
      pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
        paddingBottom: value,
      }),
      pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
      }),
      px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      m: (value: Stitches.PropertyValue<'margin'>) => ({
        margin: value,
      }),
      mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
      }),
      mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
        marginRight: value,
      }),
      mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
        marginBottom: value,
      }),
      ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
      }),
      mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
        marginBottom: value,
      }),
      square: (value: Stitches.PropertyValue<'height'>) => ({
        height: value,
        width: value,
      }),
    },
  });

export type CSS = Stitches.CSS<typeof config>;
