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
    "revision": "0f3d9276884366e699e3c0012084f7c0"
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
    "url": "assets/js/13.f71aa696.js",
    "revision": "f26aecca961672d58003bdc923c5d38a"
  },
  {
    "url": "assets/js/14.ef73563e.js",
    "revision": "165795fca44503c33f1cc14df9760742"
  },
  {
    "url": "assets/js/15.ec2e31c6.js",
    "revision": "8317aa4e9a9f62ea81ecfe202fe3a252"
  },
  {
    "url": "assets/js/16.cc6b6f25.js",
    "revision": "dcb2c887024bab996fc20cf288f528a5"
  },
  {
    "url": "assets/js/17.fe68ad5c.js",
    "revision": "f0fab5ccb39374a2ea672846922572d8"
  },
  {
    "url": "assets/js/18.bf02b914.js",
    "revision": "fa93c464f94f5d34d25e6e33363914f9"
  },
  {
    "url": "assets/js/19.acfd5da2.js",
    "revision": "210399a3bf00f5486d7358bb2a26ea40"
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
    "url": "assets/js/app.a1eff308.js",
    "revision": "2188a6e567ed79dcf73456926e370277"
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
    "revision": "fa3b7befdfb469aa6465f3d4e9939f21"
  },
  {
    "url": "categories/VuePress -/index.html",
    "revision": "ed6ec61c8e42eebf19f2024450718e88"
  },
  {
    "url": "categories/vuepress教程/index.html",
    "revision": "362880073da167e9035771ea4f30a40f"
  },
  {
    "url": "categories/作者/index.html",
    "revision": "174fe848c29377e892dcb68c11bd61c6"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "0be2a42bfaded08f8622ea5d58373dcc"
  },
  {
    "url": "categories/电商/index.html",
    "revision": "a9086553417662d8b85643981c679637"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "720894058681417ffadff9b6f8cbb0ca"
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
    "revision": "003fb9fa634777ee1a47078427158ac6"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "07782f8196d04aba8a1a0532dc3c9fe5"
  },
  {
    "url": "tags/Github/index.html",
    "revision": "f090df4db15412c1f82524c7614cf488"
  },
  {
    "url": "tags/VuePress/index.html",
    "revision": "0f92d67340937bc3426096c1a96c161a"
  },
  {
    "url": "tags/作者/index.html",
    "revision": "c01e481aedcb551ec43458196f78f9c4"
  },
  {
    "url": "tags/博客/index.html",
    "revision": "5347eff1f9f3cd64801cb45b5485e711"
  },
  {
    "url": "tags/抖音/index.html",
    "revision": "44d344214e53a38245e1c9fe6007233e"
  },
  {
    "url": "tags/持续集成/index.html",
    "revision": "c8a4288b9ebb7b03b2f412f5ade06081"
  },
  {
    "url": "tags/教程/index.html",
    "revision": "85ef133106609cc03a4baab770cf5588"
  },
  {
    "url": "tags/电商/index.html",
    "revision": "a09be1c82fda107ec3509a39a74972bf"
  },
  {
    "url": "tags/评论/index.html",
    "revision": "d5bd1fa1918c6f6eb9a215b8f5e2ca13"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "e80b8e8ed8689af6dda6469192a0aa78"
  },
  {
    "url": "timeline/index.html",
    "revision": "531d3c38efef1b0148da022e1e12c5ce"
  },
  {
    "url": "技术文章/博客插件/插件文章.html",
    "revision": "44386006ce3ba3d1cfc79a7305172005"
  },
  {
    "url": "技术文章/建站指南/pl.html",
    "revision": "27f290ad6a69def3440ead21e3ff7827"
  },
  {
    "url": "技术文章/建站指南/senran02.html",
    "revision": "fd00ebec86b6e671effafa1f33b54a5d"
  },
  {
    "url": "技术文章/建站指南/senran03.html",
    "revision": "fb280d808164320fa749f4fd760ec3f6"
  },
  {
    "url": "技术文章/建站指南/vuepress.html",
    "revision": "808cea5582625665497749a31bf3b185"
  },
  {
    "url": "电商自媒体/life.html",
    "revision": "2b18e3db3034a959fbb805474be3ffda"
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
