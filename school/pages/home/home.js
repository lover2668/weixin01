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

    "album2": {
      "style": "background-color:rgb(255, 255, 255);font-size:28.125rpx;opacity:1;text-align:center;margin-left:auto;",
      "ul_style": "padding-left:82.03125rpx;padding-top:23.4375rpx;margin-left:auto;",
      "html_mode": "sec-mode",
      "li": [{
        "customFeature": {
          "action": "inner-link",
          "page-link": "course"
        },
        "li_class": "album-pic router",
        "action": "inner-link",
        "pic": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_58f05797a81e3.png",
        "title": "课程",
        "li_style": "width:84.9609375rpx;margin-right:82.03125rpx;margin-bottom:23.4375rpx;margin-left:auto;",
        "img_style": "height:84.9609375rpx;border-radius:50%;margin-left:auto;",
        "eventParams": "{\"inner_page_link\":\"course\",\"is_redirect\":0}",
        "eventHandler": "tapInnerLinkHandler"
      }, {
        "customFeature": {
          "action": "inner-link",
          "page-link": "video"
        },
        "li_class": "album-pic router",
        "action": "inner-link",
        "pic": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_58f0579b77205.png",
        "title": "学堂",
        "li_style": "width:84.9609375rpx;margin-right:82.03125rpx;margin-bottom:23.4375rpx;margin-left:auto;",
        "img_style": "height:84.9609375rpx;border-radius:50%;margin-left:auto;",
        "eventParams": "{\"inner_page_link\":\"video\",\"is_redirect\":0}",
        "eventHandler": "tapInnerLinkHandler"
      }, {
        "customFeature": {
          "action": "inner-link",
          "page-link": "mine"
        },
        "li_class": "album-pic router",
        "action": "inner-link",
        "pic": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_58f0579fe81dc.png",
        "title": "预约",
        "li_style": "width:84.9609375rpx;margin-right:82.03125rpx;margin-bottom:23.4375rpx;margin-left:auto;",
        "img_style": "height:84.9609375rpx;border-radius:50%;margin-left:auto;",
        "eventParams": "{\"inner_page_link\":\"mine\",\"is_redirect\":0}",
        "eventHandler": "tapInnerLinkHandler"
      }, {
        "customFeature": {
          "action": "inner-link",
          "page-link": "shopping"
        },
        "li_class": "album-pic router",
        "action": "inner-link",
        "pic": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_58f057a2ade02.png",
        "title": "购物车",
        "li_style": "width:84.9609375rpx;margin-right:82.03125rpx;margin-bottom:23.4375rpx;margin-left:auto;",
        "img_style": "height:84.9609375rpx;border-radius:50%;margin-left:auto;",
        "eventParams": "{\"inner_page_link\":\"shopping\",\"is_redirect\":0}",
        "eventHandler": "tapInnerLinkHandler"
      }],
      "customFeature": {
        "col": 4,
        "imgHeight": "36.25px",
        "mode": 1,
        "padding-left": "35",
        "padding-top": "10",
        "picBorderRadius": "50%",
        "row": "1",
        "action": "",
        "imgWidth": 76.25
      },
      "itemType": "album",
      "itemParentType": null,
      "itemIndex": "album2",
      "content": ""
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
