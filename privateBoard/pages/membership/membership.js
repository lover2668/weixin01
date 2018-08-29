// pages/membership/membership.js
var newsData = require("../../data/bannerData.js");
var registerInfoData = require("../../data/registerData.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    "bannerData": "",
    "registerData": "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.bannerData)
    console.log(newsData)
    console.log(newsData.membershipBanner)

    console.log(registerData)

    this.setData({
      bannerData: newsData.membershipBanner,
      registerData: registerInfoData.registerInfoData,
      https://www.jb51.net/article/100006.htm
    })

    console.log(this.data.membershipBanner)
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