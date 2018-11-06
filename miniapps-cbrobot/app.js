//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  checkLoginStatus: function () {

  },

  globalData: {
    url: 'https://xcx.qunxing.club',
    share: false,
    IsLogin: false,
    IsAuthorithize: false,
    IsRegister: false,
    height: 0,
    userInfo: null,
  }
})