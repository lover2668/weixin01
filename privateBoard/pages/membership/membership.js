// pages/membership/membership.js
var newsData = require("../../data/bannerData.js");
var registerInfoData = require("../../data/registerData.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    "bannerData": "",
    items: [
      {name: '男', checked: true},
      {name: '女', checked: false}
    ],
    companyindex: 0,
    companytype: ['事业单位', '公益单位', '有限公司', '集团公司', '私营企业', '合资企业', '外资企业', '个体工商户', '其他'],
    credtype: ['身份证', '护照', '驾驶证', '其他'],
  },


  bindpickerchange: function (e) {
    console.log(this.data.companytype[e.detail.value])
    this.setData({
      companyindex: e.detail.value
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.bannerData)
    console.log(newsData)
    console.log(newsData.membershipBanner)

    console.log(registerInfoData)

    this.setData({
      bannerData: newsData.membershipBanner,
      registerData: registerInfoData.registerInfoData,
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