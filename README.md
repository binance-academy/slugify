# slugify

[![Version](https://img.shields.io/npm/v/@binance-academy/slugify.svg?style=flat-square)](https://www.npmjs.com/package/@binance-academy/slugify)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/binance-academy/slugify/Test/master?style=flat-square)](https://github.com/binance-academy/slugify/actions?query=workflow%3ATest)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@binance-academy/slugify.svg?color=yellow&style=flat-square)](https://bundlephobia.com/result?p=@binance-academy/slugify)
[![Downloads](https://img.shields.io/npm/dm/@binance-academy/slugify.svg?color=green&style=flat-square)](https://www.npmjs.com/package/@binance-academy/slugify)
[![CodeStyle](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Generate a slug from a string.

## Install

```shell
npm i @binance-academy/slugify
# -or-
yarn add @binance-academy/slugify
```

## Usage

```javascript
import slugify from "@binance-academy/slugify";

// Output: aaaa
const slug = slugify("aaaa---$%#");
```

> Note: If you want to see more examples, please head over [here](tests/slugify.test.js).
