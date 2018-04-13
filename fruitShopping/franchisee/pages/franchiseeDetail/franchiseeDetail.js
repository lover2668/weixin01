
var app = getApp()

Page({
  data: {
    franchiseeId: '',
    franchiseeInfo: {},
    defaultPhoto: '',
    goodsList: [],
    appointmentList:[],
    tostoreList:[],
    has_goods_type: [],
    onBusiness: true
  },
  form: '',
  page: 1,
  onLoad: function(options){
    var franchiseeId = options.detail,
        that = this,
        defaultPhoto = app.getDefaultPhoto();
 
    this.setData({
      franchiseeId: franchiseeId,
      defaultPhoto: defaultPhoto
    })
    app.sendRequest({
      url: '/index.php?r=AppShop/GetAppShopByPage',
      data: {
        sub_shop_app_id: franchiseeId
      },
      success: function(res){

        var data = {},
            has_goods_type = res.data[0].has_goods_type;

        data.franchiseeInfo = res.data[0];
        data.franchiseeInfo.business_time_str = data.franchiseeInfo.business_time_str.replace(/\,/g , '\n');

        data.onBusiness = res.data[0].open_status == 0 ? false : true;
        if(has_goods_type.length){
          data.has_goods_type = has_goods_type;
          for (var i = 0; i < has_goods_type.length;i++){
           
            switch (+has_goods_type[i]) {
              case 0:
                that.getGoodsList('goods');
                break;
              case 1:
                that.getGoodsList('appointment');
                break;
              case 3:
                that.getGoodsList('tostore');
                break;
            }
          }
          
        }
        that.setData(data);
      }
    })
  },
  // onReachBottom: function(){
  //   if(this.data.has_goods_type.length){
  //     this.getGoodsList();
  //   }
  // },
  getGoodsList: function (form){
    var that = this;
    app.sendRequest({
      url: '/index.php?r=AppShop/getGoodsList',
      data: {
        sub_shop_app_id: this.data.franchiseeId,
        form: form,
        page: 1
      },
      success: function(res){
        var goodsList = res.data,
          data = {};
        if(form=='goods'){
          data.goodsList = that.data.goodsList.concat(goodsList.slice(0,2));
        } else if (form == 'appointment'){
          data.appointmentList = that.data.appointmentList.concat(goodsList.slice(0,2));
        } else if(form=='tostore'){
          data.tostoreList = that.data.tostoreList.concat(goodsList.slice(0, 2));
        }
        that.setData(data);
      }
    })
  },
  turnToGoodsMore:function(e){
    let form = e.currentTarget.dataset.form,
        typeData = e.currentTarget.dataset.type;
    app.turnToPage('/franchisee/pages/goodsMore/goodsMore?detail=' + form + '&franchisee=' + this.data.franchiseeId + '&type=' + typeData);
  },
  turnToGoodsDetail: function (e) {
    let id = e.currentTarget.dataset.id;
    let type = e.currentTarget.dataset.type;
    if (type == 3){
      app.turnToPage('/pages/toStoreDetail/toStoreDetail?detail=' + id + '&franchisee=' + this.data.franchiseeId);
    }else{
      let cart_num = this.data.franchiseeInfo.cart_goods_num || 0;
      app.turnToPage('/pages/goodsDetail/goodsDetail?detail=' + id + '&franchisee=' + this.data.franchiseeId + '&cart_num=' + cart_num);
    }
  },
  turnToCouponListDetail:function(){
    app.turnToPage('/eCommerce/pages/couponListPage/couponListPage?franchisee=' + this.data.franchiseeId);
  },
  franchiseeCoverOnload: function(e){
    var originalWidth = e.detail.width,
        originalHeight = e.detail.height;

    //获取图片的原始长宽
    var windowWidth = 0;
    var imageWidth = 0, imageHeight = 0;

    var res = app.getSystemInfoData();

    windowWidth = res.windowWidth;
    imageWidth = windowWidth;
    imageHeight = imageWidth * originalHeight / originalWidth;
    this.setData({
      franchiseeCoverWidth: imageWidth,
      franchiseeCoverHeight: imageHeight > imageWidth ? imageWidth : imageHeight
    })
  },
  makePhoneCall: function(e){
    var phone_num = e.currentTarget.dataset.phoneNum;
    app.makePhoneCall(phone_num);
  },
  clickFranchiseeAddress: function(e){
    var dataset = e.currentTarget.dataset,
        eventParams = '';

    app.openLocation({
      latitude: +dataset.lat,
      longitude: +dataset.lng,
      scale: 20
    })
  },

})
