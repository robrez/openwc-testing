# Overview

![yarn](https://img.shields.io/badge/yarn-555?logo=yarn&style=for-the-badge) ![storybook](https://img.shields.io/badge/storybook-555?logo=storybook&style=for-the-badge)

The purpose of this project is to troubleshoot problems encountered when a `lit`-based package depends on a `LitElement@2.0.0`-based package **and** `@web/dev-server-storybook`

This branch is implemented as a "yarn workspaces" monorepo containing a single package

| function                                                | pass/fail                                          |
| ------------------------------------------------------- | -------------------------------------------------- |
| demo via dev-server <br> `yarn start`                   | ![pass](https://img.shields.io/badge/pass-success) |
| demo via storybook <br> `yarn storybook`                | ![pass](https://img.shields.io/badge/pass-success) |
| demo static storybook site <br> `yarn storybook:static` | ![pass](https://img.shields.io/badge/pass-success) |

# Scripts

**Installing**

```
yarn
```

**Building**

```
yarn build
```

**Demo via `@web/dev-server`**

```
yarn start
```

**Demo via `@web/dev-server-storybook`**

```
yarn storybook
```

**Demo static storybook**

Demo the result of a storybook-build

```
# First build the storybook static site
yarn storybook:build

# Then serve it
yarn storybook:start
```

# Other Notes

```
$ yarn -version
1.22.18
$ node --version
v16.14.2
```

## yarn list results

```
$ yarn list --pattern 'lit-html'
yarn list v1.22.18
├─ lit-html@1.4.1
└─ lit@2.2.2
   └─ lit-html@2.2.2
```

```
$ yarn list --pattern 'lit-element'
yarn list v1.22.18
├─ lit-element@2.5.1
└─ lit@2.2.2
   └─ lit-element@3.2.0
```
