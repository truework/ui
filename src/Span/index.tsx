import styled from 'styled-components'
import {
  compose,
  color,
  border,
  shadow,
  typography,
  space,
  layout,
  position,
  flexbox,
  ColorProps,
  BorderProps,
  ShadowProps,
  TypographyProps,
  SpaceProps,
  LayoutProps,
  PositionProps,
  FlexboxProps
} from 'styled-system'

export type SpanProps = ColorProps &
  BorderProps &
  ShadowProps &
  TypographyProps &
  SpaceProps &
  LayoutProps &
  PositionProps &
  FlexboxProps

export const Span = styled.span<SpanProps>(
  {
    display: 'inline-block',
    position: 'relative'
  },
  compose(color, border, shadow, typography, space, layout, position, flexbox)
)

Span.displayName = 'Span'
