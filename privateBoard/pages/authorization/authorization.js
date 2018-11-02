// pages/authorization/authorization.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  bindGetUserInfo: function (e) {
    var that = this;

    console.log("[bindGetUserInfo] e:", e);
    console.log("[bindGetUserInfo] userInfo:", e.detail.userInfo);

    wx.navigateBack({
      delta: 1
    })
  }
  


  /*
                  data: {
                  code: loginRes.code,                  //临时登录凭证
                  rawData: infoRes.rawData,             //用户非敏感信息
                  signature: infoRes.signature,         //签名
                  encryptedData: infoRes.encryptedData, //用户敏感信息
                  iv: infoRes.iv                        //解密算法的向量
                },
*/
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
                /*
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
  */
})