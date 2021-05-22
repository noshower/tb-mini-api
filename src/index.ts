// 应用级事件
import onAppShow from './onAppShow';
import offAppShow from './offAppShow';
import onAppHide from './onAppHide';
import offAppHide from './offAppHide';
import onError from './onError';
import offError from './offError';
import onWindowResized from './onWindowResized';
// 交互反馈
import alert from './alert';
import confirm from './confirm';
import showToast from './showToast';
import hideToast from './hideToast';
import showLoading from './showLoading';
import hideLoading from './hideLoading';

// 动画
import createAnimation from './createAnimation';

// 画布
import createCanvasContext from './createCanvasContext';

// 图片
import chooseImage from './chooseImage';
import compressImage from './compressImage';
import saveImage from './saveImage';
import previewImage from './previewImage';
import getImageInfo from './getImageInfo';

// 视频
import createVideoContext from './createVideoContext';

// 音频
import createInnerAudioContext from './createInnerAudioContext';

// 数据库
import queryDBSize from './queryDBSize';
import database from './database';
import onDatabaseLimitWarning from './onDatabaseLimitWarning';
import onDatabaseLimitDebug from './onDatabaseLimitDebug';

// 文件
import getFileInfo from './getFileInfo';
import saveFile from './saveFile';
import getSavedFileInfo from './getSavedFileInfo';
import getSavedFileList from './getSavedFileList';
import removeSavedFile from './removeSavedFile';

import chooseFile from './chooseFile';
import chooseFileAndGetContent from './chooseFileAndGetContent';
import saveFileToDisk from './saveFileToDisk';

// 缓存
import clearStorage from './clearStorage';
import clearStorageSync from './clearStorageSync';
import getStorage from './getStorage';
import getStorageInfo from './getStorageInfo';
import getStorageInfoSync from './getStorageInfoSync';
import getStorageSync from './getStorageSync';
import removeStorage from './removeStorage';
import removeStorageSync from './removeStorageSync';
import setStorage from './setStorage';
import setStorageSync from './setStorageSync';

// 网络
import uploadFile from './uploadFile';
import downloadFile from './downloadFile';

// canIUse
import canIUse from './canIUse';

// 获取基础库版本号
import sdkVersion from './sdkVersion';

// 系统信息
import getSystemInfoSync from './getSystemInfoSync';
import getSystemInfo from './getSystemInfo';

// 网络状态
import getNetworkType from './getNetworkType';
import onNetworkStatusChange from './onNetworkStatusChange';
import offNetworkStatusChange from './offNetworkStatusChange';

// 剪切板
import setClipboard from './setClipboard';
import getClipboard from './getClipboard';

// 获取服务器时间
import getServerTime from './getServerTime';

// 用户授权
import authorize from './authorize';
import cleanToken from './cleanToken';
import showSubAccountAuth from './showSubAccountAuth';

// 获取授权用户信息
import getAuthUserInfo from './getAuthUserInfo';

// IM 功能
import openChat from './openChat';
import imGetActiveUser from './imGetActiveUser';

// 打开千牛组件
import openPlugin from './openPlugin';
import openCategory from './openCategory';
import changePrice from './changePrice';

// 小程序跳转
import navigateToMiniProgram from './navigateToMiniProgram';

// 退出当前小程序
import exit from './exit';

// webview组件控制
import createWebViewContext from './createWebViewContext';

// 数据安全
import rsa from './rsa';

// 小程序当前运行版本类型
import getRunScene from './getRunScene';

// 自定义分析
import reportAnalytics from './reportAnalytics';

// 模板实例化
import getExtConfig from './getExtConfig';
import getExtConfigSync from './getExtConfigSync';

export {
  // 应用级事件
  onAppShow,
  offAppShow,
  onAppHide,
  offAppHide,
  onError,
  offError,
  onWindowResized,
  // 交互反馈
  alert,
  confirm,
  showToast,
  hideToast,
  showLoading,
  hideLoading,
  // 动画
  createAnimation,
  // 画布
  createCanvasContext,
  // 图片
  chooseImage,
  compressImage,
  saveImage,
  previewImage,
  getImageInfo,
  // 视频
  createVideoContext,
  // 音频
  createInnerAudioContext,
  // 数据库,
  queryDBSize,
  database,
  onDatabaseLimitWarning,
  onDatabaseLimitDebug,
  // 文件
  getFileInfo,
  saveFile,
  getSavedFileInfo,
  getSavedFileList,
  removeSavedFile,
  chooseFile,
  chooseFileAndGetContent,
  saveFileToDisk,
  // 缓存
  clearStorage,
  clearStorageSync,
  getStorage,
  getStorageInfo,
  getStorageInfoSync,
  getStorageSync,
  removeStorage,
  removeStorageSync,
  setStorage,
  setStorageSync,
  // 网络
  uploadFile,
  downloadFile,
  // canIUse
  canIUse,
  // 获取基础库版本号
  sdkVersion,
  // 系统信息
  getSystemInfoSync,
  getSystemInfo,
  // 网络状态
  getNetworkType,
  onNetworkStatusChange,
  offNetworkStatusChange,
  // 剪贴板
  setClipboard,
  getClipboard,
  // 获取服务器时间
  getServerTime,
  // 用户授权
  authorize,
  cleanToken,
  showSubAccountAuth,
  // 获取授权用户信息
  getAuthUserInfo,
  // IM 功能
  openChat,
  imGetActiveUser,
  // 打开千牛组件
  openPlugin,
  openCategory,
  changePrice,
  // 小程序跳转
  navigateToMiniProgram,
  // 退出当前小程序
  exit,
  // webview组件控制
  createWebViewContext,
  // 数据安全
  rsa,
  // 小程序当前运行版本类型
  getRunScene,
  // 自定义分析
  reportAnalytics,
  // 模板实例化
  getExtConfig,
  getExtConfigSync,
};
