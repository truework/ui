# Gutter

```js
import { Gutter } from '@truework/ui'
```

## Usage

`Gutter` is intended to do one thing: add whitespace around a child object. It's a generic
primitive to make layouts easier to reproduce.

By default it adds whitespace on the horizontal axis:

```jsx
<Gutter>{children}</Gutter>
```

But you can also apply the same spacing to the vertical axis:

```jsx
<Gutter withVertical>{children}</Gutter>
```

### Options

- `size` - _optional_ - one of `normal`, `small`, defaults to `normal`
- `withVertical` - _optional_ - `boolean`, defaults to `false`
- `sizeVertical` - _optional_ - one of `normal`, `small`, inherits from `size`

### License

MIT License © [Truework](https://truework.com)
