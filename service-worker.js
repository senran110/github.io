/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "27d2bec77fa3183e92e663bd9db3d9aa"
  },
  {
    "url": "assets/css/0.styles.a55713a7.css",
    "revision": "d25d35757f87246973f8cf46117fffb5"
  },
  {
    "url": "assets/img/claw.f886b8d5.svg",
    "revision": "f886b8d5021c8af029e2cd4dea609bcc"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.62a8e391.js",
    "revision": "e3300638a9211ff5ff416e7bb3c4afa6"
  },
  {
    "url": "assets/js/10.3ccd5c38.js",
    "revision": "c79867f2db1e236fbd329dad23147307"
  },
  {
    "url": "assets/js/11.7aaf5e27.js",
    "revision": "db02cdb8f15d10a9f7879adae7251c02"
  },
  {
    "url": "assets/js/12.ed411d9d.js",
    "revision": "ec6db7d167c9c05c91d7bcbb1e58543f"
  },
  {
    "url": "assets/js/13.8cfcee50.js",
    "revision": "42a149a9265031f27942cca042bdc80a"
  },
  {
    "url": "assets/js/14.259fd474.js",
    "revision": "35534fd853f7b70805fb1c50ab9c6465"
  },
  {
    "url": "assets/js/15.cc34ca82.js",
    "revision": "271a65da26c81e6292f6e196b7a8bd41"
  },
  {
    "url": "assets/js/16.1cdf52db.js",
    "revision": "610927e6437ced73429133a70fc93e2c"
  },
  {
    "url": "assets/js/17.fec9e533.js",
    "revision": "f57959c09dd7f3461856089e95bf02f9"
  },
  {
    "url": "assets/js/18.be6a90d3.js",
    "revision": "09e7e3faba9293dd83da1cd6a87edffb"
  },
  {
    "url": "assets/js/19.b4c9e712.js",
    "revision": "6a5bc924bf1212c6d7a610d759d383aa"
  },
  {
    "url": "assets/js/4.950d04e0.js",
    "revision": "ce0b03a7145fed89edc990283c593d39"
  },
  {
    "url": "assets/js/5.4a89b190.js",
    "revision": "2d5752f199f170e5110986ed7fccd7e1"
  },
  {
    "url": "assets/js/6.fb1ccb93.js",
    "revision": "89e0191e1198c4ad54c787d76bec3e3e"
  },
  {
    "url": "assets/js/7.3f69113e.js",
    "revision": "2660fdf32ebfa55a441e1fe12fa790cb"
  },
  {
    "url": "assets/js/8.f880c803.js",
    "revision": "8d6a7e46d96bb8791e1af06892c18b93"
  },
  {
    "url": "assets/js/9.d5653e07.js",
    "revision": "7f01757a320b4d4f7af3a15d57f9aa59"
  },
  {
    "url": "assets/js/app.38b80f88.js",
    "revision": "e3ce90d36e91a9346229abbeb8f60280"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.daee948b.js",
    "revision": "d98706ea07102f52625d2d37e9488660"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "249d74562cfeb3d3f5923459d895d447"
  },
  {
    "url": "categories/VuePress -/index.html",
    "revision": "6f6d29c04b2ddffb87a3d119430d3ab0"
  },
  {
    "url": "categories/vuepress教程/index.html",
    "revision": "c6bdf8a72bd3d21a7efa5f689106f238"
  },
  {
    "url": "categories/作者/index.html",
    "revision": "02ae5e26b07906132bcdfc2328eede85"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6c833c9d64bf657e601c53e3a547520f"
  },
  {
    "url": "categories/电商/index.html",
    "revision": "10177b9bfd16b65126699e761b4e4794"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "ee6ad9ae201e77ee383fc01df76a70a0"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/dai.jpg",
    "revision": "a81288680eaf1dc79d2c32120dfba7ee"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "775c1bf45f227dfb72d86ebd8c71787e"
  },
  {
    "url": "img/qq.jpg",
    "revision": "4da9b6218f03d46f2341062bb74e9a65"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "img/wx.png",
    "revision": "bcfeaa485eb3cf2a73d60e83e744751a"
  },
  {
    "url": "img/赛博朋克.jpg",
    "revision": "4da10fc6dd98f96340053b0b9dd963a7"
  },
  {
    "url": "index.html",
    "revision": "9f99a35a0b2e1d8df1cc530673fa1009"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "99036267c4d81c8c5927827587793015"
  },
  {
    "url": "tags/Github/index.html",
    "revision": "724a76c4d0548159d663ac458da71212"
  },
  {
    "url": "tags/VuePress/index.html",
    "revision": "f09a62a9e0f6124e136b44fa2d3ae687"
  },
  {
    "url": "tags/作者/index.html",
    "revision": "b1b15478829c26053a10ff4cecab7d15"
  },
  {
    "url": "tags/博客/index.html",
    "revision": "94282dea3865a4b70d35f2cc3f0a9d2b"
  },
  {
    "url": "tags/抖音/index.html",
    "revision": "5d369a9c6b95f8f30df0eecf5783f5bc"
  },
  {
    "url": "tags/持续集成/index.html",
    "revision": "8a8d7095c67edf7617b6c19485bce10d"
  },
  {
    "url": "tags/教程/index.html",
    "revision": "2bca0e1769071c7cb778e2e55d8b49f7"
  },
  {
    "url": "tags/电商/index.html",
    "revision": "11557250ef9fbd95a323a5409cd2747a"
  },
  {
    "url": "tags/评论/index.html",
    "revision": "2e0c28f6c2be11e7e32c15125916732b"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "72ac5c5145bb10ac838034ebd575cea4"
  },
  {
    "url": "timeline/index.html",
    "revision": "5cd1a864a88fd259f2d8be0e79acd3a6"
  },
  {
    "url": "技术文章/博客插件/插件文章.html",
    "revision": "70ee0ca6e8d391ab50e04bd37c46a51b"
  },
  {
    "url": "技术文章/建站指南/pl.html",
    "revision": "b0250cdfd11af67e2134aaa044af6b34"
  },
  {
    "url": "技术文章/建站指南/senran02.html",
    "revision": "390ede960303612834f39f872ccc10ac"
  },
  {
    "url": "技术文章/建站指南/senran03.html",
    "revision": "75d200350d34df00f1fd9811e646fdee"
  },
  {
    "url": "技术文章/建站指南/vuepress.html",
    "revision": "07ee9b7eca802a1a8031b9c06828a36e"
  },
  {
    "url": "电商自媒体/life.html",
    "revision": "05397103c0d4e040aeb75fc746142381"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
