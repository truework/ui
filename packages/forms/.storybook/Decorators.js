import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Box, theme, GlobalStyle } from '../src';

export const Theming = (storyFn) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Box p={2}>{storyFn()}</Box>
  </ThemeProvider>
);
