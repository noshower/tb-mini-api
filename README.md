# tb-pc-api

## 简介

使用 TS 重新定义淘宝小程序的 api, 并将其改成 Promise 形式。

[![npm package](https://img.shields.io/npm/v/tb-pc-api.svg?style=flat-square)](https://www.npmjs.com/package/tb-pc-api) [![GitHub stars](https://img.shields.io/github/stars/noshower/tb-pc-api.svg)](https://github.com/noshower/tb-pc-api/stargazers) [![GitHub forks](https://img.shields.io/github/forks/noshower/tb-pc-api.svg)](https://github.com/noshower/tb-pc-api/network/members) [![NPM downloads](https://img.shields.io/npm/dm/tb-pc-api.svg?style=flat-square)](https://www.npmjs.com/package/tb-pc-api) [![GitHub issues](https://img.shields.io/github/issues/noshower/tb-pc-api.svg)](https://github.com/noshower/tb-pc-api/issues)

## 安装

```js
yarn add tb-pc-api
// 或
npm i tb-pc-api
```

## 特点

- 支持 TypeScript
- 所有异步的 api 都换成了 Promise 的形式
- 官方开发者工具中支持鼠标上移显示函数的定义
- 入参和原 api 保持不变，只是去掉了 success、fail、complete 这三个方法。
- 所有 API 名字与官方保持一致

## 注意

小程序 PC 端 API 的官方文档描述不一定准确，以实际的调用为准。 使用过程中，如有疑问，可以先使用原生 API 试试。

## 例子

```js
import { alert } from 'tb-pc-api';

alert({ title: '你好', content: '我是个demo', buttonText: 'OK' });
```
