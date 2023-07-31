---
title: KaTeX
---

KaTeX ~~shortcode~~ let you render math typesetting in markdown document. See [KaTeX](https://katex.org/)

## Example
{{< columns >}}

```latex
`$$
f(x) = \int_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi
$$`
```

<--->

`$$
f(x) = \int_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi
$$`

{{< /columns >}}

## Display Mode Example

Here is some inline example: `$\pi(x)$`, rendered in the same line. And below is `display` example, having `display: block`

`$$
f(x) = \int_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi
$$`

Text continues here.
