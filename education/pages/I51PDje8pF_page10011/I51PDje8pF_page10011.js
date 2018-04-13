var app      = getApp();

var pageData = {
  data: {"text1":{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:35.15625rpx;font-weight:bold;height:44.53125rpx;width:70.3125rpx;line-height:70.3125rpx;margin-left:auto;margin-top:23.4375rpx;opacity:1;text-align:left;margin-right:auto;","content":"\u53f2\u8bb0","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"text1","parentCompid":"text1","markColor":"","mode":0},"count_ele2":{"type":"count-ele","style":"margin-left:539.0625rpx;margin-top:-23.4375rpx;margin-right:auto;color:rgb(102, 102, 102);font-size:28.125rpx;opacity:1;height:53.90625rpx;width:750rpx;","content":"\u6d4f\u89c8","customFeature":{"ifAutoCount":true,"ifBindPage":false,"icon":"view-icon","size":"23px"},"animations":[],"page_form":"","compId":"count_ele2","icon":"view-icon","icon_size":"23px","ifAutoCount":true,"objrel":"yYTTTyOtXl_view"},"text3":{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:30.46875rpx;height:44.53125rpx;width:703.125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:18.75rpx;opacity:1;text-align:left;margin-right:auto;","content":"   \u300a\u53f2\u8bb0\u300b\u662f\u897f\u6c49\u8457\u540d\u53f2\u5b66\u5bb6\u53f8\u9a6c\u8fc1\u64b0\u5199\u7684\u4e00\u90e8\u7eaa\u4f20\u4f53\u53f2\u4e66\uff0c\u662f\u4e2d\u56fd\u5386\u53f2\u4e0a\u7b2c\u4e00\u90e8\u7eaa\u4f20\u4f53\u901a\u53f2\uff0c\u88ab\u5217\u4e3a\u201c\u4e8c\u5341\u56db\u53f2\u201d\u4e4b\u9996\uff0c\u8bb0\u8f7d\u4e86\u4e0a\u81f3\u4e0a\u53e4\u4f20\u8bf4\u4e2d\u7684\u9ec4\u5e1d\u65f6\u4ee3\uff0c\u4e0b\u81f3\u6c49\u6b66\u5e1d\u592a\u521d\u56db\u5e74\u95f4\u51713000\u591a\u5e74\u7684\u5386\u53f2\u3002\u4e0e\u540e\u6765\u7684\u300a\u6c49\u4e66\u300b\u300a\u540e\u6c49\u4e66\u300b\u300a\u4e09\u56fd\u5fd7\u300b\u5408\u79f0\u201c\u524d\u56db\u53f2\u201d\u3002\n   \u300a\u53f2\u8bb0\u300b\u5168\u4e66\u5305\u62ec\u5341\u4e8c\u672c\u7eaa\uff08\u8bb0\u5386\u4ee3\u5e1d\u738b\u653f\u7ee9\uff09\u3001\u4e09\u5341\u4e16\u5bb6\uff08\u8bb0\u8bf8\u4faf\u56fd\u548c\u6c49\u4ee3\u8bf8\u4faf\u3001\u52cb\u8d35\u5174\u4ea1\uff09\u3001\u4e03\u5341\u5217\u4f20\uff08\u8bb0\u91cd\u8981\u4eba\u7269\u7684\u8a00\u884c\u4e8b\u8ff9\uff0c\u4e3b\u8981\u53d9\u4eba\u81e3\uff0c\u5176\u4e2d\u6700\u540e\u4e00\u7bc7\u4e3a\u81ea\u5e8f\uff09\u3001\u5341\u8868\uff08\u5927\u4e8b\u5e74\u8868\uff09\u3001\u516b\u4e66\uff08\u8bb0\u5404\u79cd\u5178\u7ae0\u5236\u5ea6\u8bb0\u793c\u3001\u4e50\u3001\u97f3\u5f8b\u3001\u5386\u6cd5\u3001\u5929\u6587\u3001\u5c01\u7985\u3001\u6c34\u5229\u3001\u8d22\u7528\uff09\uff0c\u5171\u4e00\u767e\u4e09\u5341\u7bc7\uff0c\u4e94\u5341\u4e8c\u4e07\u516d\u5343\u4e94\u767e\u4f59\u5b57\u3002\n   \u300a\u53f2\u8bb0\u300b\u5bf9\u540e\u4e16\u53f2\u5b66\u548c\u6587\u5b66\u7684\u53d1\u5c55\u90fd\u4ea7\u751f\u4e86\u6df1\u8fdc\u5f71\u54cd\u3002\u5176\u9996\u521b\u7684\u7eaa\u4f20\u4f53\u7f16\u53f2\u65b9\u6cd5\u4e3a\u540e\u6765\u5386\u4ee3\u201c\u6b63\u53f2\u201d\u6240\u4f20\u627f\u3002\u300a\u53f2\u8bb0\u300b\u8fd8\u88ab\u8ba4\u4e3a\u662f\u4e00\u90e8\u4f18\u79c0\u7684\u6587\u5b66\u8457\u4f5c\uff0c\u5728\u4e2d\u56fd\u6587\u5b66\u53f2\u4e0a\u6709\u91cd\u8981\u5730\u4f4d\uff0c\u88ab\u9c81\u8fc5\u8a89\u4e3a\u201c\u53f2\u5bb6\u4e4b\u7edd\u5531\uff0c\u65e0\u97f5\u4e4b\u300a\u79bb\u9a9a\u300b\u201d\uff0c\u6709\u5f88\u9ad8\u7684\u6587\u5b66\u4ef7\u503c\u3002\u5218\u5411\u7b49\u4eba\u8ba4\u4e3a\u6b64\u4e66\u201c\u5584\u5e8f\u4e8b\u7406\uff0c\u8fa9\u800c\u4e0d\u534e\uff0c\u8d28\u800c\u4e0d\u4fda\u201d\u3002\n   \u300a\u53f2\u8bb0\u300b\u6700\u521d\u6ca1\u6709\u56fa\u5b9a\u4e66\u540d\uff0c\u79f0\u201c\u592a\u53f2\u516c\u4e66\u201d\uff0c\u6216\u201c\u592a\u53f2\u516c\u8bb0\u201d\uff0c\u4e5f\u7701\u79f0\u201c\u592a\u53f2\u516c\u201d\u3002\u636e\u73b0\u77e5\u6750\u6599\u8003\u8bc1\uff0c\u6700\u65e9\u79f0\u53f8\u9a6c\u8fc1\u8fd9\u90e8\u53f2\u8457\u4e3a\u300a\u53f2\u8bb0\u300b\u7684\uff0c\u662f\u4e1c\u6c49\u6853\u5e1d\u65f6\u5199\u7684\u300a\u4e1c\u6d77\u5e99\u7891\u300b\uff0c\u6b64\u524d\u201c\u53f2\u8bb0\u201d\u662f\u53e4\u4ee3\u53f2\u4e66\u7684\u901a\u79f0\u3002\u4ece\u4e09\u56fd\u5f00\u59cb\uff0c\u201c\u53f2\u8bb0\u201d\u7531\u901a\u79f0\u9010\u6e10\u6210\u4e3a\u201c\u592a\u53f2\u516c\u4e66\u201d\u7684\u4e13\u540d\u3002\n\n\u521b\u4f5c\u80cc\u666f\n   \u4e1c\u5468\u65f6\u671f\u738b\u9053\u5e9f\u5f1b\uff0c\u79e6\u671d\u6bc1\u5f03\u53e4\u4ee3\u6587\u5316\u5178\u7c4d\uff0c\u4ee5\u81f4\u660e\u5802\u3001\u77f3\u5ba4\u7684\u73cd\u8d35\u56fe\u4e66\u5178\u7c4d\u6563\u5931\u9519\u4e71\u3002\u6c49\u671d\u5efa\u7acb\u540e\uff0c\u8427\u4f55\u4fee\u8ba2\u6cd5\u5f8b\uff0c\u97e9\u4fe1\u7533\u660e\u519b\u6cd5\uff0c\u5f20\u82cd\u5236\u7acb\u7ae0\u7a0b\uff0c\u53d4\u5b59\u901a\u786e\u5b9a\u793c\u4eea\uff0c\u54c1\u5b66\u517c\u4f18\u7684\u6587\u5b66\u4e4b\u58eb\u9010\u6e10\u8fdb\u7528\uff0c\u300a\u8bd7\u300b\u300a\u4e66\u300b\u7b49\u88ab\u6bc1\u5f03\u7684\u53e4\u4e66\u4ea6\u4e0d\u65ad\u5728\u5404\u5730\u88ab\u7231\u597d\u6587\u5b66\u7684\u4eba\u58eb\u641c\u5bfb\u5e76\u732e\u51fa\u3002\n\n \u53d6\u6750\n   \u300a\u53f2\u8bb0\u300b\u53d6\u6750\u76f8\u5f53\u5e7f\u6cdb\u3002\u5f53\u65f6\u793e\u4f1a\u4e0a\u6d41\u4f20\u7684\u300a\u4e16\u672c\u300b\u3001\u300a\u56fd\u8bed\u300b\u3001\u300a\u79e6\u8bb0\u300b\u3001\u300a\u695a\u6c49\u6625\u79cb\u300b\u3001\u8bf8\u5b50\u767e\u5bb6\u7b49\u8457\u4f5c\u548c\u56fd\u5bb6\u7684\u6587\u4e66\u6863\u6848\uff0c\u4ee5\u53ca\u5b9e\u5730\u8c03\u67e5\u83b7\u53d6\u7684\u6750\u6599\uff0c\u90fd\u662f\u53f8\u9a6c\u8fc1\u5199\u4f5c\u300a\u53f2\u8bb0\u300b\u7684\u91cd\u8981\u6750\u6599\u6765\u6e90\u3002\u7279\u522b\u53ef\u8d35\u7684\u662f\uff0c\u53f8\u9a6c\u8fc1\u5bf9\u641c\u96c6\u7684\u6750\u6599\u505a\u4e86\u8ba4\u771f\u7684\u5206\u6790\u548c\u9009\u62e9\uff0c\u6dd8\u6c70\u4e86\u4e00\u4e9b\u65e0\u7a3d\u4e4b\u8c08\uff0c\u5982\u4e0d\u5217\u6ca1\u6709\u5b9e\u636e\u7684\u4e09\u7687\uff0c\u4ee5\u4e94\u5e1d\u4f5c\u4e3a\u672c\u7eaa\u5f00\u7bc7\uff0c\u5bf9\u4e00\u4e9b\u4e0d\u80fd\u5f04\u6e05\u695a\u7684\u95ee\u9898\uff0c\u6216\u8005\u91c7\u7528\u9619\u7591\u7684\u6001\u5ea6\uff0c\u6216\u8005\u8bb0\u8f7d\u5404\u79cd\u4e0d\u540c\u7684\u8bf4\u6cd5\u3002\u7531\u4e8e\u53d6\u6750\u5e7f\u6cdb\uff0c\u4fee\u53f2\u6001\u5ea6\u4e25\u8083\u8ba4\u771f\uff0c\u6240\u4ee5\uff0c\u300a\u53f2\u8bb0\u300b\u8bb0\u4e8b\u7fd4\u5b9e\uff0c\u5185\u5bb9\u4e30\u5bcc\u3002\n","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"text3","parentCompid":"text3","markColor":"","mode":0},"bbs4":{"type":"bbs","style":"margin-top:0;margin-left:auto;","content":"","customFeature":{"mode":1,"ifBindPage":false,"ifLike":true},"animations":[],"page_form":"","compId":"bbs4","parentCompid":"bbs4"},"has_tabbar":0,"page_hidden":true,"page_form":"","top_nav":{"navigationBarTitleText":"\u4e09\u56fd\u6f14\u4e49"}},
    need_login: false,
    page_router: 'I51PDje8pF_page10011',
    page_form: 'none',
      list_compids_params: [],
      user_center_compids_params: [],
      goods_compids_params: [],
  prevPage:0,
      tostoreComps: [],
      carouselGroupidsParams: [],
      relobj_auto: [{"obj_rel":"yYTTTyOtXl_view","auto_add_count":true,"compid":"count_ele2","parentcompid":null,"has_counted":0}],
      bbsCompIds: ["bbs4"],
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
