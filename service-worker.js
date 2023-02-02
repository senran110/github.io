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
    "revision": "72bcc73cf19120287de9b7438b90e9fc"
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
    "url": "assets/js/1.39d962b0.js",
    "revision": "82b4cf59c6d0e88acb3f748bb206c7e2"
  },
  {
    "url": "assets/js/10.d8c0f319.js",
    "revision": "6bdef2731b4b99f60f2e8f5c5da45b23"
  },
  {
    "url": "assets/js/11.2719d304.js",
    "revision": "5400462e29e6496f665fb5f601e174ac"
  },
  {
    "url": "assets/js/12.f50ef84d.js",
    "revision": "b4eef22d6ced6807e66d6bb4bc9ef0e3"
  },
  {
    "url": "assets/js/13.f71aa696.js",
    "revision": "f26aecca961672d58003bdc923c5d38a"
  },
  {
    "url": "assets/js/14.19c89669.js",
    "revision": "2fa84c266fa46eb4eb5258f93a42feb1"
  },
  {
    "url": "assets/js/15.619177f9.js",
    "revision": "0af28e11a9203efc6116623298df7388"
  },
  {
    "url": "assets/js/16.08725b6f.js",
    "revision": "cca9e4c9b6683252b51fae7de29454bc"
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
    "url": "assets/js/4.1ec695da.js",
    "revision": "d7d2ceec83483eb1db32a81445d49fc6"
  },
  {
    "url": "assets/js/5.44c32c91.js",
    "revision": "185c725a4270fe27eaea3d8270de971c"
  },
  {
    "url": "assets/js/6.97c89b8a.js",
    "revision": "ed8a80a52aa8783faaaba550a2151288"
  },
  {
    "url": "assets/js/7.1ae371a7.js",
    "revision": "db4eda207db12df935b29f18c794e379"
  },
  {
    "url": "assets/js/8.ea771e8c.js",
    "revision": "1fa305ced05beaa690cfc82723cb09c4"
  },
  {
    "url": "assets/js/9.36d66fe6.js",
    "revision": "26512944f591cce4c5e0e562673eeeef"
  },
  {
    "url": "assets/js/app.e2207a4d.js",
    "revision": "9aa8dbe9957c3e1018de540d99d99f07"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.4a43b8b9.js",
    "revision": "912c9b5473cf7993722320303f358a6c"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "7e5a1fe53ed385f4a75653a7d374f05b"
  },
  {
    "url": "categories/VuePress -/index.html",
    "revision": "cec242102bde840f18384014c8e952ae"
  },
  {
    "url": "categories/vuepress教程/index.html",
    "revision": "c86d409735e3fad2265050e48dcbb9fa"
  },
  {
    "url": "categories/作者/index.html",
    "revision": "48f4b0786619ef9ab443861e73b41210"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "51ac8a1da145200b40586f1b1cba5721"
  },
  {
    "url": "categories/电商/index.html",
    "revision": "3f46040f2dd54c7b3608b6ee37932e08"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "302b4ed381073a16f83c1d8e1a9ea6e4"
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
    "revision": "cb73b91d1640d45174ec5acbb9debc34"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "30b1892f2c29d9f3b216cdecaa71edcf"
  },
  {
    "url": "tags/Github/index.html",
    "revision": "bd3d39faa99856695be916d6b8c5816e"
  },
  {
    "url": "tags/VuePress/index.html",
    "revision": "a6738b2deb2b1386354ab0c7a28eb54a"
  },
  {
    "url": "tags/作者/index.html",
    "revision": "ade7b63bf976cdf3e31ffd3b897262e8"
  },
  {
    "url": "tags/博客/index.html",
    "revision": "75d190f8750eddf51550bd6cc927b9d3"
  },
  {
    "url": "tags/抖音/index.html",
    "revision": "ddc032dff64acd23c3c5bd0146422a80"
  },
  {
    "url": "tags/持续集成/index.html",
    "revision": "e4dfcf336acdc23b9e3c318bc402f6ce"
  },
  {
    "url": "tags/教程/index.html",
    "revision": "4e91bae9c6905960dd0575749b641bfc"
  },
  {
    "url": "tags/电商/index.html",
    "revision": "c6c0e06c6e014271f11e81f4b1367b99"
  },
  {
    "url": "tags/评论/index.html",
    "revision": "a2f1f12e1269f47f33a1edb6b52585d9"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "cb4aab2ce2e0ee3ad069ab6a2658f725"
  },
  {
    "url": "timeline/index.html",
    "revision": "af4650ce041e68e0af6070f52ef2ae27"
  },
  {
    "url": "技术文章/博客插件/插件文章.html",
    "revision": "fd88e6e68af93f74412536a995982075"
  },
  {
    "url": "技术文章/建站指南/pl.html",
    "revision": "a3a55fdc71f32bb06384f62e649e41cc"
  },
  {
    "url": "技术文章/建站指南/senran02.html",
    "revision": "5593394f0f7ce5b7d690449a712a8f04"
  },
  {
    "url": "技术文章/建站指南/senran03.html",
    "revision": "9ff3c6a9e3b64aca09c7674c0f11bddf"
  },
  {
    "url": "技术文章/建站指南/vuepress.html",
    "revision": "a95929ed59c732f1a97fef89ff5a7e04"
  },
  {
    "url": "电商自媒体/life.html",
    "revision": "a876a5b601c96e5ab76244c84aeab04e"
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
