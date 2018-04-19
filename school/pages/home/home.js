// pages/home/home.js

var app = getApp();

var pageData = {

  /**
   * 页面的初始数据
   */
  data: {
    "carousel1": {
      "type": "carousel",
      "style": "height:351.5625rpx;margin-left:0;margin-right:auto;margin-top:-2.34375rpx;opacity:1;",
      "content": [{
        "customFeature": {
          "action": "inner-link",
          "page-link": "course"
        },
        "pic": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ef9256671fa.png",
        "content": "",
        "parentCompid": "carousel1",
        "style": "",
        "itemType": null,
        "itemParentType": "carousel",
        "itemIndex": 0,
        "eventParams": "{\"inner_page_link\":\"course\",\"is_redirect\":0}",
        "eventHandler": "tapInnerLinkHandler"
      }, {
        "customFeature": {
          "action": "inner-link",
          "page-link": "video"
        },
        "pic": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ef91634e754.png",
        "content": "",
        "parentCompid": "carousel1",
        "style": "",
        "itemType": null,
        "itemParentType": "carousel",
        "itemIndex": 1,
        "eventParams": "{\"inner_page_link\":\"video\",\"is_redirect\":0}",
        "eventHandler": "tapInnerLinkHandler"
      }],
      "customFeature": {
        "autoplay": true,
        "interval": "2.5"
      },
      "animations": [],
      "page_form": "",
      "compId": "carousel1"
    },
    "has_tabbar": 1,
    "page_hidden": "",
    "page_form": "",
    "top_nav":{
      "navigationBarTitleText": "首页"
    }
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


  tapInnerLinkHandler: function (e) {
    app.tapInnerLinkHandler(e);
  }
};

Page(pageData);
