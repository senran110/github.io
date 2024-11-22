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
    "revision": "946538b4e73fa3d4db0f89c7a22b2250"
  },
  {
    "url": "assets/css/0.styles.e77b9042.css",
    "revision": "170f52df2fd7396fa5aa12f37f79e025"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.ebed1697.js",
    "revision": "1abdcaab1a3aca95cb6ae5e7f65e95b8"
  },
  {
    "url": "assets/js/10.08ed8405.js",
    "revision": "1b3f431a59aacc2122065db0650315b7"
  },
  {
    "url": "assets/js/11.80f74d9a.js",
    "revision": "03e97f058cb3cde4d9326d97aa5063fb"
  },
  {
    "url": "assets/js/12.580df2ca.js",
    "revision": "c047c72551ac55acbd0c4927148a048d"
  },
  {
    "url": "assets/js/13.34f07c66.js",
    "revision": "7ad60d2cab71e831227ede630656f3aa"
  },
  {
    "url": "assets/js/14.4c8cfb35.js",
    "revision": "c74dffe70661601c93a0394f49c5fefe"
  },
  {
    "url": "assets/js/15.b05e32a5.js",
    "revision": "bf0d27da6c661fa56f25358a64de6e7d"
  },
  {
    "url": "assets/js/16.8b003fe8.js",
    "revision": "87ca18237dac975d0a794f5d10723918"
  },
  {
    "url": "assets/js/17.36b3e518.js",
    "revision": "59caefb1b864b11f2c0096b22989fa5f"
  },
  {
    "url": "assets/js/18.0dcb0f7a.js",
    "revision": "4c5b47d3b82f5050dc631e8beaaf7b2c"
  },
  {
    "url": "assets/js/19.fc9ca351.js",
    "revision": "6304e06832b748790d13b7e2c6737d17"
  },
  {
    "url": "assets/js/20.67ee39d8.js",
    "revision": "15d03bc6a3aefbe321558969b8d2b721"
  },
  {
    "url": "assets/js/21.f8483f7f.js",
    "revision": "febf34d1559dc96a03f2c565bac11ecc"
  },
  {
    "url": "assets/js/22.c2c6cca6.js",
    "revision": "941f833e0d62e0fd68303d956220cc8d"
  },
  {
    "url": "assets/js/4.df9abb95.js",
    "revision": "9e511954b97e6b314522ac61b6ea197d"
  },
  {
    "url": "assets/js/5.7c2163ee.js",
    "revision": "200e65339f7cb20a805cb7ac65d00a12"
  },
  {
    "url": "assets/js/6.daf0831f.js",
    "revision": "f713266df08d755d8d0eaa459bb5812b"
  },
  {
    "url": "assets/js/7.981cf286.js",
    "revision": "94c484be3ca5f640ea3eea864c3bc9ac"
  },
  {
    "url": "assets/js/8.aa185ced.js",
    "revision": "4aa5b43457908ab19c4be53bd1b660a7"
  },
  {
    "url": "assets/js/9.30d8a38d.js",
    "revision": "cf219bfc400684e149b89c5802178524"
  },
  {
    "url": "assets/js/app.4dcdb8cc.js",
    "revision": "12305f3db12611c33a9916a477e584db"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.d285c371.js",
    "revision": "78a8dbf7dc293e374c3fb734eb474a89"
  },
  {
    "url": "categories/guide/index.html",
    "revision": "0f187519f86cc00e64f3d48dc3a80d48"
  },
  {
    "url": "categories/index.html",
    "revision": "87d946bcd18a4559526e5940d3349ada"
  },
  {
    "url": "categories/VuePress -/index.html",
    "revision": "07e2bc6bc19ba4ef87752fb3ef78c549"
  },
  {
    "url": "categories/vuepress教程/index.html",
    "revision": "0d82fde4c25cd21aa46185922cedb5b8"
  },
  {
    "url": "categories/作者 -/index.html",
    "revision": "89d861b7c43f89b543c578486a26a44b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "2395464e0f51efde2907be12cf553c7e"
  },
  {
    "url": "categories/电商/index.html",
    "revision": "cb89a54c35f26d91c494d9276d7a4d63"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide.md/index.html",
    "revision": "4effeb20bf9904721f63cc2488744d3f"
  },
  {
    "url": "guide/index.html",
    "revision": "813dc0655017de322cc9a32a274f1da5"
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
    "revision": "0a18b5cda3a96e0e0e2c52def7e5f970"
  },
  {
    "url": "img/logo1.png",
    "revision": "4f8626146f6ee13bed710bec45e399d2"
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
    "revision": "48306d67c62c9c675b86a8eba5bace47"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "718a8ff1413814ce02ad11a8066725f7"
  },
  {
    "url": "tags/Github/index.html",
    "revision": "34eddd0583ba3e0ce9404f300716ea02"
  },
  {
    "url": "tags/VuePress/index.html",
    "revision": "38ac9c2d602f6aafbfba948074e29d07"
  },
  {
    "url": "tags/关于我/index.html",
    "revision": "d2f11a6f062f61813e2ad8cff4c670ce"
  },
  {
    "url": "tags/博客/index.html",
    "revision": "c8056d7d35017495ec617609bcf011d5"
  },
  {
    "url": "tags/导航网站/index.html",
    "revision": "59c99abe8fd479e294d7e7ed042e7e1c"
  },
  {
    "url": "tags/工具箱/index.html",
    "revision": "e5614d4510352d8a43d412bf82b2a875"
  },
  {
    "url": "tags/抖音/index.html",
    "revision": "e5e734d008c1370f1f45274a716b0d79"
  },
  {
    "url": "tags/持续集成/index.html",
    "revision": "963939148a0aec350ec8e7b39be7d81d"
  },
  {
    "url": "tags/教程/index.html",
    "revision": "f33eb7b95d6642249fc25aab6395c2b2"
  },
  {
    "url": "tags/电商/index.html",
    "revision": "f5b2c61c08ac0e3daaf53b8fdaaee372"
  },
  {
    "url": "tags/站点导航/index.html",
    "revision": "5dc65dcefe9e5c22c14f2e4eb8acf22f"
  },
  {
    "url": "tags/评论/index.html",
    "revision": "550de88c2e3e728703c2a23addb46daf"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "82cfe2dae033323304d4a139e3a1f6f9"
  },
  {
    "url": "timeline/index.html",
    "revision": "d487aa75db9e019e449a9d94aa96c2f8"
  },
  {
    "url": "导航站/index.html",
    "revision": "776f6d445a163c9c6a6bb353c3f17a26"
  },
  {
    "url": "技术文章/博客插件/插件文章.html",
    "revision": "22a8d24e7a09c07a4e822df9d0dfe4e1"
  },
  {
    "url": "技术文章/建站指南/pl.html",
    "revision": "18a205610e10682c873acf3a475cf470"
  },
  {
    "url": "技术文章/建站指南/senran02.html",
    "revision": "4331e51d29145a54a53d49a672394548"
  },
  {
    "url": "技术文章/建站指南/senran03.html",
    "revision": "e75afc6e5fdd82d58eb60a1aeab869eb"
  },
  {
    "url": "技术文章/建站指南/vuepress.html",
    "revision": "9a457025722c7f8020e0329b7257c445"
  },
  {
    "url": "电商自媒体/life.html",
    "revision": "ff368a381668b1928efc95b7a4d5d50e"
  },
  {
    "url": "羡巡客栈.png",
    "revision": "b9928838352a87a93367ad126dd3e3cb"
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
