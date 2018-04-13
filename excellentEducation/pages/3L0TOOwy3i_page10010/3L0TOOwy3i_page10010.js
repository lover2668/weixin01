var app      = getApp();

var pageData = {
  data: {"text1":{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:37.5rpx;font-weight:bold;height:44.53125rpx;width:703.125rpx;line-height:58.59375rpx;margin-left:auto;margin-top:11.71875rpx;opacity:1;text-align:left;margin-right:auto;","content":"\u73b0\u4ee3\u9879\u76ee\u7ba1\u7406\u5b66","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"text1","parentCompid":"text1","markColor":"","mode":0},"text2":{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:28.125rpx;height:44.53125rpx;width:703.125rpx;line-height:44.53125rpx;margin-left:auto;opacity:1;text-align:left;margin-right:auto;","content":"2016-05-23   2518 \u9605\u8bfb","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"text2","parentCompid":"text2","markColor":"","mode":0},"text3":{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:35.15625rpx;height:44.53125rpx;width:375rpx;line-height:44.53125rpx;margin-left:auto;opacity:1;text-align:left;margin-right:auto;","content":"\u7b2c\u4e00\u7ae0 \u9879\u76ee\u4e0e\u9879\u76ee\u7ba1\u7406","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"text3","parentCompid":"text3","markColor":"","mode":0},"text4":{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:32.8125rpx;height:44.53125rpx;width:703.125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:11.71875rpx;opacity:1;text-align:left;margin-right:auto;","content":"    \u7b2c\u4e00\u8282 \u73b0\u4ee3\u4e0e\u4f20\u7edf\u9879\u76ee\u7ba1\u7406 \u4e00\u3001\u73b0\u4ee3\u9879\u76ee\u7ba1\u7406\u9636\u6bb5  \u73b0\u4ee3\u9879\u76ee\u7ba1\u7406\u662f\u8fd1\u5e74\u6765\u53d1\u5c55\u8d77\u6765\u7684\u4e00\u4e2a\u7ba1\u7406\u5b66\u79d1\u7684\u65b0\u9886\u57df\uff0c\u5b83\u4e0e\u4f20\u7edf\u7684\u9879\u76ee\u7ba1\u7406\u5177\u6709\u5f88\u5927\u7684\u4e0d\u540c\uff0c\u800c\u4e14\u53d1\u5c55\u5341\u5206\u8fc5\u901f\u3002\u9879\u76ee\u7ba1\u7406\u7684\u53d1\u5c55\u57fa\u672c\u53ef\u4ee5\u5212\u5206\u4e3a\u4e24\u4e2a\u9636\u6bb5\uff1a 80\u5e74\u4ee3\u4e4b\u524d\u88ab\u79f0\u4e3a\u4f20\u7edf\u7684\u9879\u76ee\u7ba1\u7406\u9636\u6bb5\uff0c80\u5e74\u4ee3\u4e4b\u540e\u88ab\u79f0\u4e3a\u73b0\u4ee3\u9879\u76ee\u7ba1\u7406\u9636\u6bb5  \u4e8c\u3001\u9879\u76ee\u7ba1\u7406\u5feb\u901f\u53d1\u5c55\u7684\u539f\u56e0   1 \u4fe1\u606f\u793e\u4f1a\u548c\u77e5\u8bc6\u7ecf\u6d4e\u4e2d\u521b\u9020\u793e\u4f1a\u8d22\u5bcc\u548c\u798f\u5229\u7684\u9014\u5f84\u5df2\u7ecf\u9010\u6b65\u8f6c\u5411\u4e86\u4ee5\u9879\u76ee\u5f00 \u53d1\u548c\u9879\u76ee\u5b9e\u65bd\u6d3b\u52a8\u4e3a\u4e3b\u7684\u6a21\u5f0f\u3002  2 \u7ec4\u7ec7\u5de5\u4f5c\u548c\u7ecf\u8425\u73af\u5883\u53d1\u5c55\u53d8\u5316\u52a0\u5feb\uff0c\u51fa\u73b0\u4e86\u5927\u91cf\u7684\u4f8b\u5916\u60c5\u51b5\u9700\u8981\u5904\u7406\uff0c\u4f8b\u5916\u7ba1 \u7406\u9700\u8981\u91c7\u7528\u9879\u76ee\u7ba1\u7406\u7684\u65b9\u6cd5\u3002  3\u3001 \u5404\u79cd\u521b\u65b0\uff08\u6280\u672f\u3001\u7ec4\u7ec7\u548c\u5236\u5ea6\u7b49\uff09\u5de5\u4f5c\u6210\u4e86\u4eec\u5de5\u4f5c\u4e2d\u7684\u4e3b\u8981\u5185\u5bb9\uff0c\u521b\u65b0\u5de5\u4f5c \u90fd\u662f\u9879\u76ee\uff0c\u9700\u8981\u9879\u76ee\u7ba1\u7406\u3002 \u4e09\u3001\u73b0\u4ee3\u4e0e\u4f20\u7edf\u9879\u76ee\u7ba1\u7406\u7684\u6bd4\u8f83    \u2022 \u73b0\u4ee3\u9879\u76ee\u7ba1\u7406\u4e0e\u4f20\u7edf\u9879\u76ee\u7ba1\u7406\u7684\u6bd4\u8f83   ","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"text4","parentCompid":"text4","markColor":"","mode":0},"picture5":{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:421.875rpx;width:539.0625rpx;margin-left:auto;margin-right:auto;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_59364a9a9beff.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"page_form":"","compId":"picture5","parentCompid":"picture5"},"text6":{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:32.8125rpx;height:44.53125rpx;width:703.125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:11.71875rpx;opacity:1;text-align:left;margin-right:auto;","content":"   \u7b2c\u4e8c\u8282 \u9879\u76ee\u7684\u57fa\u672c\u6982\u5ff5  \u4e00\u3001\u9879\u76ee\u7684\u5b9a\u4e49\u4e0e\u6982\u5ff5  \u9879\u76ee\u53ef\u4ee5\u662f\u5efa\u9020\u4e00\u680b\u5927\u697c\uff0c\u5f00\u53d1\u4e00\u4e2a\u6cb9\u7530\uff0c\u6216\u8005\u5efa\u8bbe\u4e00\u5ea7\u6c34\u575d\uff0c\u50cf\u56fd\u5bb6\u5927\u5267\u9662\u7684\u5efa\u8bbe\u3001\u5927\u5e86\u6cb9\u7530\u7684\u5efa\u8bbe\u3001\u4e09\u5ce1\u5de5\u7a0b\u5efa\u8bbe\u90fd\u662f\u9879\u76ee\uff1b\u9879\u76ee\u4e5f\u53ef\u4ee5\u662f\u4e00\u9879\u65b0\u4ea7\u54c1\u7684\u5f00\u53d1\uff0c\u4e00\u9879\u79d1\u7814\u8bfe\u9898\u7684\u7814\u7a76\uff0c\u6216\u8005\u4e00\u9879\u79d1\u5b66\u8bd5\u9a8c\uff0c\u50cf\u8c03\u9891\u7a7a\u8c03\u7684\u7814\u5236\u3001\u827e\u6ecb\u75c5\u65b0\u836f\u7684\u7814\u7a76\u3001\u8f6c\u57fa\u56e0\u4f5c\u7269\u7684\u5b9e\u9a8c\u7814\u7a76\u90fd\u662f\u9879\u76ee\uff1b\u9879\u76ee\u8fd8\u53ef\u4ee5\u662f\u4e00\u9879\u7279\u5b9a\u7684\u670d\u52a1\uff0c\u4e00\u9879\u7279\u522b\u7684\u6d3b\u52a8\uff0c\u6216\u4e00\u9879\u7279\u6b8a\u7684\u5de5\u4f5c\uff0c\u50cf\u7ec4\u7ec7\u4e00\u573a\u5a5a\u793c\u3001\u5b89\u6392\u4e00\u9879\u6551\u707e\u4e49\u6f14\u3001\u5f00\u5c55\u4e00\u9879\u7f09\u6bd2\u6d3b\u52a8\u7b49\u4e5f\u90fd\u662f\u9879\u76ee\u3002\u5bf9\u4e8e\u9879\u76ee\u7684\u5b9a\u4e49\uff0c\u4eba\u4eec\u4ece\u4e0d\u540c\u7684\u89d2\u5ea6\u7ed9\u51fa\u4e86\u8bb8\u591a\u4e0d\u540c \u7684\u5b9a\u4e49\uff0c\u5176\u4e2d\u6709\u4ee3\u8868\u6027\u7684\u6709\u5982\u4e0b\u51e0\u79cd\uff1a 1\uff0e \u7f8e\u56fd\u9879\u76ee\u7ba1\u7406\u534f\u4f1a\uff08PMI\uff09\u7684\u5b9a\u4e49  \u9879\u76ee\u662f\u4e3a\u521b\u9020\u7279\u5b9a\u4ea7\u54c1\u6216\u670d\u52a1\u7684\u4e00\u9879\u6709\u65f6\u9650\u7684\u4efb\u52a1\u3002\u5176\u4e2d\uff1a\u2017\u65f6\u9650\u2018\u662f\u6307\u6bcf\u4e00\u4e2a\u9879\u76ee\u90fd\u6709\u660e\u786e\u7684\u8d77\u70b9\u548c\u7ec8\u70b9\uff1b\u2017\u7279\u5b9a\u2018\u662f\u6307\u4e00\u4e2a\u9879\u76ee\u6240\u5f62\u6210\u7684\u4ea7\u54c1\u6216\u670d\u52a1\u5728\u5173\u952e\u7279\u6027 \u4e0a\u4e0d\u540c\u4e8e\u5176\u4ed6\u7684\u4ea7\u54c1\u548c\u670d\u52a1\u3002  2\uff0e \u82f1\u56fd\u9879\u76ee\u7ba1\u7406\u534f\u4f1a\uff08APM\uff09\u7684\u5b9a\u4e49\n    ","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"text6","parentCompid":"text6","markColor":"","mode":0},"bbs7":{"type":"bbs","style":"margin-top:11.71875rpx;background-color:#fff;margin-left:auto;","content":"","customFeature":{"mode":1,"ifBindPage":false,"ifLike":true,"themeColor":"#333"},"animations":[],"page_form":"","compId":"bbs7","parentCompid":"bbs7"},"has_tabbar":0,"page_hidden":true,"page_form":"","top_nav":{"navigationBarTitleText":"\u65b0\u9875\u9762"}},
    need_login: false,
    page_router: '3L0TOOwy3i_page10010',
    page_form: 'none',
      list_compids_params: [],
      user_center_compids_params: [],
      goods_compids_params: [],
  prevPage:0,
      tostoreComps: [],
      carouselGroupidsParams: [],
      relobj_auto: [],
      bbsCompIds: ["bbs7"],
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
