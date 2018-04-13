var app      = getApp();

var pageData = {
  data: {"text1":{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:35.15625rpx;font-weight:bold;height:44.53125rpx;width:159.375rpx;line-height:70.3125rpx;margin-left:auto;margin-top:23.4375rpx;opacity:1;text-align:left;margin-right:auto;","content":" \u91d1\u878d\u7ba1\u7406","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"text1","parentCompid":"text1","markColor":"","mode":0},"count_ele2":{"type":"count-ele","style":"margin-left:539.0625rpx;margin-top:-23.4375rpx;margin-right:auto;color:rgb(102, 102, 102);font-size:28.125rpx;opacity:1;height:53.90625rpx;width:750rpx;","content":"\u6d4f\u89c8","customFeature":{"ifAutoCount":true,"ifBindPage":false,"icon":"view-icon","size":"23px"},"animations":[],"page_form":"","compId":"count_ele2","icon":"view-icon","icon_size":"23px","ifAutoCount":true,"objrel":"yYTTTyOtXl_view"},"text3":{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:30.46875rpx;height:44.53125rpx;width:703.125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:18.75rpx;opacity:1;text-align:left;margin-right:auto;","content":"    \u91d1\u878d\u7ba1\u7406\u662f\u6307\u56fd\u5bb6\u4e3a\u4e86\u5b9e\u73b0\u8d27\u5e01\u4f9b\u6c42\u5e73\u8861\u3001\u7a33\u5b9a\u8d27\u5e01\u503c\u548c\u7ecf\u6d4e\u589e\u957f\u7b49\u76ee\u6807\u800c\u5bf9\u8d27\u5e01\u8d44\u91d1\u6240\u5b9e\u884c\u7684\u7ba1\u7406\u3002\u91d1\u878d\u7ba1\u7406\u4e13\u4e1a\u5145\u5206\u53d1\u6325\u4e86\u6211\u56fd\u9ad8\u7b49\u6559\u80b2\u81ea\u5b66\u8003\u8bd5\u7684\u4f18\u52bf\uff0c\u540c\u65f6\u5438\u6536\u897f\u65b9\u6709\u5173\u9886\u57df\u7684\u65b0\u77e5\u8bc6\u3001\u65b0\u65b9\u6cd5\uff0c\u4e3b\u8981\u57f9\u517b\u548c\u9020\u5c31\u9002\u5e94\u793e\u4f1a\u4e3b\u4e49\u5e02\u573a\u7ecf\u6d4e\u53d1\u5c55\u9700\u8981\u3001\u5fb7\u624d\u517c\u5907\uff0c\u5177\u6709\u4e00\u5b9a\u521b\u65b0\u610f\u8bc6\u3001\u521b\u65b0\u80fd\u529b\u548c\u5b9e\u9645\u5de5\u4f5c\u80fd\u529b\u7684\u91d1\u878d\u7ba1\u7406\u65b9\u9762\u5e94\u7528\u6027\u3001\u804c\u4e1a\u6027\u7684\u4e13\u4e1a\u4eba\u624d\u3002\n","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"text3","parentCompid":"text3","markColor":"","mode":0},"picture4":{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:234.375rpx;width:445.3125rpx;margin-left:auto;margin-right:auto;margin-top:11.71875rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58edb94c9d960.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"page_form":"","compId":"picture4","parentCompid":"picture4"},"text5":{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:30.46875rpx;height:44.53125rpx;width:703.125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:11.71875rpx;opacity:1;text-align:left;margin-right:auto;","content":"    \u91d1\u878d\u7ba1\u7406\u4e13\u4e1a\u662f\u5317\u4eac\u5e02\u9ad8\u7b49\u6559\u80b2\u81ea\u5b66\u8003\u8bd5\u300a\u91d1\u878d\u7ba1\u7406\u300b\u4e13\u4e1a\uff08\u4e13\u79d1\uff09\uff08\u672c\u79d1\uff09\u672c\u4e13\u4e1a\u7684\u8003\u8bd5\u8bfe\u7a0b\uff08\u6a21\u5757\uff09\u91c7\u7528\u5b66\u5206\u8ba1\u7b97\uff0c\u8bfe\u7a0b\u8003\u8bd5\u5408\u683c\u8005\u53d1\u7ed9\u8bfe\u7a0b\u5408\u683c\u8bc1\uff0c\u5176\u4e2d\u5408\u4f5c\u8bfe\u7a0b\u5408\u683c\u8bc1\u7531\u6559\u80b2\u90e8\u9ad8\u7b49\u6559\u80b2\u81ea\u5b66\u8003\u8bd5\u529e\u516c\u5ba4\u548c\u82f1\u56fd\u5251\u6865\u5927\u5b66\u8003\u8bd5\u59d4\u5458\u4f1a\uff08UCLES\uff09\u8054\u5408\u7b7e\u53d1\uff0c2004\u5e74\u8d77\u6240\u6709\u5408\u4f5c\u8bfe\u7a0b\u5408\u683c\u8bc1\u7531\u6559\u80b2\u90e8\u9ad8\u7b49\u6559\u80b2\u81ea\u5b66\u8003\u8bd5\u529e\u516c\u5ba4\u7b7e\u53d1\u3002\n    \u83b7\u5f97\u672c\u4e13\u4e1a8\u95e8\u5408\u4f5c\u8bfe\u7a0b\uff08\u4f01\u4e1a\u7ec4\u7ec7\u4e0e\u73af\u5883\u3001\u5546\u52a1\u4ea4\u6d41\u3001\u6570\u91cf\u65b9\u6cd5\u3001\u7ecf\u6d4e\u5b66\u3001\u4f1a\u8ba1\u5b66\u3001\u7ba1\u7406\u4fe1\u606f\u6280\u672f\u3001\u8d22\u52a1\u7ba1\u7406\u3001\u91d1\u878d\u6cd5\uff09\u5408\u683c\u8bc1\u548c\u82f1\u8bed\u8bfe\u7a0b\u5408\u683c\u8bc1\u7684\u8003\u751f\uff0c\u82f1\u56fd\u5251\u6865\u5927\u5b66\u8003\u8bd5\u59d4\u5458\u4f1a\uff08UCLES\uff09\u8d1f\u8d23\u9881\u53d1\u5251\u6865\u91d1\u878d\u7ba1\u7406\u8bc1\u4e66\u3002\n    \u83b7\u5f97\u672c\u4e13\u4e1a16\u95e8\u8bfe\u7a0b\u5408\u683c\u8bc1\uff0c\u601d\u60f3\u54c1\u5fb7\u7ecf\u9274\u5b9a\u7b26\u5408\u8981\u6c42\u7684\u8003\u751f\uff0c\u53d1\u7ed9\u9ad8\u7b49\u6559\u80b2\u81ea\u5b66\u8003\u8bd5\u4e13\u79d1\u6bd5\u4e1a\u8bc1\u4e66\uff0c\u540c\u65f6\uff0c\u7531\u82f1\u56fd\u5251\u6865\u5927\u5b66\u8003\u8bd5\u59d4\u5458\u4f1a\uff08UCLES\uff09\u6388\u4e88\u5251\u6865\u9ad8\u7ea7\u91d1\u878d\u7ba1\u7406\u8bc1\u4e66\u3002\n    \u4e2d\u56fd\u5728\u5546\u52a1\u9886\u57df\u4e2d\u6539\u9769\u4e5f\u8d8a\u6765\u8d8a\u9002\u5e94\u65f6\u4ee3\u7684\u6f6e\u6d41\uff0c\u56e0\u6b64\u5728\u6d89\u5916\u5546\u52a1\u9886\u57df\u3001\u8de8\u56fd\u516c\u53f8\u3001\u5916\u8d44\u4f01\u4e1a\u3001\u8fdb\u51fa\u53e3\u516c\u53f8\u3001\u5404\u7c7b\u4f01\u4e8b\u4e1a\u7b49\u5355\u4f4d\u7684\u7ba1\u7406\u90e8\u95e8\u5bf9\u91d1\u878d\u548c\u8d22\u52a1\u7ba1\u7406\u4eba\u624d\u7684\u8981\u6c42\u4e5f\u8d8a\u6765\u8d8a\u9ad8\u3002\u6b64\u7c7b\u4eba\u624d\u7f3a\u53e3\u8f83\u5927\uff0c\u85aa\u6c34\u53ef\u89c2\u3002\u5b66\u751f\u6bd5\u4e1a\u540e\u9002\u5408\u5728\u8de8\u56fd\u516c\u53f8\u3001\u5916\u8d44\u4f01\u4e1a\u3001\u8fdb\u51fa\u53e3\u516c\u53f8\u3001\u91d1\u878d\u673a\u6784\u3001\u4f01\u4e8b\u4e1a\u5355\u4f4d\u4ece\u4e8b\u91d1\u878d\u3001\u8d22\u52a1\u3001\u5ba1\u8ba1\u3001\u7ec4\u7ec7\u7ba1\u7406\u7b49\u76f8\u5173\u5de5\u4f5c\u3002\n","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"text5","parentCompid":"text5","markColor":"","mode":0},"bbs6":{"type":"bbs","style":"margin-top:0;margin-left:auto;","content":"","customFeature":{"mode":1,"ifBindPage":false,"ifLike":true},"animations":[],"page_form":"","compId":"bbs6","parentCompid":"bbs6"},"has_tabbar":0,"page_hidden":true,"page_form":"","top_nav":{"navigationBarTitleText":"\u91d1\u878d\u7ba1\u7406"}},
    need_login: false,
    page_router: 'I51PDje8pF_page10009',
    page_form: 'none',
      list_compids_params: [],
      user_center_compids_params: [],
      goods_compids_params: [],
  prevPage:0,
      tostoreComps: [],
      carouselGroupidsParams: [],
      relobj_auto: [{"obj_rel":"yYTTTyOtXl_view","auto_add_count":true,"compid":"count_ele2","parentcompid":null,"has_counted":0}],
      bbsCompIds: ["bbs6"],
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
