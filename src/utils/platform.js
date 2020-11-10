/**
 * 获取打开当前应用的系统：iOS、Android、wechat
 * @param {*} userAgent:navigator.userAgent
 */
function getPlatform(userAgent) {
  let isAndroid = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1; // android终端
  let isIOS = userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
  let isiPoneX = isIOS && window.screen.width >= 375 && window.screen.height >= 812; // iphoneX

  if (userAgent.toLowerCase().match(/MicroMessenger/i) === 'micromessenger') {
    if (isAndroid) {
      return 'Android-WeChat';
    } else if (isIOS) {
      if (isiPoneX) {
        return 'iOS-iPhoneX-WeChat';
      } else {
        return 'iOS-WeChat';
      }
    } else {
      return 'WeChat';
    }
  } else {
    if (isAndroid) {
      return 'Android';
    } else if (isIOS) {
      if (isiPoneX) {
        return 'iOS-iPhoneX';
      } else {
        return 'iOS';
      }
    } else {
      return 'Unknow';
    }
  }
}
export { getPlatform };
