var bannerCarousel = {
  "banner": {
    "indicatorDots": true,
    "autoplay": true,
    "interval": 2000,
    "duration": 800,
    "circular": true,
    "content": [
      {
        "pic": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ef9256671fa.png",
      },
      {
        "pic": "http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ef91634e754.png",
      }
    ],
  },
}

var introductionBanner = {
  "banner": {
    "indicatorDots": true,
    "autoplay": true,
    "interval": 2000,
    "duration": 1000,
    "circular": true,
    "content": [
      {
        "pic": "../../images/introduction01.png",
      },
      {
        "pic": "../../images/introduction02.png",
      }
    ],
  },
}

var membershipBanner = {
  "banner": {
    "indicatorDots": false,
    "autoplay": false,
    "interval": 0,
    "duration": 0,
    "circular": false,
    "content": [
      {
        "pic": "../../images/membership.png",
      }
    ],
  },
}

module.exports = {
  bannerCarousel: bannerCarousel,
  introductionBanner: introductionBanner,
  membershipBanner: membershipBanner
}