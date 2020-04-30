import styled from 'styled-components';
import {
  alignSelf,
  space,
  layout,
  position,
  AlignSelfProps,
  SpaceProps,
  LayoutProps,
  PositionProps,
  OpacityProps,
  opacity,
} from 'styled-system';

export type ImgProps = SpaceProps &
  LayoutProps &
  PositionProps &
  AlignSelfProps &
  OpacityProps;

export const Img = styled.img<ImgProps>`
  display: block;
  width: 100%;
  ${space}
  ${layout}
  ${position}
  ${alignSelf}
  ${opacity}
`;

Img.displayName = 'Img';
