# Third-party notices

Software and fonts redistributed as part of the built site (`site/dist/`).
Every licence below is permissive and compatible with hosting this publicly,
free of charge, including commercially. The obligation each imposes is
attribution, which is what this file discharges.

Project code is MIT and authored prose is CC BY 4.0 — see `LICENSE`. Question
pools, regulation text, and their provenance are covered there too.

---

## Fonts — SIL Open Font License 1.1

Shipped as `.woff2` in the bundle. OFL requires the licence to accompany the
fonts and forbids selling the fonts on their own; neither restricts use here.

| Font | Copyright | Licence |
|---|---|---|
| Inter Variable | The Inter Project Authors | [OFL-1.1](https://github.com/rsms/inter/blob/master/LICENSE.txt) |
| Source Serif 4 Variable | Adobe, with Reserved Font Name 'Source' | [OFL-1.1](https://github.com/adobe-fonts/source-serif/blob/release/LICENSE.md) |
| KaTeX fonts (KaTeX_Main, Math, AMS, …) | KaTeX contributors | [OFL-1.1](https://github.com/KaTeX/KaTeX/blob/main/LICENSE) |

Packaged via [Fontsource](https://fontsource.org/), which vendors the upstream
licence files alongside each font.

## JavaScript — MIT

Copyright notices are those of the respective projects; full texts ship inside
each package under `node_modules/<name>/LICENSE`.

- [Astro](https://github.com/withastro/astro) — the site framework
- [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) and `@tailwindcss/vite`
- [KaTeX](https://github.com/KaTeX/KaTeX) — maths typesetting (code MIT; fonts OFL, above)
- [remark-math](https://github.com/remarkjs/remark-math), [rehype-katex](https://github.com/remarkjs/remark-math)
- [@astrojs/markdown-remark](https://github.com/withastro/astro), [@astrojs/sitemap](https://github.com/withastro/astro)

## JavaScript — ISC

- [d3-force](https://github.com/d3/d3-force), [d3-drag](https://github.com/d3/d3-drag),
  [d3-selection](https://github.com/d3/d3-selection), [d3-zoom](https://github.com/d3/d3-zoom)
  — Copyright Mike Bostock. Used only by the graph explorer.

## Python — build-time only, not redistributed

These produce the site; none of their code ships to a visitor. Listed for
completeness: PyYAML, jsonschema, python-docx, httpx, rich, typer, genanki,
matplotlib, numpy, networkx, SymPy, Pint, schemdraw (all BSD/MIT/Apache-2.0
family), plus scikit-rf in the dev group.

---

## Not redistributed

Fetched during the build for verification, never served:

- Belden and Times Microwave datasheets — only the measured values are used.
  Facts are not copyrightable; the documents are not republished.
- ASTM F3411 and F3586 — paywalled, cited for what they specify, never quoted.
- ARRL band plan — cited as voluntary convention, never reproduced.
