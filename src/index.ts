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

// 网络
import downloadFile from './downloadFile';

// 用户授权
import authorize from './authorize';

// 小程序跳转
import navigateToMiniProgram from './navigateToMiniProgram';

// 打开千牛组件
import openPlugin from './openPlugin';

export {
  //交互反馈
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
  // 网络
  downloadFile,
  // 用户授权
  authorize,
  // 打开千牛组件
  openPlugin,
  // 小程序跳转
  navigateToMiniProgram,
};
