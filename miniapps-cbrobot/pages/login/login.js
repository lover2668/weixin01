// pages/login/login.js
const util=require('../../utils/util')
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    password: null,
    username: null
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

  getUsername: function (e) {
    console.log("getUsername e:", e)
    console.log("getUsername value:", e.detail.value)

    this.setData({
      username: e.detail.value
    })
  },

  getPassword: function (e) {
    console.log("getPassword e:", e)
    console.log("getPassword value:", e.detail.value)

    this.setData({
      password: e.detail.value
    })
  },

  loginClick: function (e) {
    console.log("loginClick e:", e)
    console.log("loginClick username:", this.data.username)
    console.log("loginClick password:", this.data.password)

    app.globalData.userInfo = {username: this.data.username, password: this.data.password}

    if (app.globalData.userInfo.username == 'admin' && app.globalData.userInfo.password == '123456') {
      util.showSuccess('登录成功');

      wx.redirectTo({
        url: '../student/student',
      })
    }
    else {
      util.showModel('登录失败', '账号或密码错误')

      this.setData({
        username: app.globalData.userInfo.username
      })
    }
  },

  getUsername: function (e) {
  },

  getUsername: function (e) {
  },
})