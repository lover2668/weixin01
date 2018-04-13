
var app = getApp()

Page({
  data: {
    orderData: {},
    orderInfo: {},
    orderStatus: { '0':'待付款', '1':'待发货', '2':'待收货', '3':'待评价', '4':'退款审核中', '5':'退款中', '6':'已完成', '7':'已关闭'},
    selectAddressId: '',
    goodsAdditionalInfo: {},
    hasAdditionalInfo: false,
    customFields: [],
    orderId: '',
    isFromTemplateMsg: false,
    originalPrice: '',
    useBalance: '',
    freightAdress:{},
    express_fee:'',
    discount_cut_price: '',
    isFromBack: false,
  },
  onLoad: function (options) {
    this.setData({
      orderId: options.detail,
      isFromTemplateMsg: options.from === 'template_msg' ? true : false,
      franchiseeId: options.franchisee || ''
    })
    this.dataInitial();

   
  },
  onShow:function(){
    if (this.data.isFromBack){
      this.dataInitial();
    }else{
      this.setData({
        isFromBack: true
      });
    }
  },
  canvas: function () {
    // canvas绘图
    var ctx = wx.createCanvasContext('canvasArcCir');
    // 使用线性渐变
    var gradient = ctx.createLinearGradient(0, 40, 0, 150);
    gradient.addColorStop("0", "#FF5900");
    gradient.addColorStop("0.5", "#FFA156");
    gradient.addColorStop("1", "#FF8838");
    // 画圆角进度圆环
    var x = 80, y = 80, radius = 70;
    var nes = 0.8;//  this.data.circle;
    var b = 3
    var a = b > 2 ? (b - 2) : b;
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, 55, 0, 2 * Math.PI);
    ctx.clip();
    ctx.drawImage('http://img.weiye.me/tmp_file/df5be6203a516ea94b792b357551fbe81.png', 15, 15, 130, 130);
    ctx.restore()
    ctx.setLineWidth(12);
    ctx.setStrokeStyle(gradient);
    ctx.setLineCap('round');
    ctx.beginPath();
    ctx.arc(x, y, radius, 1.5 * Math.PI, 3.6 * Math.PI, true);
    ctx.stroke();

    ctx.draw();
  },
  //砸金蛋
  getGoldenData: function (id) {
    let that = this;
    app.sendRequest({
      url: "/index.php?r=appLotteryActivity/getTimeAfterConsume",
      method: "post",
      data: {
        app_id: app.globalData.appId,
        order_id: id
      },
      success: function (data) {
        if (data.integral) {
          that.setData({
            'rewardPointObj': {
              showModal: true,
              count: data.integral,
              callback: ''
            }
          })
        }
      }
    })
  },
  makePhoneCall:function(e){
    var phone = e.currentTarget.dataset.phone;
    app.makePhoneCall(phone);
  },
  // 每个页面数据初始化函数 dataInitial
  dataInitial: function () {
    this.getOrderDetail(this.data.orderId);
    this.initialAddressId();
  },
  getOrderDetail: function (orderId) {
    var that = this;
    app.getOrderDetail({
      data: {
        order_id: orderId,
        sub_shop_app_id: this.data.franchiseeId
      },
      success: function (res) {
        var data = res.data[0],
            form_data = data.form_data,
            hasAdditionalInfo = false,
            additional_info_goods = [],
            additional_goodsid_arr = [],
            address_id = '';
          if (form_data.status!=0){
              that.getGoldenData(orderId);
            }
        for (var i = 0; i < form_data.goods_info.length; i++) {
          var deliveryId = form_data.goods_info[i].delivery_id,
              goodsId = form_data.goods_info[i].id;

          if (deliveryId && deliveryId != '0' && additional_goodsid_arr.indexOf(goodsId) == -1) {
            additional_info_goods.push(form_data.goods_info[i]);
            additional_goodsid_arr.push(goodsId);
            hasAdditionalInfo = true;
          }
        }
        let time, estimateTime;
        if (data.form_data.take_out_info.accept_time){
           time = +data.form_data.take_out_info.accept_time * 1000 + (+data.take_out_info.deliver_time * 60000),
            estimateTime = new Date(time).toISOString().split('T')[0] + ' ' + new Date(time).toTimeString().split(' ')[0]
        }
        that.setData({
          orderData: data,
          orderInfo: form_data,
          estimateTime: estimateTime,
          hasAdditionalInfo: hasAdditionalInfo,
          discount_cut_price: form_data.discount_cut_price,
          useBalance: Number(form_data['use_balance']),
          express_fee: res.data[0]['express_fee']
        });
        app.setPreviewGoodsInfo(additional_info_goods);

        if(form_data.is_self_delivery == 1){
        // 自提
          that.getFreigtAdress();
        } else {
        // 快递
          address_id = form_data.address_info.address_id;
          that.setData({
            selectAddressId: address_id,
          })
        }

        app.setGoodsAdditionalInfo(form_data.additional_info || {});
      }
    })
  },
  makeComment:function(e){
    var orderId = this.data.orderId,
        franchiseeId = this.data.franchiseeId,
        queryStr = franchiseeId === app.getAppId() ? '' : '&franchisee=' + franchiseeId;
    app.turnToPage('/orderMeal/pages/takeoutMakeComment/takeoutMakeComment?detail=' + orderId + queryStr);
  },
  orderDelete: function (e) {
    var orderId = this.data.orderId,
    that = this,
      franchiseeId = this.data.franchiseeId;
    app.showModal({
      content: '订单删除后不可找回，确认删除？',
      showCancel: true,
      cancelText: '取消',
      confirmText: '确定',
      confirm: function () {
        app.sendRequest({
          url: '/index.php?r=AppShop/HideOrder',
          data: {
            order_id: orderId,
            sub_shop_app_id: franchiseeId
          },
          success: function (res) {
            app.turnBack()
          }
        })
      }
    })
  },
  cancelOrder: function (e) {
    var orderId = this.data.orderInfo.order_id,
        that = this;

    app.showModal({
      content: '是否取消订单？',
      showCancel: true,
      confirmText: '是',
      cancelText: '否',
      confirm: function () {
        app.sendRequest({
          url: '/index.php?r=AppShop/cancelOrder',
          data: {
            order_id: orderId,
            sub_shop_app_id: that.data.franchiseeId
          },
          success: function (res) {
            var data = {};

            data['orderInfo.status'] = 7;
            that.setData(data);
          }
        })
      }
    })
  },
  payOrder: function (e) {
    var address_info = this.data.orderInfo.address_info,
        that = this,
        orderId;

    if (!address_info && this.data.orderInfo.goods_type != 3) {
      app.showModal({
        content: '请选择邮寄地址'
      })
      return;
    }

    orderId = this.data.orderInfo.order_id;

    if (this.data.orderInfo.total_price == 0) {
      app.sendRequest({
        url: '/index.php?r=AppShop/paygoods',
        data: {
          order_id: orderId,
          total_price: 0
        },
        success: function(res){
          setTimeout(function(){
            app.showToast({
              title: '支付成功',
              icon: 'success'
            });
          });
          setTimeout(function(){
            that.getOrderDetail(that.data.orderInfo.order_id);
          }, 1000);
        }
      });
      return;
    }

    app.sendRequest({
      url: '/index.php?r=AppShop/GetWxWebappPaymentCode',
      data: {
        order_id: orderId
      },
      success: function (res) {
        var param = res.data,
            orderId = that.data.orderInfo.order_id;

        param.orderId = orderId;
        param.goodsType = that.data.orderInfo.goods_type;
        param.success = function () {
          setTimeout(function(){
            that.getOrderDetail(orderId);
          }, 1500); 
        };
        app.wxPay(param);
      }
    })
  },
  applyDrawback: function () {
    var orderId = this.data.orderInfo.order_id,
        that = this;

    app.showModal({
      content: '确定要申请退款？',
      showCancel: true,
      confirmText: '确定',
      cancelText: '取消',
      confirm: function () {
        app.sendRequest({
          url: '/index.php?r=AppShop/applyRefund',
          data: {
            order_id: orderId,
            sub_shop_app_id: that.data.franchiseeId
          },
          success: function (res) {
            var data = {};

            data['orderInfo.status'] = 4;
            that.setData(data);
          }
        })
      }
    })
  },
  receiveDrawback: function () {
    var orderId = this.data.orderInfo.order_id,
        that = this;

    app.showModal({
      content: '确定已收到退款？',
      showCancel: true,
      confirmText: '确定',
      cancelText: '取消',
      confirm: function () {
        app.sendRequest({
          url: '/index.php?r=AppShop/comfirmRefund',
          data: {
            order_id: orderId,
            sub_shop_app_id: that.data.franchiseeId
          },
          success: function (res) {
            var data = {};

            data['orderInfo.status'] = 7;
            that.setData(data);
          }
        })
      }
    })
  },
  checkLogistics: function () {
    var orderId = this.data.orderInfo.order_id;
    app.turnToPage('/eCommerce/pages/logisticsPage/logisticsPage?detail=' + orderId);
  },
  sureReceipt: function () {
    var orderId = this.data.orderInfo.order_id,
        that = this;

    app.showModal({
      content: '确定已收到货物？',
      showCancel: true,
      confirmText: '确定',
      cancelText: '取消',
      confirm: function () {
        app.sendRequest({
          url: '/index.php?r=AppShop/comfirmOrder',
          data: {
            order_id: orderId,
            sub_shop_app_id: that.data.franchiseeId
          },
          success: function (res) {
            var data = {};

            data['orderInfo.status'] = 3;
            that.setData(data);
          }
        })
      }
    })
  },
  showAddressList: function () {
    var addressId = this.data.selectAddressId,
        orderId = this.data.orderInfo.order_id,
        franchiseeId = this.data.franchiseeId;

    app.turnToPage('/eCommerce/pages/myAddress/myAddress?id=' + addressId + '&oid=' + orderId + '&sub_shop_id=' + franchiseeId,true);
  },
  goToHomepage: function () {
    var router = app.getHomepageRouter();
    app.turnToPage('/pages/' + router + '/' + router, true);
  },
  verificationCode: function() {
    app.turnToPage('/eCommerce/pages/verificationCodePage/verificationCodePage?detail=' + this.data.orderInfo.order_id + '&sub_shop_app_id=' + this.data.franchiseeId);
  },
  getFreigtAdress:function(){
    var that = this;
    app.sendRequest({
      url: '/index.php?r=AppShop/getAppShopLocationInfo',
      data: {
        app_id: app.getAppId()
      },
      success: function (res) {
        that.setData({
          freightAdress: res.data
        });
      }
    });
  },
  freightGoMap:function(){
    var _this = this,
      infor = _this.data.freightAdress.region_string + _this.data.freightAdress.shop_location;
    infor = infor.replace(/\s+/g,'');
    app.sendRequest({
      url: '/index.php?r=Map/GetLatAndLngByAreaInfo',
      data: {
        location_info: infor
      },
      success: function (res) {
        if (res.result){
          wx.openLocation({
            latitude: res.result.location.lat,
            longitude: res.result.location.lng
          })
        }
      }
    });

  },
  initialAddressId:function(){
    var that = this;
    app.sendRequest({
      url: '/index.php?r=AppShop/addressList',
      data: {
        app_id: app.getAppId()
      },
      success: function (res) {
        if(res.data.length){
          that.setData({
            selectAddressId: res.data[0].id
          });
        }
      }
    });
  },
  freightPlayPhone:function(){
    var that = this;
    app.makePhoneCall(that.data.freightAdress.shop_contact)
  },
  seeAdditionalInfo: function(){
    app.turnToPage('/eCommerce/pages/goodsAdditionalInfo/goodsAdditionalInfo?from=goodsOrderDetail');
  }
})
