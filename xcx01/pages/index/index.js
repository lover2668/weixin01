//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperCurrent: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    circular: true,
    imgUrls: [
      'https://p3.pstatp.com/large/43700001e49d85d3ab52',
      'https://p3.pstatp.com/large/39f600038907bf3b9c96',
      'https://p3.pstatp.com/large/31fa0003ed7228adf421'
    ],
    links: [
      '../images/home_bar_1',
      '../images/home_bar_2',
      '../images/home_bar_3'
    ],
    //motto: 'Hello World',
    //userInfo: {},
    //hasUserInfo: false,
    //canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  changeEvent: function (e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  },
  swipClick: function (e) {
    console.log(this.data.swiperCurrent);
    wx.switchTab({
      url: this.data.links[this.data.swiperCurrent]
    })
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
