# @truework/ui ![npm](https://img.shields.io/npm/v/@truework/ui) [![](https://badgen.net/bundlephobia/minzip/@truework/ui)](https://bundlephobia.com/result?p=@truework/ui)

Truework's React UI toolkit. Built with
[styled-components](https://github.com/styled-components/styled-components) and
[styled-system](https://github.com/styled-system/styled-system).

```
npm i @truework/ui --save
```

## Usage

```jsx
import { ThemeProvider } from 'styled-components'
import { theme, Box, H1, Icon } from '@truework/ui'

export default () => (
  <ThemeProvider theme={theme}>
    <Box py='sm'>
      <H1>Hello world!</H1>
      <Icon name='Heart' />
    </Box>
  </ThemeProvider>
)
```

### Components

For docs on individual components, please refer to the [src](https://github.com/truework/ui/tree/master/packages/ui/src) directory.

## Related Projects

- `@truework/forms` - [repo](https://github.com/truework/forms)

### License

MIT License © [Truework](https://truework.com)
