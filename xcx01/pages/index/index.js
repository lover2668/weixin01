//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    current: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    circular: true,
    lastTapDiffTime: 0,
    imgUrls: [
      {
        link:'/pages/product/product',
        url:'https://p3.pstatp.com/large/43700001e49d85d3ab52'
      },{
        link:'/pages/online/online',
        url:'https://p3.pstatp.com/large/39f600038907bf3b9c96'
      },{
        link:'/pages/info/info',
        url:'https://p3.pstatp.com/large/31fa0003ed7228adf421'
      }
    ],
    //links: [
    //  '../images/home_bar_1',
    //  '../images/home_bar_2',
    //  '../images/home_bar_3'
    //],
    //motto: 'Hello World',
    //userInfo: {},
    //hasUserInfo: false,
    //canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  //自动切换时间间隔
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  //滑动动画时长
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  //是否显示小圆圈
  changeIndicatorDocts: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  //是否自动播放
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  //点击图片触发事件
  swipclick: function (e) {
    console.log(this.data.current);
    //console.log(this.data.imgUrls(this.data.current));
    //wx.switchTab({
      //url: this.data.links[this.data.current]
    //})
  },
  //轮播图片发生改变
  bindChange: function (e) {
    this.setData({
      //current: e.detail.current
    })
  },
  touchStart: function (e) {
    console.log(e.timeStamp + ' - touch start')
  },
  touchEnd: function (e) {
    console.log(e.timeStamp + ' - touch end')
  },
  touchEvent: function (e) {
    console.log(e);
    console.log(this.data.current);
    console.log(this.data.current);
    //触摸时间距离页面打开时间毫秒数
    var curTime=e.timeStamp;
    //上一次触摸距离页面打开时间毫秒数
    var lastTime = this.data.lastTapDiffTime;
    if(lastTime > 0)
    {
      //如果两次单击间隔小于300号码，认为是双击
      if(curTime - lastTime < 300)
      {
        console.log(e.timeStamp + ' - double tap')
      }
      else{
        console.log(e.timeStamp + ' - single tap')
      }
    }
    else{
      console.log(e.timeStamp + '- first tap')
    }

    //将本次点击触摸时间设置为上一次触摸时间
    this.setData({lastTapDiffTime: curTime});
  },
  swiperChange: function (e) {
    this.setData({
      current: e.detail.current
    })
  },
  changeEvent: function (e) {
    this.setData({
      current: e.currentTarget.id
    })
  },
 

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
