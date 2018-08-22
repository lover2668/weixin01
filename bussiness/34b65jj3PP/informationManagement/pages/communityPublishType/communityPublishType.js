
var app = getApp()
var util = require('../../../utils/util.js')

Page({
  data: {
    cdnUrl: app.globalData.cdnUrl,
    urlSearch: ''
  },
  onLoad: function(options){
    let searchArr = Object.keys(options).map(k => (k + '=' + options[k]));
    if (searchArr.length > 0) {
      this.setData({urlSearch: searchArr.join('&')});
    }
  },
  turnToCommunityPublish: function (e) {
    let dataset = e.currentTarget.dataset,
      targetUrl = '/informationManagement/pages/communityPublish/communityPublish?type=' + dataset.type;
    if (this.data.urlSearch) {
      targetUrl += '&' + this.data.urlSearch;
    }
    app.turnToPage(targetUrl);
  },
  returnBack: function (e) {
    app.turnBack();
  }
})