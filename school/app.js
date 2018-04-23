//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  tapInnerLinkHandler: function (event) {
    console.log(event.currentTarget.dataset.eventParams);
    let param = event.currentTarget.dataset.eventParams,
      pageRoot = {
        'groupCenter': '/eCommerce/pages/groupCenter/groupCenter',
        'shoppingCart': '/eCommerce/pages/shoppingCart/shoppingCart',
        'myOrder': '/eCommerce/pages/myOrder/myOrder',
      };
    if (param) {
      param = JSON.parse(param);
      console.log(param);
      let pageLink = param.inner_page_link;
      console.log(pageRoot);
      console.log(pageLink);
      let url = pageRoot[pageLink] ? pageRoot[pageLink] : '/pages/' + pageLink + '/' + pageLink;
      console.log(url);
      if (url.indexOf('/prePage/') >= 0) {
        this.turnBack();
      } else if (url) {
        let is_redirect = param.is_redirect == 1 ? true : false;
        this.turnToPage(url, is_redirect);
      }
    }
  },
  
  turnToPage: function (url, isRedirect) {
    console.log(url)
    console.log(isRedirect)
    let tabBarPagePathArr = this.getTabPagePathArr();
    console.log(tabBarPagePathArr)

    if (this.globalData.turnToPageFlag) return;
    this.globalData.turnToPageFlag = true;
    setTimeout(() => {
      this.globalData.turnToPageFlag = false;
    }, 1000)
    
    if (tabBarPagePathArr.indexOf(url) != -1) {
      this.switchToTab(url);
      return;
    }
    
    if (!isRedirect) {
      wx.navigateTo({
        url: url
      });
    } else {
      wx.redirectTo({
        url: url
      });
    }
  },
  getTabPagePathArr: function () {
    return JSON.parse(this.globalData.tabBarPagePathArr);
  },
  switchToTab: function (url) {
    wx.switchTab({
      url: url
    });
  },

  globalData: {
    appId: 'rYutUqUUaR',
    tabBarPagePathArr: '["/pages/home/home","/pages/course/course","/pages/video/video","/pages/mine/mine"]',
    homepageRouter: 'home',
    formData: null,
    userInfo: {},
    systemInfo: null,
    sessionKey: '',
    notBindXcxAppId: false,
    waimaiTotalNum: 0,
    waimaiTotalPrice: 0,
    takeoutLocate: {},
    takeoutRefresh: false,
    isLogin: false,
    locationInfo: {
      latitude: '',
      longitude: '',
      address: ''
    },
    getDistributionInfo: '',
    getDistributorInfo: '',
    PromotionUserToken: '',
    previewGoodsOrderGoodsInfo: [],
    goodsAdditionalInfo: {},
    urlLocationId: '',
    turnToPageFlag: false
  }
})