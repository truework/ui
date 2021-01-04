import styled from 'styled-components'
import {
  compose,
  space,
  layout,
  typography,
  color,
  ColorProps,
  TypographyProps,
  SpaceProps,
  LayoutProps
} from 'styled-system'

import { theme } from '../theme'

interface BoxProps
  extends SpaceProps,
    TypographyProps,
    LayoutProps,
    ColorProps {}

const defaults = {
  fontFamily: theme.fonts.roboto,
  letterSpacing: '0.6px'
}

const sharedSystemProps = compose(space, layout, typography, color)

export const H1 = styled.h1<BoxProps>(sharedSystemProps)

H1.defaultProps = {
  ...defaults,
  fontSize: 5,
  lineHeight: 5,
  fontWeight: 9
}

H1.displayName = 'H1'

export const H2 = styled.h2<BoxProps>(sharedSystemProps)

H2.defaultProps = {
  ...defaults,
  fontSize: 4,
  lineHeight: 4,
  fontWeight: 7
}

H2.displayName = 'H2'

export const H3 = styled.h3<BoxProps>(sharedSystemProps)

H3.defaultProps = {
  ...defaults,
  fontSize: 3,
  lineHeight: 3,
  fontWeight: 5
}

H3.displayName = 'H3'

export const H4 = styled.h4<BoxProps>(sharedSystemProps)

H4.defaultProps = {
  ...defaults,
  fontSize: 2,
  lineHeight: 2,
  fontWeight: 7
}

H4.displayName = 'H4'

export const H5 = styled.h5<BoxProps>(sharedSystemProps)

H5.defaultProps = {
  ...defaults,
  fontSize: 1,
  lineHeight: 1,
  fontWeight: 5
}

H5.displayName = 'H5'

export const H6 = styled.h6<BoxProps>(sharedSystemProps)

H6.defaultProps = {
  ...defaults,
  fontSize: 0,
  lineHeight: 0,
  letterSpacing: '0.3px',
  fontWeight: 5
}

H6.displayName = 'H6'

export const P = styled.p<BoxProps>(sharedSystemProps)

P.defaultProps = {
  ...defaults,
  fontSize: 2,
  lineHeight: 2,
  letterSpacing: '0.3px',
  fontWeight: 4
}

P.displayName = 'P'
