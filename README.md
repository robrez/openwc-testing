# Overview

![npm](https://img.shields.io/badge/npm-555?logo=npm&style=for-the-badge) ![lerna](https://img.shields.io/badge/lerna-555?logo=lerna&style=for-the-badge)

The purpose of this project is to troubleshoot problems encountered when a `lit`-based package depends on a `LitElement@2.0.0`-based package

This branch is implemented as a "lerna" monorepo containing a single package

| function                                                   | pass/fail                                          |
| ---------------------------------------------------------- | -------------------------------------------------- |
| demo via dev-server <br> `npm run start`                   | ![pass](https://img.shields.io/badge/pass-success) |
| demo via storybook <br> `npm run storybook`                | ![pass](https://img.shields.io/badge/pass-success) |
| demo static storybook site <br> `npm run storybook:static` | ![pass](https://img.shields.io/badge/pass-success) |

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
npm run storybook:start
```

# Other Notes

```
$ npm -version
8.5.0
$ node --version
v16.14.2
```

## npm ls results

```
$ npm ls lit-html
@acme/components@0.1.0
├─┬ @material/mwc-button@0.23.0 extraneous
│ └── lit-html@1.4.1 deduped
├─┬ @material/mwc-ripple@0.23.0 extraneous
│ └── lit-html@1.4.1 deduped
├─┬ @web/dev-server-storybook@0.5.0
│ └─┬ storybook-addon-markdown-docs@1.0.4
│   └─┬ @mdjs/core@0.9.4
│     └─┬ @mdjs/mdjs-preview@0.5.6
│       └─┬ lit@2.2.2
│         ├─┬ lit-element@3.2.0
│         │ └── lit-html@2.2.2 deduped
│         └── lit-html@2.2.2
├─┬ lit-element@2.5.1 extraneous
│ └── lit-html@1.4.1 deduped
└── lit-html@1.4.1 extraneous
```

```
$ npm ls lit-element
@acme/components@0.1.0
├─┬ @material/mwc-base@0.23.0 extraneous
│ └── lit-element@2.5.1 deduped
├─┬ @material/mwc-button@0.23.0 extraneous
│ └── lit-element@2.5.1 deduped
├─┬ @material/mwc-icon@0.23.0 extraneous
│ └── lit-element@2.5.1 deduped
├─┬ @material/mwc-ripple@0.23.0 extraneous
│ └── lit-element@2.5.1 deduped
├─┬ @web/dev-server-storybook@0.5.0
│ └─┬ storybook-addon-markdown-docs@1.0.4
│   └─┬ @mdjs/core@0.9.4
│     └─┬ @mdjs/mdjs-preview@0.5.6
│       └─┬ lit@2.2.2
│         └── lit-element@3.2.0
└── lit-element@2.5.1 extraneous
```
