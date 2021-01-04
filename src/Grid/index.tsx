import * as React from 'react';
import { ThemeContext, DefaultTheme } from 'styled-components';
import { WidthProps, FlexboxProps, DisplayProps } from 'styled-system';

import { Box } from '../Box';

export type GridGutterContextType = string | string[];

export type GridRowProps = {
  gutter?: GridGutterContextType;
} & FlexboxProps &
  React.HTMLAttributes<HTMLElement>;

export type GridItemProps = FlexboxProps &
  WidthProps &
  DisplayProps &
  React.HTMLAttributes<HTMLElement>;

const Context = React.createContext<GridGutterContextType>('0');

export function convertGutterValuesToPixels(
  theme: DefaultTheme,
  gutter: GridGutterContextType,
  multiplier = 1
) {
  // @ts-ignore
  return [].concat(gutter).map((value) => {
    const inUnits = theme.space[value] ? theme.space[value] : value;
    const [, val, unit] = inUnits.match(/([\d.]+)([^\d]*)/);
    return (parseFloat(val) / 2) * multiplier + unit;
  });
}

export function GridRow({
  children,
  gutter,
  ...rest
}: React.PropsWithChildren<GridRowProps>) {
  const theme = React.useContext(ThemeContext);
  const margin = React.useMemo(
    () => (gutter ? convertGutterValuesToPixels(theme, gutter, -1) : ''),
    [gutter]
  );
  const padding = React.useMemo(
    () => (gutter ? convertGutterValuesToPixels(theme, gutter) : ''),
    [gutter]
  );

  return (
    <Box display="flex" mx={margin} {...rest}>
      <Context.Provider value={padding}>{children}</Context.Provider>
    </Box>
  );
}

export function GridItem({
  children,
  ...rest
}: React.PropsWithChildren<GridItemProps>) {
  return (
    <Context.Consumer>
      {(gutter) => (
        <Box px={gutter} {...rest}>
          {children}
        </Box>
      )}
    </Context.Consumer>
  );
}

GridItem.defaultProps = {
  width: '100%',
};
