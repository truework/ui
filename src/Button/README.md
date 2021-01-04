# Button

```js
import { Button } from '@truework/ui'
```

## Usage

As a normal `<button>`:

```jsx
<Button size='large' appearance='primary'>
  Click Me
</Button>
```

As an anchor `<a>`:

```jsx
<Button as='a' href='/' size='large' appearance='primary'>
  Click Me
</Button>
```

As a `react-router` `Link`:

```jsx
import { Link } from 'react-router'
;<Button as={Link} to='/' size='large' appearance='primary'>
  Click Me
</Button>
```

### Options

- `size` - _required_ - one of `large`, `small`
- `appearance` - _required_ - one of `primary`, `secondary`, `tertiary`
- plus, all button props, of course

### License

MIT License © [Truework](https://truework.com)
