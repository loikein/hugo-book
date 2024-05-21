---
title: KaTeX
---
KaTeX ~~shortcode~~ let you render math typesetting in markdown document. See [KaTeX](https://katex.org/)

## Example

<div class="book-columns flex flex-wrap">
  <div class="flex-even markdown-inner">

```latex
`$$
f(x) = \int_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi
$$`
```

  </div>
  <div class="flex-even markdown-inner">

`$$
f(x) = \int_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi
$$`

  </div>
</div>

## Display Mode Example

Here is some inline example: `$\pi(x)$`, rendered in the same line. And below is `display` example, having `display: block`

`$$
f(x) = \int_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi
$$`

Text continues here.
