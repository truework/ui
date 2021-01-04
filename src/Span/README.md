# Span

The lowest level building block in the system, `Span` enables essentially all
[`styled-system`](https://styled-system.com/api) attributes.

In contrast to `Box`, `Span` should be used for `inline` contexts, much like a
native `<span>`.

```js
import { Span } from '@truework/ui'
```

## Usage

```jsx
<Box py='sm'>
  Lorem ipsum dolor
  <Span color='primary'>sit amet</Span>
</Box>
```

### Options

Refer to the [`styled-system`](https://styled-system.com/api) docs.

### License

MIT License © [Truework](https://truework.com)
