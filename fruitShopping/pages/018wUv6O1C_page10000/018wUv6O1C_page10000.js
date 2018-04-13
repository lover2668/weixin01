var app      = getApp();

var pageData = {
  data: {
    "carousel1": {
      "type": "carousel",
      "style": "height:468.75rpx;margin-left:0;margin-right:auto;margin-top:0;opacity:1;",
      "content": [{
        "customFeature": [],
        "pic": "http:\/\/cdn.jisuapp.cn\/zhichi_frontend\/static\/webapp\/images\/default.png",
        "content": "",
        "parentCompid": "carousel1",
        "style": ""
      }, {
        "customFeature": [],
        "pic": "http:\/\/cdn.jisuapp.cn\/zhichi_frontend\/static\/webapp\/images\/default.png",
        "content": "",
        "parentCompid": "carousel1",
        "style": ""
      }],
      "customFeature": {
        "autoplay": true,
        "interval": 2,
        "carouselgroupId": "1251619"
      },
      "animations": [],
      "page_form": "",
      "compId": "carousel1"
    },
    "album2": {
      "style": "background-color:rgba(255, 255, 255, 0);font-size:23.4375rpx;opacity:1;text-align:center;margin-left:auto;",
      "ul_style": "padding-left:75rpx;padding-top:7.03125rpx;margin-left:auto;",
      "html_mode": "sec-mode",
      "li": [{
        "customFeature": {
          "action": "inner-link",
          "page-link": "018wUv6O1C_page10009"
        },
        "li_class": "album-pic router",
        "action": "inner-link",
        "pic": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_59c090cf40ca8.png",
        "title": "\u79d2\u6740",
        "li_style": "width:93.75rpx;margin-right:75rpx;margin-bottom:7.03125rpx;margin-left:auto;",
        "img_style": "height:93.75rpx;margin-left:auto;",
        "eventParams": "{\"inner_page_link\":\"018wUv6O1C_page10009\",\"is_redirect\":0}",
        "eventHandler": "tapInnerLinkHandler"
      }, {
        "customFeature": {
          "action": "inner-link",
          "page-link": "groupCenter"
        },
        "li_class": "album-pic router",
        "action": "inner-link",
        "pic": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_59c090cfd29f5.png",
        "title": "\u62fc\u56e2",
        "li_style": "width:93.75rpx;margin-right:75rpx;margin-bottom:7.03125rpx;margin-left:auto;",
        "img_style": "height:93.75rpx;margin-left:auto;",
        "eventParams": "{\"inner_page_link\":\"groupCenter\",\"is_redirect\":0}",
        "eventHandler": "tapInnerLinkHandler"
      }, {
        "customFeature": {
          "action": "coupon-receive-list",
          "page-link": "page10010"
        },
        "action": "coupon-receive-list",
        "li_class": "album-pic",
        "pic": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_59c090cfdfa16.png",
        "title": "\u4f18\u60e0\u5238",
        "li_style": "width:93.75rpx;margin-right:75rpx;margin-bottom:7.03125rpx;margin-left:auto;",
        "img_style": "height:93.75rpx;margin-left:auto;",
        "eventParams": "[]",
        "eventHandler": "tapToCouponReceiveListHandler"
      }, {
        "customFeature": {
          "action": "inner-link",
          "page-link": "018wUv6O1C_page10011"
        },
        "li_class": "album-pic router",
        "action": "inner-link",
        "pic": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_59c090cf37a8b.png",
        "title": "\u591a\u5546\u5bb6",
        "li_style": "width:93.75rpx;margin-right:75rpx;margin-bottom:7.03125rpx;margin-left:auto;",
        "img_style": "height:93.75rpx;margin-left:auto;",
        "eventParams": "{\"inner_page_link\":\"018wUv6O1C_page10011\",\"is_redirect\":0}",
        "eventHandler": "tapInnerLinkHandler"
      }, {
        "customFeature": {
          "action": "recharge"
        },
        "action": "recharge",
        "li_class": "album-pic",
        "pic": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_59c090cf2903c.png",
        "title": "\u5145\u503c",
        "li_style": "width:93.75rpx;margin-right:75rpx;margin-bottom:7.03125rpx;margin-left:auto;",
        "img_style": "height:93.75rpx;margin-left:auto;",
        "eventParams": "[]",
        "eventHandler": "tapToRechargeHandler"
      }, {
        "customFeature": {
          "action": "inner-link",
          "page-link": "018wUv6O1C_page10008"
        },
        "li_class": "album-pic router",
        "action": "inner-link",
        "pic": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_59c0b1bf65881.png",
        "title": "\u5206\u7c7b",
        "li_style": "width:93.75rpx;margin-right:75rpx;margin-bottom:7.03125rpx;margin-left:auto;",
        "img_style": "height:93.75rpx;margin-left:auto;",
        "eventParams": "{\"inner_page_link\":\"018wUv6O1C_page10008\",\"is_redirect\":0}",
        "eventHandler": "tapInnerLinkHandler"
      }, {
        "customFeature": {
          "action": "inner-link",
          "page-link": "018wUv6O1C_page10013"
        },
        "li_class": "album-pic router",
        "action": "inner-link",
        "pic": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_59c09205239cf.png",
        "title": "\u79ef\u5206\u5546\u57ce",
        "li_style": "width:93.75rpx;margin-right:75rpx;margin-bottom:7.03125rpx;margin-left:auto;",
        "img_style": "height:93.75rpx;margin-left:auto;",
        "eventParams": "{\"inner_page_link\":\"018wUv6O1C_page10013\",\"is_redirect\":0}",
        "eventHandler": "tapInnerLinkHandler"
      }, {
        "customFeature": {
          "action": "transfer"
        },
        "action": "transfer",
        "li_class": "album-pic",
        "pic": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_59c092f2aa3f6.png",
        "title": "\u4ed8\u94b1",
        "li_style": "width:93.75rpx;margin-right:75rpx;margin-bottom:7.03125rpx;margin-left:auto;",
        "img_style": "height:93.75rpx;margin-left:auto;",
        "eventParams": "[]",
        "eventHandler": "tapToTransferPageHandler"
      }],
      "customFeature": {
        "col": 4,
        "imgHeight": "40px",
        "mode": 1,
        "padding-left": "32",
        "padding-top": 3,
        "picBorderRadius": "0px",
        "row": 2,
        "action": "",
        "imgWidth": 30
      },
      "itemType": "album",
      "itemParentType": null,
      "itemIndex": "album2",
      "content": ""
    },
    "free_vessel3": {
      "type": "free-vessel",
      "style": "width:750rpx;height:246.09375rpx;margin-bottom:auto;margin-right:auto;opacity:1;margin-left:auto;",
      "content": [{
        "type": "picture",
        "style": "opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:246.09375rpx;width:703.125rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;right:auto;",
        "content": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_59c23cf494556.png",
        "customFeature": {
          "boxShadow": "('#000','0','0','5')",
          "boxColor": "#000",
          "boxX": "0",
          "boxY": "0",
          "boxR": "5",
          "action": "inner-link",
          "inner-page-link": "018wUv6O1C_page10009"
        },
        "animations": [],
        "compId": "data.content[0]",
        "parentCompid": "free_vessel3",
        "itemType": "picture",
        "itemParentType": "free-vessel",
        "itemIndex": 0,
        "eventParams": "{\"inner_page_link\":\"018wUv6O1C_page10009\",\"is_redirect\":0}",
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
      "compId": "free_vessel3"
    },
    "seckill4": {
      "type": "seckill",
      "style": "background-color:rgb(243, 243, 243);opacity:1;color:rgb(102, 102, 102);font-size:32.8125rpx;height:auto;margin-left:auto;",
      "content": "",
      "customFeature": {
        "lineBackgroundColor": "rgb(255, 255, 255)",
        "lineBackgroundImage": "",
        "margin": 0,
        "lineHeight": 250,
        "imgWidth": 140,
        "imgHeight": 140,
        "vesselAutoheight": 1,
        "height": "300px",
        "form": "goods",
        "mode": 2,
        "name": "\u79d2\u6740\u5217\u8868",
        "ifUseContact": true,
        "isIntegral": false,
        "isShoppingCart": false,
        "id": "list-347679182657"
      },
      "animations": [],
      "page_form": "",
      "compId": "seckill4",
      "parentCompid": "seckill4",
      "list_style": "background-color:rgb(255, 255, 255);height:585.9375rpx;margin-left:auto;",
      "img_style": "width:328.125rpx;height:328.125rpx;margin-left:auto;",
      "title_width": {
        "width": "328.125rpx"
      },
      "param": "{\"id\":\"list-347679182657\",\"form\":\"goods\",\"goods_type\":0,\"page\":1,\"app_id\":\"71ZAO5zjo1\",\"is_count\":0,\"is_seckill\":1,\"is_integral\":0}"
    },
    "title_ele5": {
      "type": "title-ele",
      "style": "opacity:1;line-height:93.75rpx;background-color:rgba(239, 239, 239, 0);border-color:rgb(34, 34, 34);border-style:none;color:#666;font-size:37.5rpx;font-weight:bold;margin-left:auto;margin-right:auto;",
      "content": "\u4f18\u60e0\u4e2d\u5fc3",
      "customFeature": {
        "mode": "0",
        "markColor": "rgb(26, 147, 223)",
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
      "markColor": "rgb(26, 147, 223)",
      "mode": 0
    },
    "goods_list6": {
      "type": "goods-list",
      "style": "background-color:rgb(243, 243, 243);opacity:1;color:rgb(102, 102, 102);font-size:32.8125rpx;height:auto;margin-left:auto;",
      "content": "",
      "customFeature": {
        "lineBackgroundColor": "rgb(255, 255, 255)",
        "lineBackgroundImage": "",
        "margin": 0,
        "lineHeight": 200,
        "imgWidth": 140,
        "imgHeight": 140,
        "vesselAutoheight": 1,
        "height": "300px",
        "form": "goods",
        "mode": 2,
        "name": "\u5546\u54c1\u5217\u8868",
        "ifUseContact": true,
        "isIntegral": false,
        "isHideSales": false,
        "isHideStock": false,
        "isShoppingCart": false,
        "isBuyNow": false,
        "id": "list-617483666431",
        "source": "1836166"
      },
      "animations": [],
      "page_form": "",
      "compId": "goods_list6",
      "parentCompid": "goods_list6",
      "list_style": "background-color:rgb(255, 255, 255);height:468.75rpx;margin-left:auto;",
      "img_style": "width:328.125rpx;height:328.125rpx;margin-left:auto;",
      "title_width": {
        "width": "328.125rpx"
      },
      "param": "{\"id\":\"list-617483666431\",\"form\":\"goods\",\"goods_type\":0,\"page\":1,\"app_id\":\"71ZAO5zjo1\",\"is_count\":0,\"is_integral\":0,\"idx_arr\":{\"idx\":\"category\",\"idx_value\":\"1836166\"}}"
    },
    "title_ele7": {
      "type": "title-ele",
      "style": "opacity:1;line-height:93.75rpx;background-color:rgba(239, 239, 239, 0);border-color:rgb(34, 34, 34);border-style:none;color:#666;font-size:37.5rpx;font-weight:bold;margin-left:auto;margin-right:auto;",
      "content": "\u79ef\u5206\u5546\u57ce",
      "customFeature": {
        "mode": "0",
        "markColor": "rgb(26, 147, 223)",
        "boxColor": "#000",
        "boxR": "5px",
        "boxStyle": false,
        "boxX": "0",
        "boxY": "0"
      },
      "animations": [],
      "page_form": "",
      "compId": "title_ele7",
      "parentCompid": "title_ele7",
      "markColor": "rgb(26, 147, 223)",
      "mode": 0
    },
    "goods_list8": {
      "type": "goods-list",
      "style": "background-color:rgb(243, 243, 243);opacity:1;color:rgb(102, 102, 102);font-size:32.8125rpx;height:auto;margin-left:auto;",
      "content": "",
      "customFeature": {
        "lineBackgroundColor": "rgb(255, 255, 255)",
        "lineBackgroundImage": "",
        "margin": 0,
        "lineHeight": 200,
        "imgWidth": 140,
        "imgHeight": 140,
        "vesselAutoheight": 1,
        "height": "300px",
        "form": "goods",
        "mode": 2,
        "name": "\u5546\u54c1\u5217\u8868",
        "ifUseContact": true,
        "isIntegral": false,
        "isHideSales": false,
        "isHideStock": false,
        "isShoppingCart": false,
        "isBuyNow": false,
        "id": "list-239358153893"
      },
      "animations": [],
      "page_form": "",
      "compId": "goods_list8",
      "parentCompid": "goods_list8",
      "list_style": "background-color:rgb(255, 255, 255);height:468.75rpx;margin-left:auto;",
      "img_style": "width:328.125rpx;height:328.125rpx;margin-left:auto;",
      "title_width": {
        "width": "328.125rpx"
      },
      "param": "{\"id\":\"list-239358153893\",\"form\":\"goods\",\"goods_type\":0,\"page\":1,\"app_id\":\"71ZAO5zjo1\",\"is_count\":0,\"is_integral\":0}"
    },
    "has_tabbar": 1,
    "page_hidden": true,
    "page_form": "",
    "top_nav": {
      "navigationBarTitleText": "\u9996\u9875"
    }
  },
    need_login: false,
    page_router: '018wUv6O1C_page10000',
    page_form: 'none',
      list_compids_params: [],
      user_center_compids_params: [],
      goods_compids_params: [{"compid":"goods_list6","param":{"id":"list-617483666431","form":"goods","goods_type":0,"page":1,"app_id":"71ZAO5zjo1","is_count":0,"is_integral":0,"idx_arr":{"idx":"category","idx_value":"1836166"}}},{"compid":"goods_list8","param":{"id":"list-239358153893","form":"goods","goods_type":0,"page":1,"app_id":"71ZAO5zjo1","is_count":0,"is_integral":0}}],
  prevPage:0,
      tostoreComps: [],
      carouselGroupidsParams: [{"compid":"carousel1","carouselgroupId":"1251619"}],
      relobj_auto: [],
      bbsCompIds: [],
      dynamicVesselComps: [],
      communityComps: [],
      franchiseeComps: [],
      cityLocationComps: [],
      seckillOnLoadCompidParam: [{"compid":"seckill4","param":{"id":"list-347679182657","form":"goods","goods_type":0,"page":1,"app_id":"71ZAO5zjo1","is_count":0,"is_seckill":1,"is_integral":0}}],
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
