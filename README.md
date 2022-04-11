# Overview

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

The purpose of this project is to troubleshoot problems encountered when a `lit`-based package depends on a `LitElement@2.0.0`-based package

This branch is implemented as a "lerna" monorepo containing a single package

| function                                                   | pass/fail |
| ---------------------------------------------------------- | --------- |
| demo via dev-server <br> `npm run start`                   | [x] pass  |
| demo via storybook <br> `npm run storybook`                | [x] pass  |
| demo static storybook site <br> `npm run storybook:static` | [x] pass  |

# Scripts

**Installing**

```
npm i && lerna bootstrap
```

**Building**

```
npm run build
```

**Demo via `@web/dev-server`**

```
npm run start
```

**Demo via `@web/dev-server-storybook`**

```
npm run storybook
```

**Demo static storybook**

Demo the result of a storybook-build

```
# First build the storybook static site
npm run storybook:build

# Then serve it
npm run storybook:static
```
