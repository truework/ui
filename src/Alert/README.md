# Alert

```js
import { Alert } from '@truework/ui';
```

## Usage

```jsx
import { Icon } from '@truework/ui';

export default () => (
  <Alert type="success" appearance="primary" icon={<Icon name="Heart" />}>
    This is a success alert!
  </Alert>
);
```

### Options
- `type` - *required* - one of `primary`, `warning`, `error`, `success`, `secondary`
- `appearance` - *required* - one of `primary`, `secondary`
- `icon` - *optional* - `React.ReactElement`, otherwise infers from `type`


### License

MIT License © [Truework](https://truework.com)
