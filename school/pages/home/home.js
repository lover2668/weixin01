// pages/home/home.js
var app = getApp();
var pageData = {
  data: {
    "carousel1": {
      "type": "carousel",
      "style": "height:351.5625rpx;margin-left:0;margin-right:auto;margin-top:-2.34375rpx;opacity:1;",
      "content": [{
        "customFeature": {
          "action": "inner-link",
          "page-link": "mine"
        },
        "pic": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ef9256671fa.png",
        "content": "",
        "parentCompid": "carousel1",
        "style": "",
        "itemType": null,
        "itemParentType": "carousel",
        "itemIndex": 0,
        "eventParams": "{\"inner_page_link\":\"mine\",\"is_redirect\":0}",
        "eventHandler": "tapInnerLinkHandler"
      }, {
        "customFeature": {
          "action": "inner-link",
          "page-link": "course"
        },
        "pic": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ef91634e754.png",
        "content": "",
        "parentCompid": "carousel1",
        "style": "",
        "itemType": null,
        "itemParentType": "carousel",
        "itemIndex": 1,
        "eventParams": "{\"inner_page_link\":\"course\",\"is_redirect\":0}",
        "eventHandler": "tapInnerLinkHandler"
      }],
      "customFeature": {
        "autoplay": true,
        "interval": "1.5"
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
          "page-link": "shopping"
        },
        "li_class": "album-pic router",
        "action": "inner-link",
        "pic": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_58f05797a81e3.png",
        "title": "\u9152\u5e97",
        "li_style": "width:84.9609375rpx;margin-right:82.03125rpx;margin-bottom:23.4375rpx;margin-left:auto;",
        "img_style": "height:84.9609375rpx;border-radius:50%;margin-left:auto;",
        "eventParams": "{\"inner_page_link\":\"shopping\",\"is_redirect\":0}",
        "eventHandler": "tapInnerLinkHandler"
      }, {
        "customFeature": {
          "action": "inner-link",
          "page-link": "video"
        },
        "li_class": "album-pic router",
        "action": "inner-link",
        "pic": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_58f0579b77205.png",
        "title": "\u666f\u70b9",
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
        "title": "\u79df\u8f66",
        "li_style": "width:84.9609375rpx;margin-right:82.03125rpx;margin-bottom:23.4375rpx;margin-left:auto;",
        "img_style": "height:84.9609375rpx;border-radius:50%;margin-left:auto;",
        "eventParams": "{\"inner_page_link\":\"mine\",\"is_redirect\":0}",
        "eventHandler": "tapInnerLinkHandler"
      }, {
        "customFeature": {
          "action": "inner-link",
          "page-link": "course"
        },
        "li_class": "album-pic router",
        "action": "inner-link",
        "pic": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_58f057a2ade02.png",
        "title": "\u7279\u4ea7",
        "li_style": "width:84.9609375rpx;margin-right:82.03125rpx;margin-bottom:23.4375rpx;margin-left:auto;",
        "img_style": "height:84.9609375rpx;border-radius:50%;margin-left:auto;",
        "eventParams": "{\"inner_page_link\":\"course\",\"is_redirect\":0}",
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
    "free_vessel3": {
      "type": "free-vessel",
      "style": "width:750rpx;height:82.03125rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:11.71875rpx;opacity:1;margin-left:auto;",
      "content": [{
        "type": "picture",
        "style": "opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:82.03125rpx;width:750rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;",
        "content": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_58f03d2a3a308.png",
        "customFeature": {
          "boxShadow": "5",
          "boxColor": "#000",
          "boxX": "0",
          "boxY": "0",
          "boxR": "5"
        },
        "animations": [],
        "compId": "data.content[0]",
        "parentCompid": "free_vessel3"
      }, {
        "type": "text",
        "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(96, 212, 225);font-size:35.15625rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:304.6875rpx;top:18.75rpx;margin-right:0;",
        "content": "\u70ed\u95e8\u6d3b\u52a8",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0"
        },
        "animations": [],
        "compId": "data.content[1]",
        "parentCompid": "free_vessel3",
        "markColor": "",
        "mode": 0
      }],
      "customFeature": {
        "boxColor": "rgb(0, 0, 0)",
        "boxR": 5,
        "boxStyle": false,
        "boxX": 0,
        "boxY": 0
      },
      "animations": [],
      "page_form": "",
      "compId": "free_vessel3"
    },
    "free_vessel4": {
      "type": "free-vessel",
      "style": "width:750rpx;height:445.3125rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:2.34375rpx;opacity:1;margin-left:auto;",
      "content": [{
        "type": "picture",
        "style": "opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:11.71875rpx;border-style:none;height:386.71875rpx;width:300rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:11.71875rpx;top:25.78125rpx;",
        "content": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_58efa0c51da9c.png",
        "customFeature": {
          "boxShadow": "5",
          "boxColor": "#000",
          "boxX": "0",
          "boxY": "0",
          "boxR": "5",
          "action": "goods-trade",
          "goods-id": "0",
          "goods-name": "\u65e5\u672c10\u67081\u65e5\u665a\u81ea\u7531\u884c \u3010\u5047\u671f\u9884\u552e\u3011"
        },
        "animations": [],
        "compId": "data.content[0]",
        "parentCompid": "free_vessel4",
        "itemType": "picture",
        "itemParentType": "free-vessel",
        "itemIndex": 0,
        "eventParams": "{\"goods_id\":\"0\",\"goods_type\":null}",
        "eventHandler": "tapGoodsTradeHandler"
      }, {
        "type": "picture",
        "style": "opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:11.71875rpx;border-style:none;height:140.625rpx;width:421.875rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:316.40625rpx;top:25.78125rpx;",
        "content": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_58efa0ffec8f6.png",
        "customFeature": {
          "boxShadow": "5",
          "boxColor": "#000",
          "boxX": "0",
          "boxY": "0",
          "boxR": "5",
          "action": "inner-link",
          "coupon-id": "206",
          "inner-page-link": "9d9I9zPd9d_page10012"
        },
        "animations": [],
        "compId": "data.content[1]",
        "parentCompid": "free_vessel4",
        "itemType": "picture",
        "itemParentType": "free-vessel",
        "itemIndex": 1,
        "eventParams": "{\"inner_page_link\":\"9d9I9zPd9d_page10012\",\"is_redirect\":0}",
        "eventHandler": "tapInnerLinkHandler"
      }, {
        "type": "picture",
        "style": "opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:11.71875rpx;border-style:none;height:236.71875rpx;width:206.25rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:316.40625rpx;top:175.78125rpx;",
        "content": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_58efa142b0811.png",
        "customFeature": {
          "boxShadow": "5",
          "boxColor": "#000",
          "boxX": "0",
          "boxY": "0",
          "boxR": "5",
          "action": "inner-link",
          "inner-page-link": "9d9I9zPd9d_page10007"
        },
        "animations": [],
        "compId": "data.content[2]",
        "parentCompid": "free_vessel4",
        "itemType": "picture",
        "itemParentType": "free-vessel",
        "itemIndex": 2,
        "eventParams": "{\"inner_page_link\":\"9d9I9zPd9d_page10007\",\"is_redirect\":0}",
        "eventHandler": "tapInnerLinkHandler"
      }, {
        "type": "picture",
        "style": "opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:11.71875rpx;border-style:none;height:234.375rpx;width:203.90625rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:534.375rpx;top:175.78125rpx;",
        "content": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_58efa142b0811.png",
        "customFeature": {
          "boxShadow": "5",
          "boxColor": "#000",
          "boxX": "0",
          "boxY": "0",
          "boxR": "5",
          "action": "inner-link",
          "inner-page-link": "9d9I9zPd9d_page10008"
        },
        "animations": [],
        "compId": "data.content[3]",
        "parentCompid": "free_vessel4",
        "itemType": "picture",
        "itemParentType": "free-vessel",
        "itemIndex": 3,
        "eventParams": "{\"inner_page_link\":\"9d9I9zPd9d_page10008\",\"is_redirect\":0}",
        "eventHandler": "tapInnerLinkHandler"
      }, {
        "type": "text",
        "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(68, 68, 68);font-size:30.46875rpx;height:44.53125rpx;width:304.6875rpx;line-height:35.15625rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:11.71875rpx;top:274.21875rpx;margin-right:0;",
        "content": "\u65e5\u672c10\u67081\u65e5\u665a\u81ea\u7531\u884c\n\u3010\u5047\u671f\u9884\u552e\u3011",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0"
        },
        "animations": [],
        "compId": "data.content[4]",
        "parentCompid": "free_vessel4",
        "markColor": "",
        "mode": 0
      }, {
        "type": "text",
        "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(255, 153, 0);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:21.09375rpx;top:351.5625rpx;margin-right:0;",
        "content": "\uffe53309\u8d77",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0"
        },
        "animations": [],
        "compId": "data.content[5]",
        "parentCompid": "free_vessel4",
        "markColor": "",
        "mode": 0
      }, {
        "type": "button",
        "style": "background-color:rgb(255, 153, 0);border-color:rgb(34, 34, 34);border-radius:18.75rpx;border-style:none;border-width:4.6875rpx;color:rgb(255, 255, 255);font-size:32.8125rpx;height:30.46875rpx;line-height:30.46875rpx;margin-left:0;margin-right:0;margin-top:0;opacity:1;text-align:center;width:105.46875rpx;position:absolute;left:175.78125rpx;top:356.25rpx;",
        "content": "8.5\u6298",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5px",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0"
        },
        "animations": [],
        "compId": "data.content[6]",
        "parentCompid": "free_vessel4"
      }, {
        "type": "text",
        "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(68, 68, 68);font-size:30.46875rpx;height:44.53125rpx;line-height:35.15625rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:351.5625rpx;top:46.875rpx;margin-right:0;",
        "content": "\u5de8\u591a\u4f18\u60e0",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0",
          "action": "none",
          "coupon-id": "206"
        },
        "animations": [],
        "compId": "data.content[7]",
        "parentCompid": "free_vessel4",
        "markColor": "",
        "mode": 0
      }, {
        "type": "text",
        "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:28.125rpx;height:44.53125rpx;line-height:35.15625rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:349.21875rpx;top:93.75rpx;margin-right:0;",
        "content": "\u5c5e\u4e8e\u4f60\u7684\u4e0d\u8981\u9519\u8fc7",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0",
          "action": "inner-link",
          "coupon-id": "206",
          "inner-page-link": "9d9I9zPd9d_page10012"
        },
        "animations": [],
        "compId": "data.content[8]",
        "parentCompid": "free_vessel4",
        "markColor": "",
        "mode": 0,
        "itemType": "text",
        "itemParentType": "free-vessel",
        "itemIndex": 8,
        "eventParams": "{\"inner_page_link\":\"9d9I9zPd9d_page10012\",\"is_redirect\":0}",
        "eventHandler": "tapInnerLinkHandler"
      }, {
        "type": "text",
        "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(68, 68, 68);font-size:30.46875rpx;height:44.53125rpx;line-height:35.15625rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:360.9375rpx;top:199.21875rpx;margin-right:0;",
        "content": "\u6b27\u7f8e\u65e5\u97e9",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0",
          "action": "inner-link",
          "inner-page-link": "9d9I9zPd9d_page10007"
        },
        "animations": [],
        "compId": "data.content[9]",
        "parentCompid": "free_vessel4",
        "markColor": "",
        "mode": 0,
        "itemType": "text",
        "itemParentType": "free-vessel",
        "itemIndex": 9,
        "eventParams": "{\"inner_page_link\":\"9d9I9zPd9d_page10007\",\"is_redirect\":0}",
        "eventHandler": "tapInnerLinkHandler"
      }, {
        "type": "text",
        "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:28.125rpx;height:44.53125rpx;line-height:35.15625rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:349.21875rpx;top:246.09375rpx;margin-right:0;",
        "content": "\u8f7b\u677e\u51fa\u5883\u6e38",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0",
          "action": "inner-link",
          "inner-page-link": "9d9I9zPd9d_page10007"
        },
        "animations": [],
        "compId": "data.content[10]",
        "parentCompid": "free_vessel4",
        "markColor": "",
        "mode": 0,
        "itemType": "text",
        "itemParentType": "free-vessel",
        "itemIndex": 10,
        "eventParams": "{\"inner_page_link\":\"9d9I9zPd9d_page10007\",\"is_redirect\":0}",
        "eventHandler": "tapInnerLinkHandler"
      }, {
        "type": "text",
        "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(68, 68, 68);font-size:30.46875rpx;height:44.53125rpx;line-height:35.15625rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:576.5625rpx;top:199.21875rpx;margin-right:0;",
        "content": "\u5468\u8fb9\u5a31\u4e50",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0",
          "action": "inner-link",
          "inner-page-link": "9d9I9zPd9d_page10008"
        },
        "animations": [],
        "compId": "data.content[11]",
        "parentCompid": "free_vessel4",
        "markColor": "",
        "mode": 0,
        "itemType": "text",
        "itemParentType": "free-vessel",
        "itemIndex": 11,
        "eventParams": "{\"inner_page_link\":\"9d9I9zPd9d_page10008\",\"is_redirect\":0}",
        "eventHandler": "tapInnerLinkHandler"
      }, {
        "type": "text",
        "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:28.125rpx;height:37.5rpx;width:159.375rpx;line-height:35.15625rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:560.15625rpx;top:246.09375rpx;margin-right:0;",
        "content": "\u5feb\u4e50\u8fc7\u5468\u672b",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0",
          "action": "inner-link",
          "inner-page-link": "9d9I9zPd9d_page10008"
        },
        "animations": [],
        "compId": "data.content[12]",
        "parentCompid": "free_vessel4",
        "markColor": "",
        "mode": 0,
        "itemType": "text",
        "itemParentType": "free-vessel",
        "itemIndex": 12,
        "eventParams": "{\"inner_page_link\":\"9d9I9zPd9d_page10008\",\"is_redirect\":0}",
        "eventHandler": "tapInnerLinkHandler"
      }, {
        "type": "picture",
        "style": "opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:50%;border-style:none;height:100.78125rpx;width:100.78125rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:607.03125rpx;top:35.15625rpx;",
        "content": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_58f0398f39ba4.png",
        "customFeature": {
          "boxShadow": "5",
          "boxColor": "#000",
          "boxX": "0",
          "boxY": "0",
          "boxR": "5",
          "action": "inner-link",
          "inner-page-link": "9d9I9zPd9d_page10012",
          "coupon-id": "206"
        },
        "animations": [],
        "compId": "data.content[13]",
        "parentCompid": "free_vessel4",
        "itemType": "picture",
        "itemParentType": "free-vessel",
        "itemIndex": 13,
        "eventParams": "{\"inner_page_link\":\"9d9I9zPd9d_page10012\",\"is_redirect\":0}",
        "eventHandler": "tapInnerLinkHandler"
      }, {
        "type": "picture",
        "style": "opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:50%;border-style:none;height:93.75rpx;width:93.75rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:372.65625rpx;top:292.96875rpx;",
        "content": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_58f0399c3a16b.png",
        "customFeature": {
          "boxShadow": "5",
          "boxColor": "#000",
          "boxX": "0",
          "boxY": "0",
          "boxR": "5",
          "action": "inner-link",
          "inner-page-link": "9d9I9zPd9d_page10007"
        },
        "animations": [],
        "compId": "data.content[14]",
        "parentCompid": "free_vessel4",
        "itemType": "picture",
        "itemParentType": "free-vessel",
        "itemIndex": 14,
        "eventParams": "{\"inner_page_link\":\"9d9I9zPd9d_page10007\",\"is_redirect\":0}",
        "eventHandler": "tapInnerLinkHandler"
      }, {
        "type": "picture",
        "style": "opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:50%;border-style:none;height:93.75rpx;width:93.75rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:588.28125rpx;top:292.96875rpx;",
        "content": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_58f039a97d962.png",
        "customFeature": {
          "boxShadow": "5",
          "boxColor": "#000",
          "boxX": "0",
          "boxY": "0",
          "boxR": "5",
          "action": "inner-link",
          "inner-page-link": "9d9I9zPd9d_page10008"
        },
        "animations": [],
        "compId": "data.content[15]",
        "parentCompid": "free_vessel4",
        "itemType": "picture",
        "itemParentType": "free-vessel",
        "itemIndex": 15,
        "eventParams": "{\"inner_page_link\":\"9d9I9zPd9d_page10008\",\"is_redirect\":0}",
        "eventHandler": "tapInnerLinkHandler"
      }],
      "customFeature": {
        "boxColor": "rgb(0, 0, 0)",
        "boxR": 5,
        "boxStyle": false,
        "boxX": 0,
        "boxY": 0
      },
      "animations": [],
      "page_form": "",
      "compId": "free_vessel4"
    },
    "title_ele5": {
      "type": "title-ele",
      "style": "opacity:1;line-height:82.03125rpx;background-color:rgb(255, 255, 255);border-color:rgb(34, 34, 34);border-style:none;color:#666;font-size:35.15625rpx;margin-left:auto;margin-right:auto;margin-top:11.71875rpx;",
      "content": "\u884c\u7a0b",
      "customFeature": {
        "mode": 3,
        "markColor": "rgb(96, 212, 225)",
        "boxColor": "#000",
        "boxR": "5px",
        "boxStyle": false,
        "boxX": "0",
        "boxY": "0"
      },
      "animations": [],
      "page_form": "",
      "compId": "title_ele5",
      "parentCompid": "title_ele5",
      "markColor": "rgb(96, 212, 225)",
      "mode": 3
    },
    "free_vessel6": {
      "type": "free-vessel",
      "style": "width:750rpx;height:808.59375rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-left:auto;margin-right:auto;margin-top:2.34375rpx;opacity:1;",
      "content": [{
        "type": "picture",
        "style": "opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:187.5rpx;width:714.84375rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:17.578125rpx;top:35.15625rpx;right:auto;",
        "content": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_58f07a0c0fc6b.png",
        "customFeature": {
          "boxShadow": "5",
          "boxColor": "#000",
          "boxX": "0",
          "boxY": "0",
          "boxR": "5",
          "action": "inner-link",
          "inner-page-link": "9d9I9zPd9d_page10005"
        },
        "animations": [],
        "compId": "data.content[0]",
        "parentCompid": "free_vessel6",
        "itemType": "picture",
        "itemParentType": "free-vessel",
        "itemIndex": 0,
        "eventParams": "{\"inner_page_link\":\"9d9I9zPd9d_page10005\",\"is_redirect\":0}",
        "eventHandler": "tapInnerLinkHandler"
      }, {
        "type": "text",
        "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(68, 68, 68);font-size:32.8125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:35.15625rpx;top:241.40625rpx;margin-right:0;right:auto;",
        "content": "上海迪士尼童话之旅，3日亲子游",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0"
        },
        "animations": [],
        "compId": "data.content[1]",
        "parentCompid": "free_vessel6",
        "markColor": "",
        "mode": 0
      }, {
        "type": "text",
        "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:30.46875rpx;height:44.53125rpx;width:714.84375rpx;line-height:35.15625rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:35.15625rpx;top:300rpx;margin-right:0;",
        "content": "假期带着宝贝，去家门口的迪士尼乐园，省心省力，尽享欢乐",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0"
        },
        "animations": [],
        "compId": "data.content[2]",
        "parentCompid": "free_vessel6",
        "markColor": "",
        "mode": 0
      }, {
        "type": "picture",
        "style": "opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:187.5rpx;width:714.84375rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:16.40625rpx;top:435.9375rpx;right:auto;",
        "content": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_58f07a14dc3e6.png",
        "customFeature": {
          "boxShadow": "5",
          "boxColor": "#000",
          "boxX": "0",
          "boxY": "0",
          "boxR": "5",
          "action": "inner-link",
          "inner-page-link": "mine"
        },
        "animations": [],
        "compId": "data.content[3]",
        "parentCompid": "free_vessel6",
        "itemType": "picture",
        "itemParentType": "free-vessel",
        "itemIndex": 3,
        "eventParams": "{\"inner_page_link\":\"mine\",\"is_redirect\":0}",
        "eventHandler": "tapInnerLinkHandler"
      }, {
        "type": "text",
        "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(68, 68, 68);font-size:32.8125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:35.15625rpx;top:644.53125rpx;margin-right:0;",
        "content": "悉尼水族馆欢乐无限，7日休闲游",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0"
        },
        "animations": [],
        "compId": "data.content[4]",
        "parentCompid": "free_vessel6",
        "markColor": "",
        "mode": 0
      }, {
        "type": "text",
        "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:30.46875rpx;height:44.53125rpx;width:698.4375rpx;line-height:35.15625rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:35.15625rpx;top:703.125rpx;margin-right:0;",
        "content": "探索歌剧院，游海港大桥，赏达令港夜景，近距离接触野生动物",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0"
        },
        "animations": [],
        "compId": "data.content[5]",
        "parentCompid": "free_vessel6",
        "markColor": "",
        "mode": 0
      }],
      "customFeature": {
        "boxColor": "rgb(0, 0, 0)",
        "boxR": 5,
        "boxStyle": false,
        "boxX": 0,
        "boxY": 0
      },
      "animations": [],
      "page_form": "",
      "compId": "free_vessel6"
    },
    "has_tabbar": 1,
    "page_hidden": true,
    "page_form": "",
    "top_nav": {
    "navigationBarTitleText": "首页"
  }
}

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