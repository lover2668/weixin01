var app      = getApp();

var pageData = {
  data: {"free_vessel1":{"type":"free-vessel","style":"width:750rpx;height:2475rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-left:0rpx;margin-right:auto;margin-top:0rpx;opacity:1;","content":[{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:37.5rpx;font-weight:bold;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:46.875rpx;top:23.4375rpx;margin-right:0;","content":"\u6765\u8bf4\u8bf4\u4f60\u4e0e\u9a7e\u6821\u7684\u4e0d\u89e3\u4e4b\u7f18.....\n","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel1","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:46.875rpx;top:79.6875rpx;margin-right:0;","content":"2017-08-01 17:02","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel1","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:32.8125rpx;height:44.53125rpx;width:656.25rpx;line-height:46.875rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:46.875rpx;top:128.90625rpx;margin-right:0;","content":"\u4eca\u5929\u5c0f\u7f16\u60f3\u548c\u4f60\u4eec\u8bf4\u7684\u662f\u8003\u9a7e\u7167\u7684\u6545\u4e8b\n\u56e0\u4e3a\u5c0f\u7f16\u770b\u5230\u4e00\u4e2a\u6d88\u606f\u8bf4\u7684\u662f\u4e00\u4f4d\u5b66\u54585\u6302\u79d1\u76ee\u4e8c\u8f66\u5185\u5927\u54ed\uff0c\u88ab\u76d1\u63a7\u5f55\u4e0b\n\u770b\u7684\u5c0f\u7f16\u662f\u611f\u540c\u8eab\u53d7\uff0c\u6df1\u6709\u4f53\u4f1a","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel1","markColor":"","mode":0},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:0rpx;border-style:none;border-width:0rpx;height:297.65625rpx;width:325.78125rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:51.5625rpx;top:325.78125rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5981350b2a40e.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel1"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:32.8125rpx;height:44.53125rpx;width:656.25rpx;line-height:46.875rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:46.875rpx;top:660.9375rpx;margin-right:0;","content":"\u5c0f\u7f16\u89c9\u5f97\u79d1\u76ee\u4e8c\u5e94\u8be5\u662f\u6bcf\u4e2a\u4eba\u7684\u6076\u68a6\u6240\u5728\u5427\n\u9879\u76ee\u591a\uff0c\u96be\u5ea6\u9ad8\u3001\u6280\u672f\u6027\u5f3a\n\u79d1\u76ee\u4e8c\u4e0d\u77e5\u9053\u96be\u5012\u4e86\u591a\u5c11\u5b66\u5458\u4eec\n\u5c0f\u7f16\u539f\u6765\u6709\u4f4d\u540c\u4e8b\u79d1\u4e8c\u8003\u4e864\u6b21\uff0c\u5230\u7b2c\u4e94\u6b21\u77e5\u9053\u81ea\u5df1\u8fd8\u662f\u4e0d\u884c\n\u7136\u540e\u5c31\u4e0d\u8003\u4e86\uff01\u4e0d\u8003\u4e86\uff01\u4e0d\u8003\u4e86\uff01\uff01\n\u4ed6\u8bf4\u53cd\u6b63\u4e5f\u8003\u4e0d\u8fc7\u53bb\uff0c\u4e0d\u6d6a\u8d39\u94b1\u4e86\n\u7136\u540e\u9a7e\u6821\u5c31\u9000\u4e86\u4ed6\u4e00\u534a\u7684\u5b66\u8d39\uff01\uff01\uff01","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[4]","parentCompid":"free_vessel1","markColor":"","mode":0},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:0rpx;border-style:none;border-width:0rpx;height:274.21875rpx;width:318.75rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:46.875rpx;top:1059.375rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5981357d01f94.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[5]","parentCompid":"free_vessel1"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:32.8125rpx;height:44.53125rpx;width:656.25rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:46.875rpx;top:1357.03125rpx;margin-right:0;","content":"\u6ca1\u8003\u7684\u65f6\u5019\u89c9\u5f97\u662f\u4e2a\u5927\u96be\u5173\uff0c\u8003\u5b8c\u4e4b\u540e\u4f1a\u89c9\u5f97\u5176\u5b9e\u8fd8\u597d\n\u5c0f\u7f16\u6709\u597d\u51e0\u4e2a\u540c\u4e8b\u90fd\u662f\u524d\u6bb5\u65f6\u95f4\u521a\u62ff\u5230\u9a7e\u7167\n\u5c0f\u7f16\u7b97\u662f\u770b\u7740\u5979\u4eec\u4e00\u6b65\u6b65\u52aa\u529b\u3001\u575a\u6301\u7ec3\u8f66\u8003\u8bd5\u62ff\u9a7e\u7167\n\u7528\u5979\u4eec\u7684\u8bdd\u8bf4\uff1a\u4e0a\u5b66\u90fd\u6ca1\u8fd9\u4e48\u52aa\u529b\u8fc7\uff0c\u4e0d\u7136\u6e05\u534e\u5317\u5927\u4efb\u6211\u6311\uff01","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[6]","parentCompid":"free_vessel1","markColor":"","mode":0},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:0rpx;border-style:none;border-width:0rpx;height:349.21875rpx;width:339.84375rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:51.5625rpx;top:1675.78125rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_598135e9e1774.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[7]","parentCompid":"free_vessel1"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:32.8125rpx;height:44.53125rpx;width:656.25rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:46.875rpx;top:2067.1875rpx;margin-right:0;","content":"\u62ff\u5230\u9a7e\u7167\u7684\u5c0f\u4f19\u4f34\u4eec\u5370\u8c61\u6700\u6df1\u523b\u7684\u5e94\u8be5\u662f\u6559\u7ec3\u4e86\u5427\uff01\n\u5176\u5b9e\u6bcf\u4e2a\u4eba\u90fd\u6709\u4e00\u6bb5\u8f9b\u9178\u7684\u5b66\u8f66\u7ecf\u5386\uff01\uff01\uff01\n\u6765\u770b\u770b\u7f51\u53cb\u4eec\u90fd\u9047\u5230\u8fc7\u4ec0\u4e48\u5947\u8469\u4e8b\u5427","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[8]","parentCompid":"free_vessel1","markColor":"","mode":0}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel1"},"has_tabbar":0,"page_hidden":true,"page_form":"","top_nav":{"navigationBarTitleText":"\u65b0\u9875\u9762"},"dataId":""},
    need_login: false,
      bind_phone: false,
    page_router: 'W8WA2vgW4Y_page10011',
    page_form: 'none',
      dataId: '',
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
        formVesselComps: [],
      searchComponentParam: [],
      topicComps: [],
      topicClassifyComps: [],
      topicSortComps: [],
      rowNumComps: [],
      sidebarComps: [],
      slidePanelComps: [],
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

    app.checkCanUse('navigator.target', 'canIUseNavigatorTarget', ['button', 'picture', 'text', 'layout-vessel', 'static-vessel', 'free-vessel', 'title-ele', 'album', 'carousel', 'suspension', 'list', 'announce']);
  },
  dataInitial: function () {
    app.pageDataInitial();
  },
  onPageScroll: function(e) {
    app.onPageScroll(e);
  },
  onShareAppMessage: function (e) {
    if (e.from == 'button') {
      if (e.target.dataset.from == 'topicButton') {
        return app.shareAppMessage({
          path: '/informationManagement/pages/communityDetail/communityDetail?detail=' + e.target.dataset.id,
          desc: e.target.dataset.desc,
          success: function(addTime) {
            app.getIntegralLog(addTime);
            app.CountSpreadCount(e.target.dataset.id);
          }
        });
      }
    };
    return app.onPageShareAppMessage(e, app.getIntegralLog);
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
  slidePanelStart: function (e) {
    app.slidePanelStart(e);
  },
  slidePanelEnd: function (e) {
    app.slidePanelEnd(e);
  },
  onPullDownRefresh : function(){
    app.onPagePullDownRefresh();
  },
  changeDropDown:function(e){
    app.changeDropDown(e);
  },
  connectWifiHandler:function(e){
    app.connectWifiHandler(e)
  },
  tapPrevewPictureHandler: function (e) {
    app.tapPrevewPictureHandler(e);
  },
  suspensionBottom: function () {
    app.suspensionBottom(this);
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
  bindSliderChange: function (e) {
    app.bindSliderChange(e);
  },
  selectPicOption:function(e){
    app.selectPicOption(e);
  },
  formAddress: function(e){
    app.formAddress(e);
  },
  selectOptionOne: function (e) {
    app.selectOptionOne(e);
  },
  selectOptionSecond: function (e) {
    app.selectOptionSecond(e);
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
  deleteSingleCarts:function (e) {
    app.deleteSingleCarts(e);
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
  tapTopicHandler: function (e) {
    app.tapTopicHandler(e);
  },
  tapNewsHandler: function (e) {
    app.tapNewsHandler(e);
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
  // 跳转多商家入驻
  franchiseeEnterHandler: function () {
    app.franchiseeEnterHandler();
  },
  // 跳转多商家代理推广合作联系
  franchiseeCooperationHandler: function () {
    app.franchiseeCooperationHandler();
  },
  //bbs评论
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
  },
  //话题组件
  topicEleScrollFunc: function (e) {
    app.topicEleScrollFunc(e);
  },
  switchTopiclistOrderBy: function (e) {
    app.switchTopiclistOrderBy(e);
  },
  switchTopicCategory: function (e) {
    app.switchTopicCategory(e);
  },
  topicSearchInputAct: function (e) {
    app.topicSearchInputAct(e);
  },
  searchForTopicAct: function (e) {
    app.searchForTopicAct(e);
  },
  turnToTopicUserCenter: function (e) {
    app.turnToTopicUserCenter(e);
  },
  turnToTopicNotify: function (e) {
    app.turnToTopicNotify(e);
  },
  turnToTopicDetail: function (e) {
    app.turnToTopicDetail(e);
  },
  pageBackTopAct: function (e) {
    app.pageBackTopAct(e);
  },
  turnToTopicPublish: function (e) {
    app.turnToTopicPublish(e);
  },
  showTopicCommentBox: function (e) {
    app.showTopicCommentBox(e);
  },
  showTopicPhoneModal: function (e) {
    app.showTopicPhoneModal(e);
  },
  topicMakePhoneCall: function (e) {
    app.topicMakePhoneCall(e);
  },
  showTopicReplyComment: function (e) {
    app.showTopicReplyComment(e);
  },
  topicCommentReplyInput: function (e) {
    app.topicCommentReplyInput(e);
  },
  topicReplycommentSubmit: function (e) {
    app.topicReplycommentSubmit(e);
  },
  topicPerformLikeAct: function (e) {
    app.topicPerformLikeAct(e);
  },
  topicImgLoad: function (e) {
    app.topicImgLoad(e);
  },
  topicCommentReplyfocus:function (e) {
    app.topicCommentReplyfocus(e);
  },
  topicCommentReplyblur:function (e) {
    app.topicCommentReplyblur(e);
  },

  // 筛选组件 综合排序tab = 0
  sortByDefault: function (e) {
    app.sortByDefault(e);
  },
  // 筛选组件 按销量排序 tab = 1
  sortBySales: function (e) {
    app.sortBySales(e);
  },
  // 筛选组件 按价格排序 tab = 2
  sortByPrice: function (e) {
    app.sortByPrice(e);
  },
  // 筛选组件 展示侧边筛选
  filterList: function(e){
    app.filterList(e);
  },
  // 筛选侧栏确定
  filterConfirm: function(e){
    app.filterConfirm(e);
  },
  //侧边栏
  sidebarControlHandler: function (e) {
    app.sidebarControlHandler(e);
  },
  tapMaskCloseSidebar: function (e) {
    app.tapMaskCloseSidebar(e);
  },
  hideCompeletSidebar: function (e) {
    app.hideCompeletSidebar(e);
  },
  // 动画结束回调函数
  animationEnd: function(e){
    app.animationEnd(e);
  },
  //排号
  showTakeNumberWindow: function(e){
    app.showTakeNumberWindow(e);
  },
  hideTakeNumberWindow: function(e){
    app.hideTakeNumberWindow(e);
  },
  goToPreviewRowNumberOrder: function(e){
    app.goToPreviewRowNumberOrder(e);
  },
  selectRowNumberType: function(e){
    app.selectRowNumberType(e);
  },
  sureTakeNumber: function(e){
    app.sureTakeNumber(e);
  },
  goToCheckRowNunberDetail: function(e){
    app.goToCheckRowNunberDetail(e);
  },
  cancelCheckRowNunber: function(e){
    app.cancelCheckRowNunber(e);
  },
  rowNumberRefresh: function(e){
    app.rowNumberRefresh(e);
  },
  showCancelWindow: function (e) {
    app.showCancelWindow(e)
  },
  hideCancelWindow: function (e) {
    app.hideCancelWindow(e)
  },
  tapPluginLinkHandler: function(e){
    app.tapPluginLinkHandler(e);
  },
  tapGetWxCouponHandler: function (e){
    app.tapGetWxCouponHandler(e);
  },
  tapVipListHandler: function(){
    app.tapVipListHandler();
  },
  };
Page(pageData);
