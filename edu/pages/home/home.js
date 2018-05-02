// pages/home/home.js
var newsData = require("../../data/bannerData.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    "banner": {
      "indicatorDots": true,
      "autoplay": true,
      "interval": 2000,
      "duration": 800,
      "circular": true,
      "bannerData": "",
      "content": [
        {
          "pic": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ef9256671fa.png",
        },
        {
          "pic": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ef91634e754.png",
        }
      ],
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.bannerData)
    console.log(newsData)
    console.log(newsData.bannerCarousel)
    
    this.setData({
      bannerData: newsData.bannerCarousel
    })

    console.log(this.data.bannerData)
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