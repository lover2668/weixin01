var app      = getApp();

var pageData = {
  data: {"carousel1":{"type":"carousel","style":"height:375rpx;margin-left:0;margin-right:auto;margin-top:0;opacity:1;","content":[{"customFeature":[],"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5936213cc925c.png","content":"","parentCompid":"carousel1","style":""},{"customFeature":[],"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_593620a8bffde.png","content":"","parentCompid":"carousel1","style":""}],"customFeature":{"autoplay":true,"interval":2},"animations":[],"page_form":"","compId":"carousel1"},"free_vessel2":{"type":"free-vessel","style":"width:750rpx;height:679.6875rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:187.5rpx;width:339.84375rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;top:117.1875rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5940a9afadb26.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"community","community-id":"377931","community-name":"\u4eba\u8109\u4ea4\u6d41"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel2","itemType":"picture","itemParentType":"free-vessel","itemIndex":0,"eventParams":"{\"community_id\":\"377931\"}","eventHandler":"tapCommunityHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:187.5rpx;width:339.84375rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:386.71875rpx;top:117.1875rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5940a9b3104a4.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"community","community-id":"377932","community-name":"\u5b66\u751f\u4ea4\u6d41"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel2","itemType":"picture","itemParentType":"free-vessel","itemIndex":1,"eventParams":"{\"community_id\":\"377932\"}","eventHandler":"tapCommunityHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:187.5rpx;width:339.84375rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;top:398.4375rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5940a9b669828.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"community","community-id":"377933","community-name":"\u6d3b\u52a8\u4ea4\u6d41"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel2","itemType":"picture","itemParentType":"free-vessel","itemIndex":2,"eventParams":"{\"community_id\":\"377933\"}","eventHandler":"tapCommunityHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:187.5rpx;width:339.84375rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:386.71875rpx;top:398.4375rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5940a9b9b7920.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"community","community-id":"377934","community-name":"\u8d44\u6e90\u4e92\u6362"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel2","itemType":"picture","itemParentType":"free-vessel","itemIndex":3,"eventParams":"{\"community_id\":\"377934\"}","eventHandler":"tapCommunityHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:32.8125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:117.1875rpx;top:328.125rpx;margin-right:0;","content":"\u4eba\u8109\u4ea4\u6d41","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[4]","parentCompid":"free_vessel2","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:32.8125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:487.5rpx;top:328.125rpx;margin-right:0;","content":"\u5b66\u751f\u4ea4\u6d41","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[5]","parentCompid":"free_vessel2","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:32.8125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:117.1875rpx;top:609.375rpx;margin-right:0;","content":"\u6d3b\u52a8\u4ea4\u6d41","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[6]","parentCompid":"free_vessel2","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:32.8125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:487.5rpx;top:609.375rpx;margin-right:0;","content":"\u8d44\u6e90\u4e92\u6362","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[7]","parentCompid":"free_vessel2","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:35.15625rpx;font-weight:bold;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:351.5625rpx;top:35.15625rpx;margin-right:0;right:auto;","content":"\u4ea4\u6d41\u4f1a","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[8]","parentCompid":"free_vessel2","markColor":"","mode":0},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:42.1875rpx;width:42.1875rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:292.96875rpx;top:35.15625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5940b0d603fa9.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[9]","parentCompid":"free_vessel2"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel2"},"free_vessel3":{"type":"free-vessel","style":"width:750rpx;height:93.75rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:18.75rpx;opacity:1;margin-left:auto;","content":[{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:35.15625rpx;font-weight:bold;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:351.5625rpx;top:35.15625rpx;margin-right:0;right:auto;","content":"\u5c0f\u7f16\u63a8\u8350","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel3","markColor":"","mode":0},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:42.1875rpx;width:42.1875rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:292.96875rpx;top:35.15625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5940b0db5d0a4.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel3"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel3"},"free_vessel4":{"type":"free-vessel","style":"width:750rpx;height:246.09375rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:187.5rpx;width:234.375rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;top:35.15625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5940d433d60d0.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","community-id":"377933","community-name":"\u6211\u4eec\u5e94\u8be5\u600e\u4e48\u7ba1\u7406\u91d1\u94b1","inner-page-link":"3L0TOOwy3i_page10010"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel4","itemType":"picture","itemParentType":"free-vessel","itemIndex":0,"eventParams":"{\"inner_page_link\":\"3L0TOOwy3i_page10010\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:37.5rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:292.96875rpx;top:46.875rpx;margin-right:0;","content":"\u73b0\u4ee3\u9879\u76ee\u7ba1\u7406\u5b66","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","community-id":"377933","community-name":"\u6211\u4eec\u5e94\u8be5\u600e\u4e48\u7ba1\u7406\u91d1\u94b1","inner-page-link":"3L0TOOwy3i_page10010"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel4","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":1,"eventParams":"{\"inner_page_link\":\"3L0TOOwy3i_page10010\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:292.96875rpx;top:164.0625rpx;margin-right:0;","content":"2016-05-13","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"community","community-id":"377933","community-name":"\u6211\u4eec\u5e94\u8be5\u600e\u4e48\u7ba1\u7406\u91d1\u94b1"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel4","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":2,"eventParams":"{\"community_id\":\"377933\"}","eventHandler":"tapCommunityHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:534.375rpx;top:164.0625rpx;margin-right:0;","content":"1362\u6d4f\u89c8","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"community","community-id":"377933","community-name":"\u6211\u4eec\u5e94\u8be5\u600e\u4e48\u7ba1\u7406\u91d1\u94b1"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel4","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":3,"eventParams":"{\"community_id\":\"377933\"}","eventHandler":"tapCommunityHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:32.8125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:292.96875rpx;top:107.8125rpx;margin-right:0;","content":"\u63a8\u8350\u7b49\u7ea7","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","community-id":"377933","community-name":"\u6211\u4eec\u5e94\u8be5\u600e\u4e48\u7ba1\u7406\u91d1\u94b1","inner-page-link":"3L0TOOwy3i_page10010"},"animations":[],"compId":"data.content[4]","parentCompid":"free_vessel4","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":4,"eventParams":"{\"inner_page_link\":\"3L0TOOwy3i_page10010\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:35.15625rpx;width:152.34375rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:445.3125rpx;top:107.8125rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5940d31c1c002.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[5]","parentCompid":"free_vessel4"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0,"action":"inner-link","inner-page-link":"3L0TOOwy3i_page10010"},"animations":[],"page_form":"","compId":"free_vessel4","itemType":"free-vessel","itemParentType":null,"itemIndex":"free_vessel4","eventParams":"{\"inner_page_link\":\"3L0TOOwy3i_page10010\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},"free_vessel5":{"type":"free-vessel","style":"width:750rpx;height:246.09375rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:2.34375rpx;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:187.5rpx;width:234.375rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;top:35.15625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5940d4809c137.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","community-id":"377932","community-name":"\u5e02\u573a\u8425\u9500\u4e0e\u7b56\u5212\u7684\u5b9e\u65bd\u65b9\u6cd5","inner-page-link":"3L0TOOwy3i_page10011"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel5","itemType":"picture","itemParentType":"free-vessel","itemIndex":0,"eventParams":"{\"inner_page_link\":\"3L0TOOwy3i_page10011\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:37.5rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:292.96875rpx;top:46.875rpx;margin-right:0;","content":"\u793e\u4f1a\u7ba1\u7406\u5b66\u6982\u8bba","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","community-id":"377932","community-name":"\u5e02\u573a\u8425\u9500\u4e0e\u7b56\u5212\u7684\u5b9e\u65bd\u65b9\u6cd5","inner-page-link":"3L0TOOwy3i_page10011"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel5","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":1,"eventParams":"{\"inner_page_link\":\"3L0TOOwy3i_page10011\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:32.8125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:292.96875rpx;top:107.8125rpx;margin-right:0;","content":"\u63a8\u8350\u7b49\u7ea7","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"3L0TOOwy3i_page10011"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel5","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":2,"eventParams":"{\"inner_page_link\":\"3L0TOOwy3i_page10011\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:35.15625rpx;width:152.34375rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:445.3125rpx;top:107.8125rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5940d336cf585.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel5"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:292.96875rpx;top:164.0625rpx;margin-right:0;","content":"2016-10-25","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[4]","parentCompid":"free_vessel5","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:534.375rpx;top:164.0625rpx;margin-right:0;","content":"2306\u6d4f\u89c8","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[5]","parentCompid":"free_vessel5","markColor":"","mode":0}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0,"action":"inner-link","inner-page-link":"3L0TOOwy3i_page10011"},"animations":[],"page_form":"","compId":"free_vessel5","itemType":"free-vessel","itemParentType":null,"itemIndex":"free_vessel5","eventParams":"{\"inner_page_link\":\"3L0TOOwy3i_page10011\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},"free_vessel6":{"type":"free-vessel","style":"width:750rpx;height:246.09375rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:2.34375rpx;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:187.5rpx;width:234.375rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;top:35.15625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_59368596a7b5d.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","community-id":"377931","community-name":"\u5982\u4f55\u5b66\u4e60\u5e02\u573a\u8c03\u67e5\u4e0e\u5206\u6790","inner-page-link":"3L0TOOwy3i_page10010"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel6","itemType":"picture","itemParentType":"free-vessel","itemIndex":0,"eventParams":"{\"inner_page_link\":\"3L0TOOwy3i_page10010\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:37.5rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:292.96875rpx;top:46.875rpx;margin-right:0;","content":"\u5e02\u573a\u8c03\u67e5\u4e0e\u5206\u6790","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","community-id":"377931","community-name":"\u5982\u4f55\u5b66\u4e60\u5e02\u573a\u8c03\u67e5\u4e0e\u5206\u6790","inner-page-link":"3L0TOOwy3i_page10010"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel6","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":1,"eventParams":"{\"inner_page_link\":\"3L0TOOwy3i_page10010\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:32.8125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:292.96875rpx;top:107.8125rpx;margin-right:0;","content":"\u63a8\u8350\u7b49\u7ea7","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel6","markColor":"","mode":0},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:35.15625rpx;width:152.34375rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:445.3125rpx;top:107.8125rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5940d31c1c002.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel6"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:292.96875rpx;top:164.0625rpx;margin-right:0;","content":"2016-03-19","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[4]","parentCompid":"free_vessel6","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:534.375rpx;top:164.0625rpx;margin-right:0;","content":"1920\u6d4f\u89c8","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[5]","parentCompid":"free_vessel6","markColor":"","mode":0}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0,"action":"inner-link","inner-page-link":"3L0TOOwy3i_page10010"},"animations":[],"page_form":"","compId":"free_vessel6","itemType":"free-vessel","itemParentType":null,"itemIndex":"free_vessel6","eventParams":"{\"inner_page_link\":\"3L0TOOwy3i_page10010\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},"has_tabbar":1,"page_hidden":true,"page_form":"","top_nav":{"navigationBarTitleText":"\u8bb2\u5ea7"}},
    need_login: false,
    page_router: '3L0TOOwy3i_page10008',
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
