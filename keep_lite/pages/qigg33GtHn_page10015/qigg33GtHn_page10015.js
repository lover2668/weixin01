var app      = getApp();

var pageData = {
  data: {"picture1":{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:375rpx;width:750rpx;margin-left:auto;margin-right:auto;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_59549aa76e63e.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","segment":"xlkcwzfm","ifMust":false},"animations":[],"page_form":"","compId":"picture1","parentCompid":"picture1"},"static_vessel2":{"type":"static-vessel","style":"background-color:rgb(255, 255, 255);margin-left:0;margin-top:0;opacity:1;","content":[{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:30.46875rpx;height:44.53125rpx;width:679.6875rpx;line-height:44.53125rpx;margin-left:35.15625rpx;margin-top:0;opacity:1;text-align:left;","content":"\u8bad\u7ec3\u8bf4\u660e","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[0]","parentCompid":"static_vessel2","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:44.53125rpx;width:679.6875rpx;line-height:44.53125rpx;margin-left:35.15625rpx;margin-top:23.4375rpx;opacity:1;text-align:left;","content":"High-intensity Interval Training (HIIT)\u9ad8\u5f3a\u5ea6\u95f4\u6b47\u8bad\u7ec3\u6cd5,\u7b80\u79f0HIIT,\u8fd9\u79cd\u7279\u6b8a\u7684\u8bad\u7ec3\u65b9\u6cd5\u95ee\u4e16\u4ee5\u6765\u98ce\u9761\u6b27\u7f8e\u5927\u9646,\u77ed\u65f6\u95f4\u9ad8\u8d28\u91cf\u7684\u8102\u80aa\u548c\u5361\u8def\u91cc\u71c3\u70e7\u975e\u5e38\u9002\u5408\u73b0\u4ee3\u4eba\u7684\u751f\u6d3b\u65b9\u5f0f\uff0c\u6211\u4eec\u542c\u5230\u9ad8\u5f3a\u5ea6\u95f4\u6b47\u8bad\u7ec3\uff08HIIT\uff09\u7684\u597d\u5904\uff0c\u90fd\u662f\u6709\u6548\u71c3\u8102\u3002","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","segment":"xlsm","ifMust":false},"animations":[],"compId":"data.content[1]","parentCompid":"static_vessel2","markColor":"","mode":0}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"static_vessel2"},"free_vessel3":{"type":"free-vessel","style":"width:750rpx;height:23.4375rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;opacity:1;margin-left:auto;","content":[],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel3"},"static_vessel4":{"type":"static-vessel","style":"background-color:rgb(255, 255, 255);margin-left:0;margin-top:11.71875rpx;opacity:1;","content":[{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:30.46875rpx;height:44.53125rpx;width:679.6875rpx;line-height:44.53125rpx;margin-left:35.15625rpx;margin-top:0;opacity:1;text-align:left;","content":"\u8bfe\u7a0b\u5185\u5bb9","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[0]","parentCompid":"static_vessel4","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:44.53125rpx;width:679.6875rpx;line-height:44.53125rpx;margin-left:35.15625rpx;margin-top:23.4375rpx;opacity:1;text-align:left;","content":"\u901a\u8fc7\u591a\u7ec4\u9ad8\u5f3a\u5ea6\u7684\u7206\u53d1\u671f\u548c\u4f4e\u5f3a\u5ea6\u7684\u6062\u590d\u671f\u7684\u7ec4\u5408\u8bad\u7ec3\uff0c\u4f7f\u4f60\u7684\u6709\u6c27\u548c\u65e0\u6c27\u7cfb\u7edf\u540c\u65f6\u8fdb\u884c\u8fd0\u8f6c\uff0c\u4ece\u800c\u540c\u65f6\u53d6\u5f97\u6709\u6c27\u548c\u65e0\u6c27\u7684\u8bad\u7ec3\u6548\u679c\u3002\u7528\u95f4\u6b47\u8bad\u7ec3\u6cd5\u5728\u4e09\u5341\u5206\u949f\u5185\uff0c\u4f60\u5c31\u80fd\u786e\u5b9e\u7684\u5f97\u5230\u5b8c\u5168\u8bad\u7ec3\u76ee\u7684\u3002\n\u4ece\u4f60\u89c9\u5f97\u5408\u9002\u7684\u4efb\u610f\u4e00\u5929\u5f00\u59cb\uff0c\u6301\u7eed\u81f3\u5c115\u5206\u949f\u5185\uff0c\u4fdd\u6301\u8f7b\u677e\u7684\u6b65\u8c03\u5e76\u9010\u6e10\u5f97\u589e\u52a0\u4f60\u7684\u5fc3\u7387\u3002\u53ef\u4ee5\u901a\u8fc7\u6570\u8109\u640f15\u79d2\uff0c\u7136\u540e\u628a\u6570\u51fa\u6765\u7684\u8109\u640f\u6570\u4e58\u4ee54\u6765\u8ba1\u7b97\uff0c\u6216\u8005\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5176\u4ed6\u7684\u5fc3\u8df3\u68c0\u6d4b\u6765\u5f97\u77e5\u5fc3\u7387\u3002\u5f53\u70ed\u8eab\u6bd4\u8f83\u5145\u5206\u4e86\uff0c\u5c31\u53ef\u4ee5\u5f00\u59cb\u9ad8\u5f3a\u5ea6\u7206\u53d1\u671f\u8bad\u7ec3\u7684\u4e86\u3002\u5982\u679c\u4f60\u5728\u8dd1\u53f0\u4e0a\uff0c\u9a6c\u4e0a\u6539\u53d8\u4e3a\u201c\u6162\u8dd1\u201d\u6216\u8005\u201c\u51b2\u523a\u201d\u7684\u901f\u5ea6\u3002","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","segment":"kcnr","ifMust":false},"animations":[],"compId":"data.content[1]","parentCompid":"static_vessel4","markColor":"","mode":0}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"static_vessel4"},"free_vessel5":{"type":"free-vessel","style":"width:750rpx;height:23.4375rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;opacity:1;margin-left:auto;","content":[],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel5"},"static_vessel6":{"type":"static-vessel","style":"background-color:rgb(255, 255, 255);margin-left:0;margin-top:11.71875rpx;opacity:1;","content":[{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:30.46875rpx;height:44.53125rpx;width:679.6875rpx;line-height:44.53125rpx;margin-left:35.15625rpx;margin-top:0;opacity:1;text-align:left;","content":"\u9002\u7528\u4eba\u7fa4","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[0]","parentCompid":"static_vessel6","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:44.53125rpx;width:679.6875rpx;line-height:44.53125rpx;margin-left:35.15625rpx;margin-top:23.4375rpx;opacity:1;text-align:left;","content":"\u96f6\u57fa\u7840\u7684\u5065\u8eab\u521d\u5b66\u8005\n\u8179\u90e8\u529b\u91cf\u8f83\u5f31\u7684\u8bad\u7ec3\u8005","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","segment":"syrq","ifMust":false},"animations":[],"compId":"data.content[1]","parentCompid":"static_vessel6","markColor":"","mode":0}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"static_vessel6"},"free_vessel7":{"type":"free-vessel","style":"width:750rpx;height:23.4375rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;opacity:1;margin-left:auto;","content":[],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel7"},"static_vessel8":{"type":"static-vessel","style":"background-color:rgb(255, 255, 255);margin-left:0;margin-top:11.71875rpx;opacity:1;","content":[{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:30.46875rpx;height:44.53125rpx;width:679.6875rpx;line-height:44.53125rpx;margin-left:35.15625rpx;margin-top:0;opacity:1;text-align:left;","content":"\u7981\u5fcc\u4eba\u7fa4","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[0]","parentCompid":"static_vessel8","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:44.53125rpx;width:679.6875rpx;line-height:44.53125rpx;margin-left:35.15625rpx;margin-top:23.4375rpx;opacity:1;text-align:left;","content":"\u8001\u5e74\u4eba\uff08\u5e74\u9f84\u5927\u4e8e65\u5c81\uff09\uff0c\u5b55\u5987\uff0c\u6b8b\u75be\u4eba\n\u60a3\u6709\u9aa8\u79d1\u4f24\u75c5\u4e14\u5c1a\u672a\u75ca\u6108\u7684\u4eba\u7fa4\n\u53ca\u5176\u4ed6\u533b\u5631\u5efa\u8bae\u4e0d\u9002\u5408\u8fd0\u52a8\u7684\u4eba\u7fa4   ","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","segment":"jjrq","ifMust":false},"animations":[],"compId":"data.content[1]","parentCompid":"static_vessel8","markColor":"","mode":0}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"static_vessel8"},"free_vessel9":{"type":"free-vessel","style":"width:750rpx;height:23.4375rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;opacity:1;margin-left:auto;","content":[],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel9"},"static_vessel10":{"type":"static-vessel","style":"background-color:rgb(255, 255, 255);margin-left:0;margin-top:11.71875rpx;opacity:1;","content":[{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:30.46875rpx;height:44.53125rpx;width:679.6875rpx;line-height:44.53125rpx;margin-left:35.15625rpx;margin-top:0;opacity:1;text-align:left;","content":"\u8bfe\u7a0b\u5efa\u8bae","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[0]","parentCompid":"static_vessel10","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:44.53125rpx;width:679.6875rpx;line-height:44.53125rpx;margin-left:35.15625rpx;margin-top:23.4375rpx;opacity:1;text-align:left;","content":"\u5efa\u8bae\u521d\u5b66\u8005\u6bcf\u5929\u7ec3\u4e60\uff0c\u4fdd\u6301\u4e24\u5468\n\u6bcf\u4e00\u4e2a\u52a8\u4f5c\u90fd\u8981\u4fdd\u6301\u6536\u8179\u72b6\u6001\uff0c\u8ba9\u8179\u808c\u6301\u7eed\u53d1\u529b\n\u771f\u7a7a\u8179\u8bad\u7ec3\u53ef\u4ee5\u6709\u6548\u7f29\u5c0f\u8170\u56f4\uff0c\u9700\u8981\u91cd\u70b9\u8bad\u7ec3    ","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","segment":"kcjy","ifMust":false},"animations":[],"compId":"data.content[1]","parentCompid":"static_vessel10","markColor":"","mode":0},{"type":"free-vessel","style":"width:750rpx;height:23.4375rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;opacity:1;margin-left:auto;","content":[],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"parentCompid":"static_vessel10","compId":"data.content[2]"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"static_vessel10"},"static_vessel11":{"type":"static-vessel","style":"background-color:rgb(255, 255, 255);margin-left:0;margin-top:11.71875rpx;opacity:1;","content":[{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:30.46875rpx;height:44.53125rpx;width:679.6875rpx;line-height:44.53125rpx;margin-left:35.15625rpx;margin-top:0;opacity:1;text-align:left;","content":"\u8bfe\u7a0b\u53cd\u9988","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[0]","parentCompid":"static_vessel11","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:44.53125rpx;width:679.6875rpx;line-height:44.53125rpx;margin-left:35.15625rpx;margin-top:23.4375rpx;opacity:1;text-align:left;","content":"\u5982\u679c\u60a8\u5bf9\u8bfe\u7a0b\u6709\u4efb\u4f55\u95ee\u9898\uff0c\u53ef\u53ca\u65f6\u8054\u7cfb\u5de5\u4f5c\u4eba\u5458","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","segment":"kcfk","ifMust":false},"animations":[],"compId":"data.content[1]","parentCompid":"static_vessel11","markColor":"","mode":0}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"static_vessel11"},"free_vessel12":{"type":"free-vessel","style":"width:750rpx;height:70.3125rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;opacity:1;margin-left:auto;","content":[],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel12"},"has_tabbar":0,"page_hidden":true,"page_form":"","top_nav":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationBarTitleText":"\u8bad\u7ec3\u8bfe\u7a0b"}},
    need_login: false,
    page_router: 'qigg33GtHn_page10015',
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
