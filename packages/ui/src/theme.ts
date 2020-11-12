import { DefaultTheme } from 'styled-components';
import { rgba } from 'polished';

export type Colors = {
  body: string;
  primary: string;
  secondary: string;
  placeholder: string;
  outline: string;
  background: string;
  white: string;
  error: string;
  warning: string;
  warningDark: string;
  success: string;
  successDark: string;
  highlight: string;
  highlightDark: string;
  [key: string]: string;
};

export type Fonts = {
  roboto: string;
  mono: string;
};

export type Spaces = {
  xxs: string;
  xs: string;
  sm: string;
  med: string;
  lg: string;
  xl: string;
  xxl: string;
  [key: string]: string;
};

export type Shadows = {
  light: string;
  medium: string;
};

export type Sizes = {
  xs: string;
  sm: string;
  med: string;
  lg: string;
};

export type Borders = {
  primary: string;
  outline: string;
  error: string;
  success: string;
};

export type TransitionDurations = {
  xslow: string;
  slow: string;
  fast: string;
};

export type TransitionTimingFunctions = {
  natural: string;
  ease: string;
};

/**
 * @see https://www.styled-components.com/docs/api#typescript
 */
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    fonts: Fonts;
    fontSizes: string[];
    lineHeights: string[];
    fontWeights: number[];
    space: Spaces;
    breakpoints: string[];
    radii: string[];
    shadows: Shadows;
    sizes: Sizes;
    borders: Borders;
    zIndices: number[];
    transitionDurations: TransitionDurations;
    transitionTimingFunctions: TransitionTimingFunctions;
  }
}

export const colors: Colors = {
  body: '#2E3280',
  primary: '#5B63FE',
  primaryDark: '#424DFF',
  secondary: '#686D86',
  placeholder: '#8D91A5',
  outline: '#CCD2DA',
  background: '#F8FAFC',
  white: '#FFFFFF',
  error: '#EC386E',
  warning: '#FFA13C',
  warningDark: '#F48A17',
  success: '#2ABE75',
  successDark: '#1EA161',
  highlight: '#57BEFF',
  highlightDark: '#068CFF',
};

[
  'body',
  'primary',
  'secondary',
  'placeholder',
  'error',
  'warning',
  'success',
].forEach((color) => {
  [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9].forEach((alpha) => {
    colors[`${color}-alpha${alpha.toString().replace('.', '')}`] = rgba(
      colors[color],
      alpha
    );
  });
});

export const fonts = {
  roboto: '"Roboto", sans-serif',
  mono: '"Roboto Mono", monospace',
};

/**
 * Don't extend these type theme styles!
 *
 * If you have questions, ask someone.
 */
export const fontSizes = ['12px', '14px', '16px', '18px', '21px', '32px'];
export const lineHeights = ['16px', '20px', '24px', '24px', '24px', '40px'];
export const fontWeights = [100, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export const space = {
  xxs: '4px',
  xs: '8px',
  sm: '16px',
  med: '24px',
  lg: '32px',
  xl: '48px',
  xxl: '64px',
};

// Bootstrap 4 breakpoints
export const breakpoints = ['576px', '768px', '992px', '1200px'];

export const radii = ['0px', '4px', '6px'];

export const shadows = {
  light:
    '0px 0px 1px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 4px 8px rgba(0, 0, 0, 0.04)',
  medium:
    '0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)',
  large:
    '0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.06)',
  xlarge:
    '0px 0px 1px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04), 0px 24px 32px rgba(0, 0, 0, 0.04)',
};

export const sizes = {
  xs: '450px',
  sm: '568px',
  med: '900px',
  lg: '1200px',
};

export const borders = {
  primary: `1px solid ${colors.primary}`,
  outline: `1px solid ${colors.outline}`,
  error: `1px solid ${colors.error}`,
  success: `1px solid ${colors.success}`,
};

export const zIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const transitionDurations = {
  xslow: '450ms',
  slow: '300ms',
  fast: '150ms',
};

export const transitionTimingFunctions = {
  natural: 'cubic-bezier(.01,.79,.35,.99)',
  ease: 'ease-in-out',
};

export const theme: DefaultTheme = {
  colors,
  fonts,
  fontSizes,
  lineHeights,
  fontWeights,
  space,
  breakpoints,
  radii,
  shadows,
  sizes,
  borders,
  zIndices,
  transitionDurations,
  transitionTimingFunctions,
};
