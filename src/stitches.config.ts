import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

import { SCREENS } from './constants';

export const { styled, config, theme, globalCss, css } =
  createStitches({
    theme: {
      colors: {
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
      fontSizes: {},
      space: {},
      sizes: {
        full: '100%',
        vh: '100vh',
        vw: '100vw',
        bp1: SCREENS[1],
        bp2: SCREENS[2],
        bp3: SCREENS[3],
        bp4: SCREENS[4],
        bp5: SCREENS[5],
      },
      radii: {},
      fontWeights: {},
      lineHeights: {},
      letterSpacings: {},
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
    },
  });

export type CSS = Stitches.CSS<typeof config>;
