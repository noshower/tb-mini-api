# tb-pc-api

## 简介

使用 TS 重新定义淘宝小程序的 api, 并将其改成 Promise 形式。

[![npm package](https://img.shields.io/npm/v/tb-pc-api.svg?style=flat-square)](https://www.npmjs.com/package/tb-pc-api) [![GitHub stars](https://img.shields.io/github/stars/noshower/tb-pc-api.svg)](https://github.com/noshower/tb-pc-api/stargazers) [![GitHub forks](https://img.shields.io/github/forks/noshower/tb-pc-api.svg)](https://github.com/noshower/tb-pc-api/network/members) [![NPM downloads](https://img.shields.io/npm/dm/tb-pc-api.svg?style=flat-square)](https://www.npmjs.com/package/tb-pc-api) [![GitHub issues](https://img.shields.io/github/issues/noshower/tb-pc-api.svg)](https://github.com/noshower/tb-pc-api/issues)

## 安装

```js
yarn add tb-pc-api --dev
// 或
npm i tb-pc-api --save-dev
```

## 特点

- 支持 TypeScript
- Promise 的形式
- 官方开发者工具中支持鼠标上移显示函数的定义
- 入参和原 api 保持不变，只是去掉了 success、fail、complete 这三个方法。

## 注意

小程序 PC 端 API 的官方文档描述不一定准确，这些 API 文档可能直接拷贝的是移动端 API 文档的。 使用 tb-pc-api 过程中，如有疑问，可以先使用原生 API 试试。

## 例子

```js
import { alert } from 'tb-pc-api';

alert({ title: '你好', content: '我是个demo', buttonText: 'OK' });
```

## 已封装的方法

#### 交互反馈

| 方法名      | api 名称                                                                                                                       | 功能说明                               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------- |
| alert       | [my.alert](https://miniapp.open.taobao.com/docV3.htm?spm=a219a.15212435.0.0.7115669aM2dxpM&docId=939&docType=20&tag=dev)       | 警告框                                 |
| confirm     | [my.confirm](https://miniapp.open.taobao.com/docV3.htm?spm=a219a.15212435.0.0.7115669aM2dxpM&docId=940&docType=20&tag=dev)     | 确认框                                 |
| hidLoading  | [my.hideLoading](https://miniapp.open.taobao.com/docV3.htm?spm=a219a.15212435.0.0.7115669aM2dxpM&docId=943&docType=20&tag=dev) | 隐藏加载提示                           |
| showLoading | [my.showLoading](https://miniapp.open.taobao.com/docV3.htm?docId=945&docType=20&tag=dev)                                       | 显示加载提示                           |
| showToast   | [my.showToast](https://miniapp.open.taobao.com/docV3.htm?docId=942&docType=20&tag=dev)                                         | 显示一个弱提示，可选择多少秒之后消失。 |
| hideToast   | [my.hideToast](https://miniapp.open.taobao.com/docV3.htm?docId=944&docType=20&tag=dev)                                         | 隐藏弱提示                             |

#### 图片

| 方法名          | api 名称                                                                                                                         | 功能说明     |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| chooseImage     | [my.chooseImage](https://miniapp.open.taobao.com/docV3.htm?spm=a219a.15212435.0.0.3424669aGpaxl6&docId=950&docType=20&tag=dev)   | 选择图片     |
| compressImage   | [my.compressImage](https://miniapp.open.taobao.com/docV3.htm?spm=a219a.15212435.0.0.3424669aGpaxl6&docId=953&docType=20&tag=dev) | 压缩图片     |
| saveImage       | [my.saveImage](https://miniapp.open.taobao.com/docV3.htm?spm=a219a.15212435.0.0.3424669aGpaxl6&docId=952&docType=20&tag=dev)     | 保存图片     |
| previewImage    | [my.previewImage](https://miniapp.open.taobao.com/docV3.htm?spm=a219a.15212435.0.0.3424669aGpaxl6&docId=951&docType=20&tag=dev)  | 预览图片     |
| my.getImageInfo | [my.getImageInfo](https://miniapp.open.taobao.com/docV3.htm?spm=a219a.15212435.0.0.3424669aGpaxl6&docId=954&docType=20&tag=dev)  | 获取图片信息 |

#### 网络

| 方法名       | api 名称                                                                                                                        | 功能说明 |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------- | -------- |
| downloadFile | [my.downloadFile](https://miniapp.open.taobao.com/docV3.htm?spm=a219a.15212435.0.0.24a6669as85Y7D&docId=971&docType=20&tag=dev) | 文件下载 |

#### 文件

| 方法名         | api 名称                                                                                                                       | 功能说明       |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| getFileInfo    | [my.getFileInfo](https://miniapp.open.taobao.com/docV3.htm?spm=a219a.15212435.0.0.24a6669as85Y7D&docId=891&docType=20&tag=dev) | 获取文件信息   |
| chooseFile     | [my.qn.chooseFile](https://miniapp.open.taobao.com/docV3.htm?spm=a219a.15212435.0.0.24a6669as85Y7D&docId=1722&docType=20)      | 选择文件       |
| saveFileToDisk | [my.qn.saveFileToDisk](https://miniapp.open.taobao.com/docV3.htm?spm=a219a.15212435.0.0.24a6669as85Y7D&docId=1846&docType=20)  | 保存文件到磁盘 |

#### 用户授权

| 方法名    | api 名称                                                                                                                     | 功能说明     |
| --------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------ |
| authorize | [my.authorize](https://miniapp.open.taobao.com/docV3.htm?spm=a219a.15212435.0.0.24a6669as85Y7D&docId=988&docType=20&tag=dev) | 发起用户授权 |

#### 打开千牛组件

| 方法名     | api 名称                                                                                                               | 功能说明 |
| ---------- | ---------------------------------------------------------------------------------------------------------------------- | -------- |
| openPlugin | [my.openPlugin](https://miniapp.open.taobao.com/docV3.htm?spm=a219a.15212435.0.0.24a6669as85Y7D&docId=1314&docType=20) | 打开插件 |

#### 小程序跳转

| 方法名                | api 名称                                                                                                                              | 功能说明         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| navigateToMiniProgram | [navigateToMiniProgram](https://miniapp.open.taobao.com/docV3.htm?spm=a219a.15212435.0.0.24a6669as85Y7D&docId=985&docType=20&tag=dev) | 跳转到其他小程序 |
