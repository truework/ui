import * as React from 'react';
import { ThemeContext, DefaultTheme } from 'styled-components';
import { WidthProps, FlexboxProps, DisplayProps } from 'styled-system';

import { Box } from '../Box';

export type GridGutterContextType = string | string[];

export type GridRowProps = {
  gutter?: GridGutterContextType;
  className?: string; // for styled-components
} & FlexboxProps;

export type GridItemProps = {
  className?: string; // for styled-components
} & WidthProps &
  DisplayProps;

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
  className,
  ...flex
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
    <Box display="flex" {...flex} mx={margin} className={className}>
      <Context.Provider value={padding}>{children}</Context.Provider>
    </Box>
  );
}

export function GridItem({
  children,
  width,
  display,
  className,
}: React.PropsWithChildren<GridItemProps>) {
  return (
    <Context.Consumer>
      {(gutter) => (
        <Box width={width} px={gutter} display={display} className={className}>
          {children}
        </Box>
      )}
    </Context.Consumer>
  );
}

GridItem.defaultProps = {
  width: '100%',
};
