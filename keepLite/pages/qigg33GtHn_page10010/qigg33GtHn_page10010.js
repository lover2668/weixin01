var app      = getApp();

var pageData = {
  data: {"picture1":{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:375rpx;width:750rpx;margin-left:auto;margin-right:auto;","content":"http:\/\/cdn.jisuapp.cn\/zhichi_frontend\/static\/webapp\/images\/default.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","segment":"rmhdxqzs","ifMust":false},"animations":[],"page_form":"rmhd","compId":"picture1","parentCompid":"picture1"},"free_vessel2":{"type":"free-vessel","style":"width:750rpx;height:440.625rpx;margin-bottom:auto;margin-right:auto;margin-top:-93.75rpx;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:23.4375rpx;border-style:none;box-shadow:rgb(204, 204, 204) 0rpx 7.03125rpx 4.6875rpx;height:424.21875rpx;width:679.6875rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:35.15625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_59536c1c94cc3.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"rgb(204, 204, 204)","boxX":"0px","boxY":"3px","boxR":"2px","boxStyle":true},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel2"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:23.4375rpx;width:609.375rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:70.3125rpx;top:124.21875rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_59536c80025d6.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel2"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:30.46875rpx;height:44.53125rpx;width:609.375rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:70.3125rpx;top:23.4375rpx;margin-right:0;","content":"\u62a5\u540d\u65f6\u95f4","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","segment":"","ifMust":true},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel2","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:25.78125rpx;height:44.53125rpx;width:609.375rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:70.3125rpx;top:72.65625rpx;margin-right:0;","content":"\u6211\u662f\u6587\u672c","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","segment":"bmsj","ifMust":false},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel2","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:30.46875rpx;height:44.53125rpx;width:609.375rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:72.65625rpx;top:159.375rpx;margin-right:0;","content":"\u6d3b\u52a8\u65f6\u95f4","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[4]","parentCompid":"free_vessel2","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:25.78125rpx;height:44.53125rpx;width:609.375rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:70.3125rpx;top:210.9375rpx;margin-right:0;","content":"\u6211\u662f\u6587\u672c","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","segment":"hdsj","ifMust":false},"animations":[],"compId":"data.content[5]","parentCompid":"free_vessel2","markColor":"","mode":0},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:23.4375rpx;width:609.375rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:70.3125rpx;top:262.5rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_59536c80025d6.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[6]","parentCompid":"free_vessel2"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:30.46875rpx;height:44.53125rpx;width:609.375rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:67.96875rpx;top:304.6875rpx;margin-right:0;","content":"\u6d3b\u52a8\u5730\u70b9","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[7]","parentCompid":"free_vessel2","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:25.78125rpx;height:44.53125rpx;width:609.375rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:65.625rpx;top:356.25rpx;margin-right:0;","content":"\u6211\u662f\u6587\u672c","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","segment":"hddd","ifMust":false},"animations":[],"compId":"data.content[8]","parentCompid":"free_vessel2","markColor":"","mode":0}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"rmhd","compId":"free_vessel2"},"text3":{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:30.46875rpx;height:44.53125rpx;width:679.6875rpx;line-height:44.53125rpx;margin-left:35.15625rpx;margin-top:30.46875rpx;opacity:1;text-align:left;","content":"\u6211\u662f\u6587\u672c","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","segment":"xqms","ifMust":false},"animations":[],"page_form":"rmhd","compId":"text3","parentCompid":"text3","markColor":"","mode":0},"free_vessel4":{"type":"free-vessel","style":"width:750rpx;height:82.03125rpx;margin-bottom:auto;margin-right:auto;margin-top:35.15625rpx;opacity:1;margin-left:auto;","content":[{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:32.8125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:309.375rpx;top:21.09375rpx;margin-right:0;right:auto;","content":"\u7acb\u5373\u62a5\u540d","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel4","markColor":"","mode":0}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"rmhd","compId":"free_vessel4"},"form_vessel5":{"type":"form-vessel","style":"background-color:rgba(0, 0, 0, 0);opacity:1;margin-left:auto;","content":[{"type":"input-ele","style":"margin-left:35.15625rpx;width:679.6875rpx;height:82.03125rpx;margin-right:auto;opacity:1;","content":"","customFeature":{"placeholder":"\u59d3\u540d","segment":"xm","ifMust":false},"animations":[],"compId":"data.content[0]","formCompid":"form_vessel5","segment_required":0,"parentCompid":"form_vessel5"},{"type":"input-ele","style":"margin-top:23.4375rpx;margin-left:35.15625rpx;width:679.6875rpx;height:82.03125rpx;margin-right:auto;opacity:1;","content":"","customFeature":{"placeholder":"\u7535\u8bdd","segment":"dh","ifMust":false},"animations":[],"compId":"data.content[1]","formCompid":"form_vessel5","segment_required":0,"parentCompid":"form_vessel5"},{"type":"select-ele","style":"background-color:rgba(0,0,0,0);margin-top:23.4375rpx;line-height:82.03125rpx;opacity:1;margin-left:35.15625rpx;margin-right:auto;width:679.6875rpx;color:rgb(102, 102, 102);font-size:32.8125rpx;","content":{"lists":["\u51cf\u8102\u6536\u8d2d\u8ba1\u5212","\u8179\u808c\u517b\u6210\u8ba1\u5212"],"title":"\u6d3b\u52a8\u9009\u62e9","formCompid":"form_vessel5"},"customFeature":{"lineBackgroundColor":"rgb(243, 243, 243)","lineBackgroundImage":"","secColor":"rgb(102, 102, 102)","secFontSize":"14px","secLineHeight":"30px","selectAmount":1,"secFontWeight":"","secFontStyle":"","secTextDecoration":"","segment":"hdxz","ifMust":false},"animations":[],"compId":"data.content[2]","formCompid":"form_vessel5","segment_required":0,"parentCompid":"form_vessel5","titleStyle":"color:rgb(102, 102, 102);font-size:32.8125rpx;background-color:rgb(243, 243, 243);line-height:70.3125rpx;margin-left:auto;"},{"type":"form-button","style":"background-color:rgb(95, 97, 199);border-color:rgb(34, 34, 34);border-style:none;color:rgb(255, 255, 255);font-size:32.8125rpx;height:82.03125rpx;line-height:82.03125rpx;margin-left:35.15625rpx;margin-right:auto;opacity:1;text-align:center;width:679.6875rpx;","content":"\u786e\u8ba4\u63d0\u4ea4","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0","segment":"submit-btn"},"animations":[],"compId":"data.content[3]","parentCompid":"form_vessel5"}],"customFeature":{"form":"rmhdbm","link":"-1","source":"none"},"animations":[],"page_form":"rmhd","compId":"form_vessel5","form":"rmhdbm","field_info":{"region_id":{"field":"region_id","required":"0","title":"\u57ce\u5e02"},"xm":{"field":"xm","required":"0","title":"\u59d3\u540d"},"dh":{"field":"dh","required":"0","title":"\u7535\u8bdd"},"hdxz":{"field":"hdxz","required":"0","title":"\u6d3b\u52a8\u9009\u62e9"}},"formCompid":"form_vessel5"},"has_tabbar":0,"page_hidden":true,"page_form":"rmhd","top_nav":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationBarTitleText":"\u70ed\u95e8\u6d3b\u52a8"}},
    need_login: false,
    page_router: 'qigg33GtHn_page10010',
    page_form: 'rmhd',
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
  }
};
Page(pageData);
