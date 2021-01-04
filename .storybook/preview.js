import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle, Gutter } from '../src';

addDecorator(fn => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Gutter withVertical>{fn()}</Gutter>
  </ThemeProvider>
));
