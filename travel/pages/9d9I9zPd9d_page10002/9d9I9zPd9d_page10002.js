var app      = getApp();

var pageData = {
  data: {
    "free_vessel1": {
      "type": "free-vessel",
      "style": "width:750rpx;height:262.50001788139rpx;background-color:rgb(243, 243, 243);margin-bottom:auto;margin-right:auto;opacity:1;margin-left:auto;",
      "content": [{
        "type": "picture",
        "style": "opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:23.4375rpx;border-style:none;height:234.375rpx;width:703.125rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;top:23.4375rpx;",
        "content": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_58f361e37893b.png",
        "customFeature": {
          "boxShadow": "5",
          "boxColor": "#000",
          "boxX": "0",
          "boxY": "0",
          "boxR": "5",
          "segment": "",
          "ifMust": true,
          "action": "goods-trade",
          "goods-id": "0",
          "goods-name": "\u6e7f\u5730\u82b1\u56ed"
        },
        "animations": [],
        "compId": "data.content[0]",
        "parentCompid": "free_vessel1",
        "itemType": "picture",
        "itemParentType": "free-vessel",
        "itemIndex": 0,
        "eventParams": "{\"goods_id\":\"0\",\"goods_type\":null}",
        "eventHandler": "tapGoodsTradeHandler"
      }, {
        "type": "text",
        "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(68, 68, 68);font-size:35.15625rpx;height:44.53125rpx;width:442.96875rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:281.25rpx;top:30.46875rpx;margin-right:0;",
        "content": "\u6e7f\u5730\u82b1\u56ed",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0",
          "segment": "mz",
          "ifMust": false
        },
        "animations": [],
        "compId": "data.content[1]",
        "parentCompid": "free_vessel1",
        "markColor": "",
        "mode": 0
      }, {
        "type": "text",
        "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(77, 153, 235);font-size:37.5rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:281.25rpx;top:82.03125rpx;margin-right:0;",
        "content": "4.6\u5206",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0",
          "segment": "pingfen",
          "ifMust": false
        },
        "animations": [],
        "compId": "data.content[2]",
        "parentCompid": "free_vessel1",
        "markColor": "",
        "mode": 0
      }, {
        "type": "button",
        "style": "background-color:rgb(255, 255, 255);border-color:rgb(255, 153, 0);border-radius:11.71875rpx;border-style:solid;border-width:2.34375rpx;color:rgb(255, 153, 0);font-size:32.8125rpx;height:35.15625rpx;line-height:35.15625rpx;margin-left:0;margin-right:0;margin-top:0;opacity:1;text-align:center;width:105.46875rpx;position:absolute;left:281.25rpx;top:140.625rpx;",
        "content": "\u4eb2\u5b50",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5px",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0"
        },
        "animations": [],
        "compId": "data.content[3]",
        "parentCompid": "free_vessel1"
      }, {
        "type": "button",
        "style": "background-color:rgb(255, 255, 255);border-color:rgb(26, 147, 223);border-radius:11.71875rpx;border-style:solid;border-width:2.34375rpx;color:rgb(26, 147, 223);font-size:32.8125rpx;height:35.15625rpx;line-height:35.15625rpx;margin-left:0;margin-right:0;margin-top:0;opacity:1;text-align:center;width:105.46875rpx;position:absolute;left:398.4375rpx;top:140.625rpx;",
        "content": "6\u6298",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5px",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0"
        },
        "animations": [],
        "compId": "data.content[4]",
        "parentCompid": "free_vessel1"
      }, {
        "type": "text",
        "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(255, 153, 0);font-size:32.8125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:569.53125rpx;top:194.53125rpx;margin-right:0;",
        "content": "\uffe569",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0",
          "segment": "jg",
          "ifMust": false
        },
        "animations": [],
        "compId": "data.content[5]",
        "parentCompid": "free_vessel1",
        "markColor": "",
        "mode": 0
      }, {
        "type": "text",
        "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(204, 204, 204);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:644.53125rpx;top:194.53125rpx;margin-right:0;",
        "content": "\u8d77\/\u4efd",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0"
        },
        "animations": [],
        "compId": "data.content[6]",
        "parentCompid": "free_vessel1",
        "markColor": "",
        "mode": 0
      }, {
        "type": "text",
        "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:32.8125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:281.25rpx;top:194.53125rpx;margin-right:0;",
        "content": "\u8ddd\u79bb\u4f6015.3\u516c\u91cc",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0"
        },
        "animations": [],
        "compId": "data.content[7]",
        "parentCompid": "free_vessel1",
        "markColor": "",
        "mode": 0
      }],
      "customFeature": {
        "boxColor": "rgb(0, 0, 0)",
        "boxR": 5,
        "boxStyle": false,
        "boxX": 0,
        "boxY": 0,
        "action": "goods-trade"
      },
      "animations": [],
      "page_form": "",
      "compId": "free_vessel1",
      "itemType": "free-vessel",
      "itemParentType": null,
      "itemIndex": "free_vessel1",
      "eventParams": "{\"goods_id\":null,\"goods_type\":null}",
      "eventHandler": "tapGoodsTradeHandler"
    },
    "free_vessel2": {
      "type": "free-vessel",
      "style": "width:750rpx;height:262.50001788139rpx;background-color:rgb(243, 243, 243);margin-bottom:auto;margin-right:auto;opacity:1;margin-left:auto;",
      "content": [{
        "type": "picture",
        "style": "opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:23.4375rpx;border-style:none;height:234.375rpx;width:703.125rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;top:25.78125rpx;",
        "content": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_58f361e37893b.png",
        "customFeature": {
          "boxShadow": "5",
          "boxColor": "#000",
          "boxX": "0",
          "boxY": "0",
          "boxR": "5",
          "segment": "",
          "ifMust": true,
          "action": "goods-trade",
          "goods-id": "0",
          "goods-name": "\u4e5d\u9f99\u751f\u6001\u56ed",
          "inner-page-link": "prePage"
        },
        "animations": [],
        "compId": "data.content[0]",
        "parentCompid": "free_vessel2",
        "itemType": "picture",
        "itemParentType": "free-vessel",
        "itemIndex": 0,
        "eventParams": "{\"goods_id\":\"0\",\"goods_type\":null}",
        "eventHandler": "tapGoodsTradeHandler"
      }, {
        "type": "text",
        "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(68, 68, 68);font-size:35.15625rpx;height:44.53125rpx;width:442.96875rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:281.25rpx;top:30.46875rpx;margin-right:0;",
        "content": "\u4e5d\u9f99\u751f\u6001\u56ed",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0",
          "segment": "mz",
          "ifMust": false
        },
        "animations": [],
        "compId": "data.content[1]",
        "parentCompid": "free_vessel2",
        "markColor": "",
        "mode": 0
      }, {
        "type": "text",
        "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(77, 153, 235);font-size:37.5rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:281.25rpx;top:82.03125rpx;margin-right:0;",
        "content": "5.2\u5206",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0",
          "segment": "pingfen",
          "ifMust": false
        },
        "animations": [],
        "compId": "data.content[2]",
        "parentCompid": "free_vessel2",
        "markColor": "",
        "mode": 0
      }, {
        "type": "button",
        "style": "background-color:rgb(255, 255, 255);border-color:rgb(255, 153, 0);border-radius:11.71875rpx;border-style:solid;border-width:2.34375rpx;color:rgb(255, 153, 0);font-size:32.8125rpx;height:35.15625rpx;line-height:35.15625rpx;margin-left:0;margin-right:0;margin-top:0;opacity:1;text-align:center;width:105.46875rpx;position:absolute;left:281.25rpx;top:140.625rpx;",
        "content": "\u4e50\u56ed",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5px",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0"
        },
        "animations": [],
        "compId": "data.content[3]",
        "parentCompid": "free_vessel2"
      }, {
        "type": "button",
        "style": "background-color:rgb(255, 255, 255);border-color:rgb(26, 147, 223);border-radius:11.71875rpx;border-style:solid;border-width:2.34375rpx;color:rgb(26, 147, 223);font-size:32.8125rpx;height:35.15625rpx;line-height:35.15625rpx;margin-left:0;margin-right:0;margin-top:0;opacity:1;text-align:center;width:105.46875rpx;position:absolute;left:398.4375rpx;top:140.625rpx;",
        "content": "\u95e8\u7968",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5px",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0"
        },
        "animations": [],
        "compId": "data.content[4]",
        "parentCompid": "free_vessel2"
      }, {
        "type": "text",
        "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(255, 153, 0);font-size:32.8125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:569.53125rpx;top:194.53125rpx;margin-right:0;",
        "content": "\uffe580",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0",
          "segment": "jg",
          "ifMust": false
        },
        "animations": [],
        "compId": "data.content[5]",
        "parentCompid": "free_vessel2",
        "markColor": "",
        "mode": 0
      }, {
        "type": "text",
        "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(204, 204, 204);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:644.53125rpx;top:194.53125rpx;margin-right:0;",
        "content": "\u8d77\/\u4efd",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0"
        },
        "animations": [],
        "compId": "data.content[6]",
        "parentCompid": "free_vessel2",
        "markColor": "",
        "mode": 0
      }, {
        "type": "text",
        "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:32.8125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:281.25rpx;top:194.53125rpx;margin-right:0;",
        "content": "\u8ddd\u79bb\u4f6010.2\u516c\u91cc",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0"
        },
        "animations": [],
        "compId": "data.content[7]",
        "parentCompid": "free_vessel2",
        "markColor": "",
        "mode": 0
      }],
      "customFeature": {
        "boxColor": "rgb(0, 0, 0)",
        "boxR": 5,
        "boxStyle": false,
        "boxX": 0,
        "boxY": 0,
        "action": "goods-trade"
      },
      "animations": [],
      "page_form": "",
      "compId": "free_vessel2",
      "itemType": "free-vessel",
      "itemParentType": null,
      "itemIndex": "free_vessel2",
      "eventParams": "{\"goods_id\":null,\"goods_type\":null}",
      "eventHandler": "tapGoodsTradeHandler"
    },
    "free_vessel3": {
      "type": "free-vessel",
      "style": "width:750rpx;height:262.50001788139rpx;background-color:rgb(243, 243, 243);margin-bottom:auto;margin-right:auto;opacity:1;margin-left:auto;",
      "content": [{
        "type": "picture",
        "style": "opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:23.4375rpx;border-style:none;height:234.375rpx;width:703.125rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;top:23.4375rpx;",
        "content": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_58f361e37893b.png",
        "customFeature": {
          "boxShadow": "5",
          "boxColor": "#000",
          "boxX": "0",
          "boxY": "0",
          "boxR": "5",
          "segment": "",
          "ifMust": true,
          "action": "goods-trade",
          "goods-id": "0",
          "goods-name": "\u91ce\u751f\u52a8\u7269\u56ed"
        },
        "animations": [],
        "compId": "data.content[0]",
        "parentCompid": "free_vessel3",
        "itemType": "picture",
        "itemParentType": "free-vessel",
        "itemIndex": 0,
        "eventParams": "{\"goods_id\":\"0\",\"goods_type\":null}",
        "eventHandler": "tapGoodsTradeHandler"
      }, {
        "type": "text",
        "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(68, 68, 68);font-size:35.15625rpx;height:44.53125rpx;width:442.96875rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:281.25rpx;top:30.46875rpx;margin-right:0;",
        "content": "\u91ce\u751f\u52a8\u7269\u56ed",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0",
          "segment": "mz",
          "ifMust": false
        },
        "animations": [],
        "compId": "data.content[1]",
        "parentCompid": "free_vessel3",
        "markColor": "",
        "mode": 0
      }, {
        "type": "text",
        "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(77, 153, 235);font-size:37.5rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:281.25rpx;top:82.03125rpx;margin-right:0;",
        "content": "4.6\u5206",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0",
          "segment": "pingfen",
          "ifMust": false
        },
        "animations": [],
        "compId": "data.content[2]",
        "parentCompid": "free_vessel3",
        "markColor": "",
        "mode": 0
      }, {
        "type": "button",
        "style": "background-color:rgb(255, 255, 255);border-color:rgb(255, 153, 0);border-radius:11.71875rpx;border-style:solid;border-width:2.34375rpx;color:rgb(255, 153, 0);font-size:32.8125rpx;height:35.15625rpx;line-height:35.15625rpx;margin-left:0;margin-right:0;margin-top:0;opacity:1;text-align:center;width:105.46875rpx;position:absolute;left:281.25rpx;top:140.625rpx;",
        "content": "\u4eb2\u5b50",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5px",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0"
        },
        "animations": [],
        "compId": "data.content[3]",
        "parentCompid": "free_vessel3"
      }, {
        "type": "button",
        "style": "background-color:rgb(255, 255, 255);border-color:rgb(26, 147, 223);border-radius:11.71875rpx;border-style:solid;border-width:2.34375rpx;color:rgb(26, 147, 223);font-size:32.8125rpx;height:35.15625rpx;line-height:35.15625rpx;margin-left:0;margin-right:0;margin-top:0;opacity:1;text-align:center;width:105.46875rpx;position:absolute;left:398.4375rpx;top:140.625rpx;",
        "content": "\u56e2\u4f53",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5px",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0"
        },
        "animations": [],
        "compId": "data.content[4]",
        "parentCompid": "free_vessel3"
      }, {
        "type": "text",
        "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(255, 153, 0);font-size:32.8125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:569.53125rpx;top:194.53125rpx;margin-right:0;",
        "content": "\uffe550",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0",
          "segment": "jg",
          "ifMust": false
        },
        "animations": [],
        "compId": "data.content[5]",
        "parentCompid": "free_vessel3",
        "markColor": "",
        "mode": 0
      }, {
        "type": "text",
        "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(204, 204, 204);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:644.53125rpx;top:194.53125rpx;margin-right:0;",
        "content": "\u8d77\/\u4efd",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0"
        },
        "animations": [],
        "compId": "data.content[6]",
        "parentCompid": "free_vessel3",
        "markColor": "",
        "mode": 0
      }, {
        "type": "text",
        "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:32.8125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:281.25rpx;top:194.53125rpx;margin-right:0;",
        "content": "\u8ddd\u79bb\u4f608.1\u516c\u91cc",
        "customFeature": {
          "boxColor": "rgb(0, 0, 0)",
          "boxR": "5",
          "boxStyle": false,
          "boxX": "0",
          "boxY": "0"
        },
        "animations": [],
        "compId": "data.content[7]",
        "parentCompid": "free_vessel3",
        "markColor": "",
        "mode": 0
      }],
      "customFeature": {
        "boxColor": "rgb(0, 0, 0)",
        "boxR": 5,
        "boxStyle": false,
        "boxX": 0,
        "boxY": 0,
        "action": "goods-trade"
      },
      "animations": [],
      "page_form": "",
      "compId": "free_vessel3",
      "itemType": "free-vessel",
      "itemParentType": null,
      "itemIndex": "free_vessel3",
      "eventParams": "{\"goods_id\":null,\"goods_type\":null}",
      "eventHandler": "tapGoodsTradeHandler"
    },
    "has_tabbar": 0,
    "page_hidden": true,
    "page_form": "",
    "top_nav": {
      "navigationBarBackgroundColor": "#FFFFFF",
      "navigationBarTextStyle": "black",
      "navigationBarTitleText": "\u666f\u70b9"
    }
  },
    need_login: false,
    page_router: '9d9I9zPd9d_page10002',
    page_form: 'none',
      list_compids_params: [],
      user_center_compids_params: [],
      goods_compids_params: [],
  prevPage:0,
      tostoreComps: [],
      carouselGroupidsParams: [],
      relobj_auto: [],
      bbsCompIds: [],
      dynamicVesselComps: [],
      communityComps: [],
      franchiseeComps: [],
      cityLocationComps: [],
      seckillOnLoadCompidParam: [],
      dynamicClassifyGroupidsParams: [],
      newClassifyGroupidsParams: [],
      videoListComps: [],
      videoProjectComps: [],
      newsComps: [],
      popupWindowComps: [],
      returnToVersionFlag: true,
  requesting: false,
  requestNum: 1,
  modelChoose: [],
  modelChooseId: '',
  modelChooseName: [],
  onLoad: function (e) {
    if (e.statisticsType == 11) {
      delete e.statisticsType
      delete e.needStatistics
    }
    
    app.onPageLoad(e);
    app.isNeedRewardModal();
  },
  dataInitial: function () {
    app.pageDataInitial();
  },
  onShareAppMessage: function (e) {
    let that = this;
    return app.onPageShareAppMessage(e, function (addTime) {
      app.showToast({ title: '转发成功', duration: 500 });
      // 转发获取积分
      app.sendRequest({
        hideLoading: true,
        url: '/index.php?r=appShop/getIntegralLog',
        data: { add_time: addTime },
        success: function (res) {
          if (res.status == 0) {
            res.data && that.setData({
              'rewardPointObj': {
                showModal: true,
                count: res.data,
                callback: ''
              }
            });
          }
        }
      })
    });
  },
  onShow: function () {
    app.onPageShow();
  },
  reachBottomFuc: [],
  onReachBottom: function () {
    app.onPageReachBottom( this.reachBottomFuc );
  },
  onUnload: function () {
    app.onPageUnload();
  },
  connectWifiHandler:function(e){
    app.connectWifiHandler(e)
  },
  tapPrevewPictureHandler: function (e) {
    app.tapPrevewPictureHandler(e);
  },
  suspensionBottom: function () {
    app.suspensionBottom();
  },
  pageScrollFunc: function (e) {
    app.pageScrollFunc(e);
  },
  dynamicVesselScrollFunc: function (e) {
    app.dynamicVesselScrollFunc(e);
  },
  goodsScrollFunc: function (e) {
    app.goodsScrollFunc(e);
  },
  takeoutStyleScrollFunc: function(e){
    app.takeoutStyleScrollFunc(e);
  },
  franchiseeScrollFunc: function (e) {
    app.franchiseeScrollFunc(e);
  },
  seckillScrollFunc: function (e) {
    app.seckillScrollFunc(e);
  },
  videoScrollFunc: function (e) {
    app.videoScrollFunc(e);
  },
  carouselVideoClose: function(e) {
    app.carouselVideoClose(e);
  },
  changeCount: function (e) {
    app.changeCount(e);
  },
  inputChange: function (e) {
    app.inputChange(e);
  },
  bindDateChange: function (e) {
    app.bindDateChange(e);
  },
  bindTimeChange: function (e) {
    app.bindTimeChange(e);
  },
  bindSelectChange: function (e) {
    app.bindSelectChange(e);
  },
  bindScoreChange: function (e) {
    app.bindScoreChange(e);
  },
  submitForm: function (e) {
    app.submitForm(e);
  },
  udpateVideoSrc: function (e) {
    app.udpateVideoSrc(e);
  },
  tapMapDetail: function (e) {
    app.tapMapDetail(e);
  },
  uploadFormImg: function (e) {
    app.uploadFormImg(e);
  },
  deleteUploadImg: function (e) {
    app.deleteUploadImg(e);
  },
  listVesselTurnToPage: function (e) {
    app.listVesselTurnToPage(e);
  },
  dynamicVesselTurnToPage: function (e) {
    app.dynamicVesselTurnToPage(e);
  },
  userCenterTurnToPage: function (e) {
    app.userCenterTurnToPage(e);
  },
  turnToGoodsDetail: function (e) {
    app.turnToGoodsDetail(e);
  },
  turnToFranchiseeDetail: function (e) {
    app.turnToFranchiseeDetail(e);
  },
  turnToSeckillDetail: function (e) {
    app.turnToSeckillDetail(e);
  },
  sortListFunc: function (e) {
    app.sortListFunc(e);
  },
  bbsInputComment: function (e) {
    app.bbsInputComment(e);
  },
  bbsInputReply: function (e) {
    app.bbsInputReply(e);
  },
  uploadBbsCommentImage: function (e) {
    app.uploadBbsCommentImage(e);
  },
  uploadBbsReplyImage: function (e) {
    app.uploadBbsReplyImage(e);
  },
  deleteCommentImage: function (e) {
    app.deleteCommentImage(e);
  },
  deleteReplyImage: function (e) {
    app.deleteReplyImage(e);
  },
  bbsPublishComment: function (e) {
    app.bbsPublishComment(e);
  },
  clickBbsReplyBtn: function (e) {
    app.clickBbsReplyBtn(e);
  },
  bbsPublishReply: function (e) {
    app.bbsPublishReply(e);
  },
  searchList: function (e) {
    app.searchList(e);
  },
  selectLocal: function (e) {
    app.selectLocal(e);
  },
  cancelCity: function (e) {
    app.cancelCity(e);
  },
  bindCityChange: function (e) {
    app.bindCityChange(e);
  },
  submitCity: function (e) {
    app.submitCity(e);
  },
  openTakeoutLocation: function (e) {
    app.openTakeoutLocation(e);
  },
  callTakeout: function (e) {
    app.callTakeout(e);
  },
  getMoreAssess: function (e) {
    app.getMoreAssess(e);
  },
  changeEvaluate: function (e) {
    app.changeEvaluate(e)
  },
  deleteAllCarts: function (e) {
    app.deleteAllCarts(e);
  },
  clickCategory: function (e) {
    app.clickCategory(e);
  },
  goodsListMinus: function (e) {
    app.goodsListMinus(e);
  },
  goodsListPlus: function (e) {
    app.goodsListPlus(e);
  },
  cartListMinus: function (e) {
    app.cartListMinus(e);
  },
  cartListPlus: function (e) {
    app.cartListPlus(e);
  },
  changeAssessType: function (e) {
    app.changeAssessType(e);
  },
  showShoppingCartPop: function (e) {
    app.showShoppingCartPop(e);
  },
  hideShoppingCart: function (e) {
    app.hideShoppingCart(e);
  },
  showGoodsDetail: function (e) {
    app.showGoodsDetail(e);
  },
  hideDetailPop: function (e) {
    app.hideDetailPop(e);
  },
  hideModelPop: function (e) {
    app.hideModelPop(e);
  },
  chooseModel: function (e) {
    app.chooseModel(e);
  },
  sureChooseModel: function (e) {
    app.sureChooseModel(e);
  },
  clickChooseComplete: function (e) {
    app.clickChooseComplete(e);
  },
  reLocalAddress: function(e){
    app.reLocalAddress(e);
  },
  tapGoodsTradeHandler: function (e) {
    app.tapGoodsTradeHandler(e);
  },
  tapVideoHandler: function(e){
    app.tapVideoHandler(e);
  },
  tapVideoPlayHandler: function(e){
    app.tapVideoPlayHandler(e);
  },
  tapInnerLinkHandler: function (e) {
    app.tapInnerLinkHandler(e);
  },
  tapToPluginHandler: function (e) {
    app.tapToPluginHandler(e);
  },
  tapPhoneCallHandler: function (e) {
    app.tapPhoneCallHandler(e);
  },
  tapNewClassifyShowSubClassify: function(e){
    app.tapNewClassifyShowSubClassify(e);
  },
  tapNewClassifyRefreshHandler: function(e){
    app.tapNewClassifyRefreshHandler(e);
  },
  tapRefreshListHandler: function (e) {
    app.tapRefreshListHandler(e);
  },
  tapGetCouponHandler: function (e) {
    app.tapGetCouponHandler(e);
  },
  tapCommunityHandler: function (e) {
    app.tapCommunityHandler(e);
  },
  tapPageShareHandler:function(e) {
    app.tapPageShareHandler(e);
  },
  turnToCommunityPage: function (e) {
    app.turnToCommunityPage(e);
  },
  tapToFranchiseeHandler: function (e) {
    app.tapToFranchiseeHandler(e);
  },
  tapToTransferPageHandler: function () {
    app.tapToTransferPageHandler();
  },
  tapToSeckillHandler: function (e) {
    app.tapToSeckillHandler(e);
  },
  tapToPromotionHandler: function () {
    app.tapToPromotionHandler();
  },
  tapToCouponReceiveListHandler: function () {
    app.tapToCouponReceiveListHandler();
  },
  tapToRechargeHandler: function () {
    app.tapToRechargeHandler();
  },
  tapToXcx: function (e) {
    app.tapToXcx(e);
  },
  tapFranchiseeLocation: function (e) {
    app.tapFranchiseeLocation(e);
  },
  showAddShoppingcart: function (e) {
    app.showAddShoppingcart(e);
  },
  hideAddShoppingcart: function () {
    app.hideAddShoppingcart();
  },
  selectGoodsSubModel: function (e) {
    app.selectGoodsSubModel(e);
  },
  resetSelectCountPrice: function () {
    app.resetSelectCountPrice();
  },
  inputBuyCount: function(e){
    app.inputBuyCount(e)
  },
  clickGoodsMinusButton: function (e) {
    app.clickGoodsMinusButton();
  },
  clickGoodsPlusButton: function (e) {
    app.clickGoodsPlusButton();
  },
  sureAddToShoppingCart: function () {
    app.sureAddToShoppingCart();
  },
  sureAddToBuyNow: function () {
    app.sureAddToBuyNow();
  },
  clickTostoreMinusButton: function (e) {
    app.clickTostoreMinusButton(e);
  },
  clickTostorePlusButton: function (e) {
    app.clickTostorePlusButton(e);
  },
  readyToPay: function () {
    app.readyToTostorePay();
  },
  getValidateTostore: function () {
    app.getValidateTostore();
  },
  goToShoppingCart: function () {
    app.goToShoppingCart();
  },
  getCartList: function () {
    app.getTostoreCartList();
  },
  stopPropagation: function () {
  },
  turnToSearchPage:function (e) {
    app.turnToSearchPage(e);
  },
  previewImage: function (e) {
    var dataset = e.currentTarget.dataset;
    app.previewImage({
      current : dataset.src,
      urls: dataset.previewImgarr,
    });
  },
  scrollPageTop: function () {
    app.pageScrollTo(0);
  },
  suspensionTurnToPage: function (e) {
    app.suspensionTurnToPage(e);
  },
  tapToLuckyWheel: function (e) {
    app.tapToLuckyWheel(e);
  },
  tapToGoldenEggs: function (e) {
    app.tapToGoldenEggs(e);
  },
  tapToScratchCard: function (e) {
    app.tapToScratchCard(e);
  },
  tapToLuckyWheel: function (e) {
    app.tapToLuckyWheel(e);
  },
  keywordList:{},
  bindSearchTextChange: function (e) {
    this.keywordList[e.currentTarget.dataset.compid] = e.detail.value;
  },
  // 文字组件跳到地图
  textToMap: function(e) {
    app.textToMap(e);
  },
  tapDynamicClassifyFunc: function(e){
    app.tapDynamicClassifyFunc(e);
  },
  // 跳转到视频详情
  turnToVideoDetail : function(e) {
    app.turnToVideoDetail(e);
  },
  // 单个视频组件播放视频
  startPlayVideo : function(e) {
    app.startPlayVideo(e);
  },
  // 视频播放报错
  videoError: function(e) {
    app.showModal({
      content: e.detail.errMsg
    });
  },
  // 视频项目播放事件
  videoProjectPlay: function(e){
    app.videoProjectPlay(e);
  },
  // 视频项目暂停事件
  videoProjectPause: function(e) {
    app.videoProjectPause(e);
  },
  // 跳转到资讯详情
  turnToNewsDetail: function (e) {
    app.turnToNewsDetail(e)
  },
  //切换资讯分类
  getNewsCateList: function (e) {
    app.getNewsCateList(e);
  },
  showBbsReplyDialog: function(e){
    app.showBbsReplyDialog(e);
  },
  hideBbsReplyDialog: function(e){
    app.hideBbsReplyDialog(e);
  },
  popupWindowControlHandler: function(e){
    app.popupWindowControlHandler(e);
  },
  tapMaskClosePopupWindow: function(e){
    app.tapMaskClosePopupWindow(e);
  }
};
Page(pageData);
