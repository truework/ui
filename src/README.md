# theme

```js
import { theme } from '@truework/ui';
```

## Usage

`@truework/ui` primitives must be wrapped in a `ThemeProvider` from
`styled-components` and provided a `theme` object in order to function. Our
theme is strictly typed and conforms to
[`styled-system`](https://styled-system.com/).

**Only in rare cases should you acccess the `theme` directly.** Most of the
time, you'll only interact with it when extending one of the primitives:

```jsx
const StyledBox = styled(Box)(({ theme }) => `
  color: ${theme.colors.primary};
`);
```

In order to understand the theme and its shape, you should refer to the
[`theme.ts`](https://github.com/truework/ui/blob/master/packages/ui/src/theme.ts)
file itself.

### License

MIT License © [Truework](https://truework.com)
