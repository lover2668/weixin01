var app      = getApp();

var pageData = {
  data: {
    "search1": {
      "type": "search",
      "style": "margin-top:0;margin-left:auto;",
      "content": {
        "placeholder": "\u641c\u7d22\u4f60\u559c\u6b22\u7684\u666f\u70b9"
      },
      "customFeature": {
        "hasQuickTags": true,
        "quickTags": ["\u7f8e\u56fd", "\u82f1\u56fd", "\u65e5\u672c", "\u97e9\u56fd"],
        "searchObject": {
          "subPageResponse": "inner-link",
          "subFuntionResponse": "call",
          "style": {
            "background-color": "rgb(243, 243, 243)",
            "background-image": "",
            "margin-top": "0px",
            "opacity": 1,
            "color": "rgb(102, 102, 102)",
            "font-size": "14px"
          },
          "content": "",
          "customFeature": {
            "lineBackgroundColor": "rgb(255, 255, 255)",
            "lineBackgroundImage": "",
            "margin": 0,
            "lineHeight": 212,
            "imgWidth": "140",
            "imgHeight": "140",
            "vesselAutoheight": 1,
            "height": "300px",
            "form": "goods",
            "mode": 1,
            "name": "\u5546\u54c1\u5217\u8868",
            "ifUseContact": true,
            "isIntegral": false,
            "isShoppingCart": false,
            "id": "list-919741952990",
            "source": "1841975"
          },
          "animations": [],
          "type": "goods-list",
          "name": "\u5546\u54c1\u5217\u8868",
          "id": "zhichi_7519863637"
        }
      },
      "animations": [],
      "page_form": "",
      "compId": "search1",
      "parentCompid": "search1"
    },
    "sort2": {
      "type": "sort",
      "style": "font-size:32.8125rpx;height:82.03125rpx;line-height:82.03125rpx;opacity:1;background-color:rgb(255, 255, 255);color:rgb(136, 136, 136);;margin-top:0;margin-left:auto;",
      "content": [{
        "customFeature": {
          "sort_direction": 0,
          "sort_key": "weight"
        },
        "text": "\u7efc\u5408",
        "content": "",
        "parentCompid": "sort2",
        "style": ""
      }, {
        "customFeature": {
          "sort_direction": 0,
          "sort_key": "sales"
        },
        "text": "\u9500\u91cf",
        "content": "",
        "parentCompid": "sort2",
        "style": ""
      }, {
        "customFeature": {
          "sort_direction": 0,
          "sort_key": "price"
        },
        "text": "\u4ef7\u683c",
        "content": "",
        "parentCompid": "sort2",
        "style": ""
      }],
      "customFeature": {
        "selected": 0,
        "selectedColor": "rgb(96, 212, 225)",
        "sort_object": "list-919741952990"
      },
      "animations": [],
      "page_form": "",
      "compId": "sort2"
    },
    "breakline3": {
      "type": "breakline",
      "style": "border-width:2.34375rpx;border-bottom-style:solid;margin-left:auto;margin-right;:auto;width:750rpx;margin-right:auto;border-bottom-color:rgb(243, 243, 243);",
      "content": "<div><\/div>",
      "customFeature": [],
      "animations": [],
      "page_form": "",
      "compId": "breakline3",
      "parentCompid": "breakline3"
    },
    "goods_list4": {
      "type": "goods-list",
      "style": "background-color:rgb(243, 243, 243);opacity:1;color:rgb(102, 102, 102);font-size:32.8125rpx;height:auto;margin-left:auto;",
      "content": "",
      "customFeature": {
        "lineBackgroundColor": "rgb(255, 255, 255)",
        "lineBackgroundImage": "",
        "margin": 0,
        "lineHeight": 212,
        "imgWidth": "140",
        "imgHeight": "140",
        "vesselAutoheight": 1,
        "height": "300px",
        "form": "goods",
        "mode": 1,
        "name": "\u5546\u54c1\u5217\u8868",
        "ifUseContact": true,
        "isIntegral": false,
        "isShoppingCart": true,
        "id": "list-919741952990",
        "source": "1841975"
      },
      "animations": [],
      "page_form": "",
      "compId": "goods_list4",
      "parentCompid": "goods_list4",
      "list_style": "background-color:rgb(255, 255, 255);height:496.875rpx;margin-left:auto;",
      "img_style": "width:328.125rpx;height:328.125rpx;margin-left:auto;",
      "title_width": {
        "width": "398.4375rpx"
      },
      "param": "{\"id\":\"list-919741952990\",\"form\":\"goods\",\"goods_type\":0,\"page\":1,\"app_id\":\"rYutUqUUaR\",\"is_count\":0,\"is_integral\":0,\"idx_arr\":{\"idx\":\"category\",\"idx_value\":\"1841975\"}}"
    },
    "has_tabbar": 0,
    "page_hidden": true,
    "page_form": "",
    "top_nav": {
      "navigationBarTitleText": "\u6b27\u7f8e\u65e5\u97e9"
    }
  },
  need_login: false,
    page_router: '9d9I9zPd9d_page10007',
    page_form: 'none',
      list_compids_params: [],
      user_center_compids_params: [],
      goods_compids_params: [{"compid":"goods_list4","param":{"id":"list-919741952990","form":"goods","goods_type":0,"page":1,"app_id":"rYutUqUUaR","is_count":0,"is_integral":0,"idx_arr":{"idx":"category","idx_value":"1841975"}}}],
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
