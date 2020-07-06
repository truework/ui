# Icon

```js
import { Icon } from '@truework/ui';
```

## Usage

`Icon` is just a facade on top of `react-feather` that provides more control via
`styled-system` props.

```jsx
<Icon name="Heart" width="24px" height="24px" color="primary" />
```

### Options

- `name` - *required* - name of the [feather icon](https://feathericons.com/),
    in ProudCamelCase
- plus any `color`, `space`, `layout` or `position` props from `styled-system`
- plus any normal `<svg>` attributes

### Other icons

A few custom icons exist as well. For those, please reference the [source
code](https://github.com/truework/ui/blob/master/packages/ui/src/Icon/index.tsx#L33).

### License

MIT License © [Truework](https://truework.com)
