---
title: Installation
description: Install Spartan in your project
extends: _layouts.documentation
section: content
---

# Installation

## Requirements

- Tailwindcss 2.0 [Install Tailwindcss 2.0](https://tailwindcss.com/docs/installation)

## Installation

Install Spartan via npm.

```bash
npm install @placetopay/spartan@latest --save-dev
```

Make sure you have the tailwind's config file `tailwind.config.js` in your project. In case you dont, generate a new one.

```bash
npx tailwindcss init
```

Spartan is used as a tailwindcss `preset`. You should ddd it to your config file.

```javascript
// tailwind.config.js
module.exports = {
  presets: [
    require('@placetopay/spartan')
  ],
}
```

That's it, build your Tailwind!

## Troubleshooting

It is very possible that your project wont support PostCss8 just yet.

If you get any message like this:

```bash
Error: PostCSS plugin tailwindcss requires PostCSS 8.
```

You may need to [install the PostCSS 7 compatibility build](https://tailwindcss.com/docs/installation#post-css-7-compatibility-build).

```bash
npm uninstall tailwindcss postcss autoprefixer @placetopay/spartan
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9 @placetopay/spartan@latest
```
