// pages/home/home.js
var newsData=require("../../data/bannerData.js");
var albumData=require("../../data/sortData.js")
var navData = require("../../data/sortNavData.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    "bannerData": "",
    "sortData": "",
    "sortNavData": ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.bannerData)
    console.log(newsData)
    console.log(newsData.bannerCarousel)
    
    this.setData({
      bannerData: newsData.bannerCarousel,
      sortData: albumData.sortAlbum,
      sortNavData: navData.sortNav
    })

    console.log(this.data.bannerData)
    console.log(this.data.sortData)
    console.log(this.data.sortNavData)
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