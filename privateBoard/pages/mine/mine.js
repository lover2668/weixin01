// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
        success: (res) => {
          console.log("info-> wx.getSetting success...")
          console.log("info->success res:", res)
          console.log('info->success res.data', res.data)
          console.log("info->success res.authSetting:", res.authSetting)
          console.log("info->success res.authSetting scope:", res.authSetting['scope.userInfo'])
        },
      fail: (res) => {
        console.log("info->falil wx.getSetting falil...")
        console.log("info->falil res:", res)
        console.log("info->falil res.authSetting:", res.authSetting)
        console.log("info->falil res.authSetting scope:", res.authSetting['scope.userInfo'])
      },
      complete: (res) => {
        console.log("info-> wx.getSetting complete...")
        console.log("info->complete res:", res)
        console.log('info->complete res.data', res.data)
        console.log("info->complete res.authSetting:", res.authSetting)
        console.log("info->complete res.authSetting scope:", res.authSetting['scope.userInfo'])
      },
          })
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
  
  }
})