// just pass through Franz
module.exports = Franz => class Moco extends Franz {
  overrideUserAgent() {
    return window.navigator.userAgent.replace(/(Franz|Electron)([^\s]+\s)/g, '');
  }
};
