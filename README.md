# Overview

![npm](https://img.shields.io/badge/npm-555?logo=npm&style=for-the-badge) ![storybook](https://img.shields.io/badge/storybook-555?logo=storybook&style=for-the-badge)

The purpose of this project is to troubleshoot problems encountered when a `lit`-based package depends on a `LitElement@2.0.0`-based package **and** on `@web/dev-server-storybook`

| Branch                                                                                               | status                                              | description                       |
| ---------------------------------------------------------------------------------------------------- | --------------------------------------------------- | --------------------------------- |
| [no-monorepo-storybook](https://github.com/robrez/openwc-testing/tree/no-monorepo-storybook)         | ![pass](https://img.shields.io/badge/pass-success)  | Not a monorepo                    |
| [lerna-storybook](https://github.com/robrez/openwc-testing/tree/lerna-storybook)                     | ![pass](https://img.shields.io/badge/pass-success)  | Lerna monorepo                    |
| [npm-workspaces-storybook](https://github.com/robrez/openwc-testing/tree/npm-workspaces-storybook)   | ![fail](https://img.shields.io/badge/fail-critical) | NPM workspaces                    |
| [npm-workspaces-basic](https://github.com/robrez/openwc-testing/tree/npm-workspaces-basic)           | ![pass](https://img.shields.io/badge/pass-success)  | NPM workspaces, storybook omitted |
| [yarn-workspaces-storybook](https://github.com/robrez/openwc-testing/tree/yarn-workspaces-storybook) | ![pass](https://img.shields.io/badge/pass-success)  | NPM workspaces                    |
