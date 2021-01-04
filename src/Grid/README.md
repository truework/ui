# Grid

```js
import { GridRow, GridItem } from '@truework/ui'
```

## Usage

Two components make up the grid system, `GridRow` and `GridItem`.

`GridRow` establishes a flex context, and provides a _gutter_, if specified.

```jsx
<GridRow gutter='sm' alignItems='center'></GridRow>
```

The only valid children of a `GridRow` are `GridItem`s. Use them to specify
columns with widths.

```jsx
<GridRow gutter='sm'>
  <GridItem width={[1, 1 / 2]}>Hello</GridItem>
  <GridItem width={[1, 1 / 2]}>world!</GridItem>
</GridRow>
```

### `GridRow` options

- `gutter` - _optional_ - key of `theme.spaces`, defaults to `0`
- plus any `flexbox` props from `styled-system`

### `GridItem` options

- any `flexbox`, `width` or `display` props from `styled-system`

### License

MIT License © [Truework](https://truework.com)
