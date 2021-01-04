# Alert

```js
import { Alert } from '@truework/ui';
```

## Usage

```jsx
import { Icon } from '@truework/ui';

export default () => (
  <Alert type='success' appearance='primary' icon={<Icon name='Heart' />}>
    This is a success alert!
  </Alert>
);
```

### Options

- `type` - _required_ - one of `primary`, `warning`, `error`, `success`, `secondary`
- `appearance` - _required_ - one of `primary`, `secondary`
- `icon` - _optional_ - `React.ReactElement`, otherwise infers from `type`

### License

MIT License © [Truework](https://truework.com)
