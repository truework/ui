# GlobalStyle

```js
import { GlobalStyle } from '@truework/ui'
```

## Usage

Provides base styles and a simple CSS reset based on the `theme`.

```jsx
import { theme, GlobalStyle } from '@truework/ui'

export default () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)
```

### License

MIT License © [Truework](https://truework.com)
