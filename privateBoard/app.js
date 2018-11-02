//app.js
//自定义标题栏方法在windows中加入"navigationStyle": "custom"
App({
  config: {
    host: 'www.5guanjia.com' // 这个地方填写你的域名
  },
  onLaunch: function (options) {
    // 展示本地存储能力
    console.log('onLaunch start...')
    console.log('options:', options)

    let that =this;

    //检查登录状态
    that.checkLoginStatus();

  /*
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log('logs:', logs)

    // 判断是否由分享进入小程序
    if (options.scene == 1007 || options.scene == 1008) {
      this.globalData.share = true
    } else {
      this.globalData.share = false
    };
    console.log("Share:", this.globalData.share)


    //获取设备顶部窗口的高度（不同设备窗口高度不一样，根据这个来设置自定义导航栏的高度）
    //这个最初我是在组件中获取，但是出现了一个问题，当第一次进入小程序时导航栏会把
    //页面内容盖住一部分,当打开调试重新进入时就没有问题，这个问题弄得我是莫名其妙
    //虽然最后解决了，但是花费了不少时间
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.height = res.statusBarHeight
        console.log("height:", this.globalData.height)
      }
    })
  
    
    // 登录
    wx.login({
      success: res => {
        console.log("login resource:", res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId

        console.log("res.code:", res.code)
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://www.5guanjia.com/login',
            data: {
              code: res.code
            }
          })
      } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log("getSetting success...")
        console.log("authSetting:", res.authSetting)
        console.log("authSetting scope:", res.authSetting['scope.userInfo'])
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log("userInfo:", res.userInfo)

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            },
            fail: res => {
              console.log("getSetting fail...")
            },
            complete: res => {
              console.log("getSetting complete...")
            }
          })
        }
      }
    })
    */
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
          } else {
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
    } else {
      //无登录态
      that.doLogin();
    }
  },

  //登录动作
  doLogin: function (callback = () => {}) {
    let that =this;
    wx.login({
        success: function (loginRes) {
            console.log("[doLogin] loginRes:", loginRes);
            console.log("[doLogin] loginRes.code:", loginRes.code);

            if (loginRes.code) {
                /*
                * 获取用户信息 期望数据如下
                *
                * userInfo			[Object]
                * rawData			[Object]
                * signature		[Object]
                * encryptedData	[Object]
                * iv				[Object]
                *
                **/
                wx.getUserInfo({
                    withCredentials: true, //非必填,默认为true

                    success: function (infoRes) {
                      console.log("[doLogin] loginRes.code:", loginRes.code);
                      console.log("[doLogin] infoRes:", infoRes);
                      console.log("[doLogin] infoRes.rawData:", infoRes.rawData);
                      console.log("[doLogin] infoRes.signature:", infoRes.signature);
                      console.log("[doLogin] infoRes.encryptedData:", infoRes.encryptedData);
                      console.log("[doLogin] infoRes.iv:", infoRes.iv);
                      console.log("[doLogin] url:", that.globalData.url);

                      //请求服务端的登录接口
                      wx.request({
                          //url: api.loginUrl,
                          url: that.globalData.url,

                          data: {
                            code: loginRes.code,                  //临时登录凭证
                            rawData: infoRes.rawData,             //用户非敏感信息
                            signature: infoRes.signature,         //签名
                            encryptedData: infoRes.encryptedData, //用户敏感信息
                            iv: infoRes.iv                        //解密算法的向量
                          },

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
                              console.log(error);
                          },
                          complete: function () {
                            console.log('wx.request complete');
                          }
                      });
                    },
                    fail: function (error) {
                      //获取userInfo失败,去检查是否未开启权限
                      console.log('wx.getUserInfo fail');
                      wx.hideLoading();
                      //that.checkUserInfoPermission();

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

                      that.checkUserInfoPermission();
                    },
                    complete: function () {
                      console.log('wx.getUserInfo complete');
                    }
                });
            } else {
                //获取code失败
                that.showInfo('登录失败');
                console.log('调用wx.login获取code失败');
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

  checkUserInfoPermission: function (callback = () => {}) {
    wx.getSetting({
        success: function (res) {
          console.log("[checkUserInfoPermission] res:", res);
          console.log("[checkUserInfoPermission] res.authSetting:", res.authSetting);

          if (!res.authSetting['scope.userInfo']) {
            wx.openSetting({
              success: function (authSetting) {
                console.log("[checkUserInfoPermission] authSetting:", authSetting);
              },
              fail: function (error) {
                console.log(error);
              }
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
    url: 'https://www.5guanjia.com',
    share: false,
    height: 0,
    userInfo: null,
  }
})