import styled from 'styled-components';
import {
  space,
  color,
  typography,
  SpaceProps,
  ColorProps,
  TypographyProps,
} from 'styled-system';

export type BaseLabelProps = TypographyProps & ColorProps & SpaceProps;

export const BaseLabel = styled.label<BaseLabelProps>`
  display: block;
  position: relative;
  font-weight: 500;
  letter-spacing: 0.6px;
  ${typography}
  ${color}
  ${space}
`;

BaseLabel.defaultProps = {
  fontSize: 1,
  lineHeight: 1,
  mb: 'xxs',
};

BaseLabel.displayName = 'Label';
