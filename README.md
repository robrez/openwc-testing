# Overview

The purpose of this project is to troubleshoot problems encountered when a `lit`-based package depends on a `LitElement@2.0.0`-based package **and** on `@web/dev-server-storybook`

TLDR:  NPM workspaces seems to cause problems, speculating that module resolution in that example is doing something funky

| Branch                                                                                               | status                                              | description                       |
| ---------------------------------------------------------------------------------------------------- | --------------------------------------------------- | --------------------------------- |
| [no-monorepo-storybook](https://github.com/robrez/openwc-testing/tree/no-monorepo-storybook)         | ![pass](https://img.shields.io/badge/pass-success)  | Not a monorepo                    |
| [lerna-storybook](https://github.com/robrez/openwc-testing/tree/lerna-storybook)                     | ![pass](https://img.shields.io/badge/pass-success)  | Lerna monorepo                    |
| [npm-workspaces-storybook](https://github.com/robrez/openwc-testing/tree/npm-workspaces-storybook)   | ![fail](https://img.shields.io/badge/fail-critical) | NPM workspaces                    |
| [npm-workspaces-basic](https://github.com/robrez/openwc-testing/tree/npm-workspaces-basic)           | ![pass](https://img.shields.io/badge/pass-success)  | NPM workspaces, storybook omitted |
| [yarn-workspaces-storybook](https://github.com/robrez/openwc-testing/tree/yarn-workspaces-storybook) | ![pass](https://img.shields.io/badge/pass-success)  | NPM workspaces                    |
