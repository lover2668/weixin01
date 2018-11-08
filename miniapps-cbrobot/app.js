//app.js
App({
  onLaunch: function (options) {
    console.log("onLaunch start...")
    console.log('options:', options)

    let that = this;

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())

    console.log('logs:', logs)

    wx.setStorageSync('logs', logs)

    //检查登录状态
    that.checkLoginStatus();
  },

  checkLoginStatus: function () {
    let that = this;
    let loginFlag = wx.getStorageSync('loginFlag');
    console.log("[checkLoginStatus] loginFlag:", loginFlag);

    if (loginFlag) {
      //检查 session_key 是否过期
      wx.checkSession({
        // session_key 有效(未过期)
        success: function () {
          //直接从Storage中获取用户信息
          let userStorageInfo = wx.getStorageSync('userInfo');
          console.log("[checkLoginStatus] userStorageInfo:", userStorageInfo);

          if (userStorageInfo) {
            that.globalData.userInfo = JSON.parse(userStorageInfo);
            console.log("[checkLoginStatus] userInfo:", that.globalData.userInfo);
          } 
          else {
            that.showInfo('缓存信息缺失');
            console.error('登录成功后将用户信息存在Storage的userStorageInfo');
          }
        },
        fail: function () {
          // session_key 过期
          that.doLogin();
        },
        complete: function () {
          console.log("wx.checkSession complete");
        }
      });
    } 
    else {
      //无登录态
      that.doLogin();
    }
  },

  //登录动作
  doLogin: function (callback = () => { }) {
    let that = this;
    wx.login({
      success: function (loginRes) {
        console.log("[doLogin] loginRes:", loginRes);
        console.log("[doLogin] loginRes.code:", loginRes.code);

        console.log("[doLogin] url:", that.globalData.url);

        if (loginRes.code) {
          console.log("[doLogin] start wx.request...");
 
 
          //请求服务端的登录接口
          wx.request({
            //url: api.loginUrl,
            url: that.globalData.url,

            data: {
              openid: loginRes.code,
              grant_type: 'authorization_code'
            },

            header: {
              'content-type': 'application/json'
            },

            method: "Get",

            success: function (res) {
              console.log("[doLogin] : login success");
              console.log("[doLogin] res:", res);
              console.log("[doLogin] res.userInfo:", res.userInfo);
              console.log("[doLogin] res.header:", res.header);
              console.log("[doLogin] res.data:", res.data);
              console.log("[doLogin] res.statusCode:", res.statusCode);

              res = res.data;

              if (res.result == 0) {
                that.globalData.userInfo = res.userInfo;
                wx.setStorageSync('userInfo', JSON.stringify(res.userInfo));
                wx.setStorageSync('loginFlag', res.key);
                callback();
              } else {
                that.showInfo(res.errMsg);
              }
            },
            fail: function (error) {
              //调用服务端登录接口失败
              that.showInfo('调用接口失败');
              console.log('调用接口失败' + error);
            },
            complete: function () {
              console.log('wx.request complete');
            }
          });
        }
        else {
          //获取code失败
          that.showInfo('登录失败');
          console.log('调用wx.login获取code失败' + res.errMsg);
        }
      },
      fail: function (error) {
        //调用wx.login接口失败
        that.showInfo('接口调用失败');
        console.log(error);
      },
      complete: function () {
        console.log('wx.login complete');
      }
    });
  },

  checkUserInfoPermission: function (callback = () => { }) {
    wx.getSetting({
      success: function (res) {
        console.log("[checkUserInfoPermission] res:", res);
        console.log("[checkUserInfoPermission] res.authSetting:", res.authSetting);
        console.log("[checkUserInfoPermission] scope.userInfo:", res.authSetting['scope.userInfo']);

        if (!res.authSetting['scope.userInfo']) {
          /*
          wx.openSetting({
            success: function (authSetting) {
              console.log("[checkUserInfoPermission] authSetting:", authSetting);
            },
            fail: function (error) {
              console.log(error);
            }
          });
          */

          wx.showModal({
            title: '警告',
            content: '尚未进行授权,请点击确定跳转到授权页面进行授权。',

            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定');

                wx.navigateTo({
                  url: '/pages/authorization/authorization',
                })
              } else if (res.cancel) {
                console.log('用户点击取消')
              } else {
                console.log('不确定操作')
              }
            },
          });
        } else {
          console.log("[checkUserInfoPermission] scope.userInfo:", res.authSetting['scope.userInfo'])
        }
      },

      fail: function (error) {
        console.log(error);
      },

      complete: function () {
        console.log('wx.getSetting complete');
      }
    });
  },

  //获取用户登录标识,供全局调用
  getLoginFlag: function () {
    return wx.getStorageSync('loginFlag');
  },

  //获取wx.showToast方法
  showInfo: function (info = 'error', icon = 'none') {

  },

  globalData: {
    url: 'https://cbrobotminiapps.5guanjia.com',
    //url:'http://localhost:3000',
    share: false,
    IsLogin: false,
    IsAuthorithize: false,
    IsRegister: false,
    height: 0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  }
})