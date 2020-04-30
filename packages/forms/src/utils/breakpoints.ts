import { theme } from '@truework/ui';

export const sm = () =>
  window.matchMedia(`(min-width: ${theme.breakpoints[0]})`).matches;
export const med = () =>
  window.matchMedia(`(min-width: ${theme.breakpoints[1]})`).matches;
export const lg = () =>
  window.matchMedia(`(min-width: ${theme.breakpoints[2]})`).matches;
export const xl = () =>
  window.matchMedia(`(min-width: ${theme.breakpoints[3]})`).matches;
