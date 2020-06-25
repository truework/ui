import styled from 'styled-components';
import {
  space,
  color,
  typography,
  SpaceProps,
  ColorProps,
  TypographyProps,
} from 'styled-system';

export const Label = styled.label<TypographyProps & ColorProps & SpaceProps>`
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
