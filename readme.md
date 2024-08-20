# case-anything
An opinionated case-anything lib based on [case-anything](https://npmjs.com/package/case-anything)

# Install
```bash
$ pnpm i @vinsurs/case-anything
```
# Usage
```ts
import { camelCaseAnything } from '@vinsurs/case-anything'

const camelCasedObject = camelCaseAnything({
    fooBar: 'fooBar',
    foo_bar: 'foo_bar',
    foo_bar_baz: 'foo_bar_baz'
})
```
And this module exports all availabel functions from [case-anything](https://npmjs.com/package/case-anything)
```ts
import { camelCase } from '@vinsurs/case-anything'
```

# License
MIT