import * as React from 'react';
import styled, { CSSObject } from 'styled-components';
import {
  compose,
  variant,
  space,
  layout,
  position,
  textAlign,
  color,
  SpaceProps,
  LayoutProps,
  PositionProps,
  TextAlignProps,
  ColorProps,
  VariantArgs,
  border,
  BorderProps,
} from 'styled-system';

import { theme } from '../theme';

export type ButtonProps = {
  children: React.ReactNode;
  appearance?: 'primary' | 'secondary' | 'tertiary' | 'error';
  size?: 'small' | 'large' | 'smallSquare' | 'largeSquare';
} & SpaceProps &
  LayoutProps &
  PositionProps &
  TextAlignProps &
  ColorProps &
  BorderProps &
  VariantArgs;

const base: CSSObject = {
  display: 'inline-block',
  background: 'transparent',
  color: 'inherit',
  border: 0,
  padding: 0,
  fontSize: 'inherit',
  fontWeight: 'inherit',
  boxSizing: 'border-box',
  textDecoration: 'none',
  textAlign: 'center',
  cursor: 'pointer',
  outline: 0,
  transitionProperty: 'color, background, box-shadow',
  transitionDuration: '150ms',
  transitionTimingFunction: 'ease-in-out',
  ':hover, :focus, :active': {
    outline: 0,
    color: theme.colors.primary,
    textDecoration: 'none',
  },
  ':disabled': {
    pointerEvents: 'none',
    opacity: 0.6,
  },
};

const system = compose(space, layout, position, textAlign, color, border);

const sharedAppearance = {
  borderRadius: '4px',
  boxShadow: '0 2px 4px 0 rgba(46, 50, 128, 0.05)',
};

const appearance = variant({
  prop: 'appearance',
  variants: {
    primary: {
      ...sharedAppearance,
      bg: 'primary',
      color: 'white',
      border: '1px solid #353CCC',
      ':hover, :focus, :active': {
        outline: 0,
        bg: '#494FCB',
        color: 'white',
        textDecoration: 'none',
      },
    },
    secondary: {
      ...sharedAppearance,
      bg: 'white',
      color: 'secondary',
      border: 'outline',
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.05)',
      ':hover, :focus, :active': {
        outline: 0,
        color: 'body',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        textDecoration: 'none',
      },
    },
    tertiary: {
      ...sharedAppearance,
      bg: 'white',
      color: 'primary',
      border: 'primary',
      ':hover, :focus, :active': {
        outline: 0,
        bg: 'background',
        color: 'primary',
        textDecoration: 'none',
      },
    },
    error: {
      ...sharedAppearance,
      bg: 'white',
      color: 'error',
      border: 'error',
      boxShadow: '0px 2px 4px rgba(236, 56, 110, 0.05)',
      ':hover, :focus, :active': {
        outline: 0,
        boxShadow: '0px 2px 4px rgba(236, 56, 110, 0.15)',
        bg: 'background',
        color: 'error',
        textDecoration: 'none',
      },
    },
  },
});

const size = variant({
  prop: 'size',
  variants: {
    small: {
      fontWeight: 500, // duplicated bc base is no style
      fontSize: 0,
      letterSpacing: '0.3px',
      paddingTop: 'xs',
      paddingBottom: 'xs',
      paddingLeft: 'sm',
      paddingRight: 'sm',
    },
    large: {
      fontWeight: 'bold',
      fontSize: 1,
      letterSpacing: '0.6px',
      paddingTop: 'sm',
      paddingBottom: 'sm',
      paddingLeft: 'med',
      paddingRight: 'med',
    },
    smallSquare: {
      fontWeight: 500,
      fontSize: 0,
      letterSpacing: '0.3px',
      paddingTop: 'xs',
      paddingBottom: 'xs',
      paddingLeft: 'xs',
      paddingRight: 'xs',
      minWidth: '32px',
    },
    largeSquare: {
      fontWeight: 500,
      fontSize: 1,
      letterSpacing: '0.6px',
      paddingTop: 'sm',
      paddingBottom: 'sm',
      paddingLeft: 'sm',
      paddingRight: 'sm',
      minWidth: '50px',
    },
  },
});

const BaseButton = styled.button<ButtonProps>(base, system, appearance, size);
BaseButton.displayName = 'Button';
export const Button = BaseButton;
