var app      = getApp();

var pageData = {
  data: {"free_vessel1":{"type":"free-vessel","style":"width:750rpx;height:316.40625rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(238, 238, 238);border-style:solid;border-width:2.34375rpx;height:257.8125rpx;width:703.125rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;top:35.15625rpx;right:auto;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_593523d2a34fd.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel1"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:257.8125rpx;width:363.28125rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:363.28125rpx;top:35.15625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5936668f02e3a.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"goods-trade","goods-id":"0","goods-name":"\u56fd\u9645\u5546\u6cd5\u4e0e\u77e5\u8bc6\u4ea7\u6743","goods-type":"1"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel1","itemType":"picture","itemParentType":"free-vessel","itemIndex":1,"eventParams":"{\"goods_id\":\"0\",\"goods_type\":\"1\"}","eventHandler":"tapGoodsTradeHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:35.15625rpx;height:44.53125rpx;width:281.25rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:58.59375rpx;top:58.59375rpx;margin-right:0;","content":"\u56fd\u9645\u5546\u6cd5\u4e0e\u77e5\u8bc6\u4ea7\u6743","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel1","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(245, 53, 48);font-size:35.15625rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:58.59375rpx;top:152.34375rpx;margin-right:0;","content":"\uffe513990","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel1","markColor":"","mode":0},{"type":"button","style":"background-color:rgb(255, 196, 44);border-color:rgb(34, 34, 34);border-radius:7.03125rpx;border-style:none;border-width:4.6875rpx;color:rgb(255, 255, 255);font-size:30.46875rpx;height:46.875rpx;line-height:46.875rpx;margin-left:0;margin-right:0;margin-top:0;opacity:1;text-align:center;width:175.78125rpx;position:absolute;left:58.59375rpx;top:213.28125rpx;","content":"\u7acb\u5373\u9884\u7ea6","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0","action":"goods-trade","goods-id":"0","goods-name":"\u56fd\u9645\u5546\u6cd5\u4e0e\u77e5\u8bc6\u4ea7\u6743","goods-type":"1"},"animations":[],"compId":"data.content[4]","parentCompid":"free_vessel1","itemType":"button","itemParentType":"free-vessel","itemIndex":4,"eventParams":"{\"goods_id\":\"0\",\"goods_type\":\"1\"}","eventHandler":"tapGoodsTradeHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel1"},"free_vessel2":{"type":"free-vessel","style":"width:750rpx;height:316.40625rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:-2.34375rpx;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(238, 238, 238);border-style:solid;border-width:2.34375rpx;height:257.8125rpx;width:703.125rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;top:35.15625rpx;right:auto;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_593523d2a34fd.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel2"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:257.8125rpx;width:363.28125rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:363.28125rpx;top:35.15625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5936669412fd1.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel2"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:35.15625rpx;height:44.53125rpx;width:281.25rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:58.59375rpx;top:58.59375rpx;margin-right:0;","content":"\u7b56\u7565\uff0c\u89c4\u5212\u4e0e\u8425\u9500\u7ba1\u7406","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel2","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(245, 53, 48);font-size:35.15625rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:58.59375rpx;top:152.34375rpx;margin-right:0;","content":"\uffe525188","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel2","markColor":"","mode":0},{"type":"button","style":"background-color:rgb(255, 196, 44);border-color:rgb(34, 34, 34);border-radius:7.03125rpx;border-style:none;border-width:4.6875rpx;color:rgb(255, 255, 255);font-size:30.46875rpx;height:46.875rpx;line-height:46.875rpx;margin-left:0;margin-right:0;margin-top:0;opacity:1;text-align:center;width:175.78125rpx;position:absolute;left:58.59375rpx;top:213.28125rpx;","content":"\u7acb\u5373\u9884\u7ea6","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0","action":"goods-trade","goods-id":"3813523","goods-name":"\u7b56\u7565\uff0c\u89c4\u5212\u4e0e\u8425\u9500\u7ba1\u7406","goods-type":"1"},"animations":[],"compId":"data.content[4]","parentCompid":"free_vessel2","itemType":"button","itemParentType":"free-vessel","itemIndex":4,"eventParams":"{\"goods_id\":\"3813523\",\"goods_type\":\"1\"}","eventHandler":"tapGoodsTradeHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel2"},"free_vessel3":{"type":"free-vessel","style":"width:750rpx;height:316.40625rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:-2.34375rpx;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(238, 238, 238);border-style:solid;border-width:2.34375rpx;height:257.8125rpx;width:703.125rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;top:35.15625rpx;right:auto;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_593523d2a34fd.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel3"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:257.8125rpx;width:363.28125rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:363.28125rpx;top:37.5rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5936668f02e3a.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"goods-trade","goods-id":"0","goods-name":"\u56fd\u9645\u5546\u6cd5\u4e0e\u77e5\u8bc6\u4ea7\u6743","goods-type":"1"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel3","itemType":"picture","itemParentType":"free-vessel","itemIndex":1,"eventParams":"{\"goods_id\":\"0\",\"goods_type\":\"1\"}","eventHandler":"tapGoodsTradeHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:35.15625rpx;height:44.53125rpx;width:281.25rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:58.59375rpx;top:58.59375rpx;margin-right:0;","content":"\u521b\u4e1a\u4e0e\u98ce\u9669\u6295\u8d44\u7ba1\u7406","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel3","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(245, 53, 48);font-size:35.15625rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:58.59375rpx;top:152.34375rpx;margin-right:0;","content":"\uffe512399","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel3","markColor":"","mode":0},{"type":"button","style":"background-color:rgb(255, 196, 44);border-color:rgb(34, 34, 34);border-radius:7.03125rpx;border-style:none;border-width:4.6875rpx;color:rgb(255, 255, 255);font-size:30.46875rpx;height:46.875rpx;line-height:46.875rpx;margin-left:0;margin-right:0;margin-top:0;opacity:1;text-align:center;width:175.78125rpx;position:absolute;left:58.59375rpx;top:213.28125rpx;","content":"\u7acb\u5373\u9884\u7ea6","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0","action":"goods-trade","goods-id":"0","goods-name":"\u56fd\u9645\u5546\u6cd5\u4e0e\u77e5\u8bc6\u4ea7\u6743","goods-type":"1"},"animations":[],"compId":"data.content[4]","parentCompid":"free_vessel3","itemType":"button","itemParentType":"free-vessel","itemIndex":4,"eventParams":"{\"goods_id\":\"0\",\"goods_type\":\"1\"}","eventHandler":"tapGoodsTradeHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel3"},"free_vessel4":{"type":"free-vessel","style":"width:750rpx;height:316.40625rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:-2.34375rpx;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(238, 238, 238);border-style:solid;border-width:2.34375rpx;height:257.8125rpx;width:703.125rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;top:35.15625rpx;right:auto;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_593523d2a34fd.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel4"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:257.8125rpx;width:363.28125rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:363.28125rpx;top:35.15625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5936669412fd1.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"goods-trade","goods-id":"3813523","goods-name":"\u7b56\u7565\uff0c\u89c4\u5212\u4e0e\u8425\u9500\u7ba1\u7406","goods-type":"1"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel4","itemType":"picture","itemParentType":"free-vessel","itemIndex":1,"eventParams":"{\"goods_id\":\"3813523\",\"goods_type\":\"1\"}","eventHandler":"tapGoodsTradeHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:35.15625rpx;height:44.53125rpx;width:281.25rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:58.59375rpx;top:58.59375rpx;margin-right:0;","content":"\u7b56\u7565\uff0c\u89c4\u5212\u4e0e\u8425\u9500\u7ba1\u7406","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel4","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(245, 53, 48);font-size:35.15625rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:58.59375rpx;top:152.34375rpx;margin-right:0;","content":"\uffe525188","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel4","markColor":"","mode":0},{"type":"button","style":"background-color:rgb(255, 196, 44);border-color:rgb(34, 34, 34);border-radius:7.03125rpx;border-style:none;border-width:4.6875rpx;color:rgb(255, 255, 255);font-size:30.46875rpx;height:46.875rpx;line-height:46.875rpx;margin-left:0;margin-right:0;margin-top:0;opacity:1;text-align:center;width:175.78125rpx;position:absolute;left:58.59375rpx;top:213.28125rpx;","content":"\u7acb\u5373\u9884\u7ea6","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0","action":"goods-trade","goods-id":"3813523","goods-name":"\u7b56\u7565\uff0c\u89c4\u5212\u4e0e\u8425\u9500\u7ba1\u7406","goods-type":"1"},"animations":[],"compId":"data.content[4]","parentCompid":"free_vessel4","itemType":"button","itemParentType":"free-vessel","itemIndex":4,"eventParams":"{\"goods_id\":\"3813523\",\"goods_type\":\"1\"}","eventHandler":"tapGoodsTradeHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel4"},"suspension5":{"type":"suspension","style":"opacity:1;color:#fff;font-size:46.875rpx;margin-left:auto;","content":[],"customFeature":{"margin":1,"lineBackgroundColor":"rgba(0,0,0,0.5)","appendComponent":{"service":true,"myOrder":false,"shoppingCart":true,"top":false}},"animations":[],"page_form":"","compId":"suspension5","list_style":"margin-bottom:2.34375rpx;border-radius:;background-color:rgba(0,0,0,0.5);margin-left:auto;","suspension_bottom":70},"has_tabbar":0,"page_hidden":true,"page_form":"","top_nav":{"navigationBarTitleText":"\u7cbe\u54c1\u8bfe\u5802"}},
    need_login: false,
    page_router: '3L0TOOwy3i_page10004',
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
