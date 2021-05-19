# tb-mini-api

## 简介

使用 TS 重新定义淘宝小程序的 api, 并将其改成 Promise 形式。

[![npm package](https://img.shields.io/npm/v/tb-pc-api.svg?style=flat-square)](https://www.npmjs.com/package/tb-pc-api) [![GitHub stars](https://img.shields.io/github/stars/noshower/tb-pc-api.svg)](https://github.com/noshower/tb-pc-api/stargazers) [![GitHub forks](https://img.shields.io/github/forks/noshower/tb-pc-api.svg)](https://github.com/noshower/tb-pc-api/network/members) [![NPM downloads](https://img.shields.io/npm/dm/tb-pc-api.svg?style=flat-square)](https://www.npmjs.com/package/tb-pc-api) [![GitHub issues](https://img.shields.io/github/issues/noshower/tb-pc-api.svg)](https://github.com/noshower/tb-pc-api/issues)

## 安装

```js
yarn add tb-mini-api --dev
// 或
npm i tb-mini-api --save-dev
```

## 特点

- 支持 TypeScript
- Promise 的形式
- 官方开发者工具中支持鼠标上移显示函数的定义
- 入参和原 api 保持不变，只是去掉了 success、fail、complete 这三个方法。

## 例子

```js
import { alert } from 'tb-pc-api';

alert({ title: '你好', content: '我是个demo', buttonText: 'OK' });
```

## 已封装的方法

#### 交互反馈

| 方法名      | api 名称                                                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ |
| alert       | [my.alert](https://miniapp.open.taobao.com/docV3.htm?spm=a219a.15212435.0.0.7115669aM2dxpM&docId=939&docType=20&tag=dev)       |
| confirm     | [my.confirm](https://miniapp.open.taobao.com/docV3.htm?spm=a219a.15212435.0.0.7115669aM2dxpM&docId=940&docType=20&tag=dev)     |
| hidLoading  | [my.hideLoading](https://miniapp.open.taobao.com/docV3.htm?spm=a219a.15212435.0.0.7115669aM2dxpM&docId=943&docType=20&tag=dev) |
| showLoading | [my.showLoading](https://miniapp.open.taobao.com/docV3.htm?docId=945&docType=20&tag=dev)                                       |
| showToast   | [my.showToast](https://miniapp.open.taobao.com/docV3.htm?docId=942&docType=20&tag=dev)                                         |
| hideToast   | [my.hideToast](https://miniapp.open.taobao.com/docV3.htm?docId=944&docType=20&tag=dev)                                         |

#### 图片
