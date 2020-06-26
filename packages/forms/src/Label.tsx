import styled from 'styled-components';
import {
  space,
  color,
  typography,
  SpaceProps,
  ColorProps,
  TypographyProps,
} from 'styled-system';

type LabelProps = TypographyProps & ColorProps & SpaceProps;

export const Label = styled.label<LabelProps>`
  display: block;
  position: relative;
  font-weight: 500;
  letter-spacing: 0.6px;
  ${typography}
  ${color}
  ${space}
`;

Label.displayName = 'Label';

Label.defaultProps = {
  fontSize: 1,
  lineHeight: 1,
  mb: 'xs',
};
