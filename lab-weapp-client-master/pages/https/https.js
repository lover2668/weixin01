const app = getApp();
const config = app.config;
const lab = require('../../lib/lab');

Page({
  data: {
    status: 'waiting',
    url: 'https://' + config.host + '/hello',
    requesting: false,
    hintLine1: '完成服务器开发，',
    hintLine2: '使得下面的地址可以访问'
  },
  request() {
    this.setData({
      requesting: true,
      status: 'waiting',
      hintLine1: '正在发送',
      hintLine2: '...'
    });
    wx.request({
      url: this.data.url,
      method: 'GET',
      success: (res) => {
        if (+res.statusCode == 200) {
          this.setData({
            status: 'success',
            hintLine1: '服务器响应成功',
            hintLine2: '返回：' + res.data
          });
          lab.finish('https');
        } else {
          this.setData({
            status: 'warn',
            hintLine1: '响应错误',
            hintLine2: '响应码：' + res.statusCode
          });
        }
      },
      fail: (res) => {
        console.log(res);
        this.setData({
          status: 'warn',
          hintLine1: '请求失败',
          hintLine2: res.errMsg
        });
      },
      complete: () => {
        this.setData({
          requesting: false
        });
      }
    });
  },
  /**
 * 获取当前网络状态
 */
  getNetWorkType: function () {
    wx.getNetworkType({
      success: function (res) {
        console.log(res)
      }
    })
  },

  /**
   *  获取系统信息
   */
  getSystemInfo: function () {
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
      }
    })
  },
  /**
   *  监听重力感应数据     
   *      - 带on开头的都是监听接收一个callback
   */
  onAccelerometerChange: function () {
    wx.onAccelerometerChange(function (res) {
      console.log(res)
    })
  },
  /**
 *  监听罗盘数据
 */
  onCompassChange: function () {
    wx.onCompassChange(function (res) {
      console.log(res)
    })
  }
});