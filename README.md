# @sinskiy/ui

[preview](https://sinskiy.github.io/ui)

a simple UI library that I use for my projects, powered by React, Sass and postcss-material-colors

> [!CAUTION]
> This library is unoptimized for external usage. I add features as I need them and this library is not particularly user-friendly, accessible and optimized. Morover, one of the main reasons I created this library was to practice Sass and Storybook.

## usage

1. `npm install -D postcss-material-colors`

2. follow [postcss-material-colors documentation](https://github.com/sinskiy/postcss-material-colors) to add the theme

3. `npm install @sinskiy/ui`

4. use components. example:

```ts
import { Button } from "@sinskiy/ui"

export default function App() {
  return <Button themeColor="primary">hello, world!</Button>
}
```

## environments

postcss-preset-env and autoprefixer are used with zero configuration
