import styled from 'styled-components'
import {
  compose,
  system,
  space,
  layout,
  color,
  border,
  position,
  shadow,
  flexbox,
  textAlign,
  background,
  opacity,
  typography,
  SpaceProps,
  LayoutProps,
  ColorProps,
  BorderProps,
  PositionProps,
  ShadowProps,
  FlexboxProps,
  TextAlignProps,
  BackgroundProps,
  OverflowProps,
  OpacityProps,
  TypographyProps
} from 'styled-system'

type SystemProps = {
  transform?: string
  transitionProperty?: string
  transitionDuration?: string
  transitionTimingFunction?: string
}

export type BoxProps = SpaceProps &
  SpaceProps &
  LayoutProps &
  ColorProps &
  BorderProps &
  PositionProps &
  ShadowProps &
  FlexboxProps &
  TextAlignProps &
  BackgroundProps &
  SystemProps &
  OverflowProps &
  OpacityProps &
  TypographyProps

export const Box = styled.div<BoxProps>(
  {
    position: 'relative'
  },
  compose(
    space,
    layout,
    color,
    border,
    position,
    shadow,
    flexbox,
    textAlign,
    background,
    opacity,
    typography,
    system({
      transform: true,
      transitionProperty: true,
      transitionDuration: {
        property: 'transitionDuration',
        scale: 'transitionDurations'
      },
      transitionTimingFunction: {
        property: 'transitionTimingFunction',
        scale: 'transitionTimingFunctions'
      }
    })
  )
)

Box.displayName = 'Box'
