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
    "revision": "8b27874afe3de652d249ef30eef5c37d"
  },
  {
    "url": "assets/css/0.styles.9adbdc66.css",
    "revision": "b4d13bde7214bc669c628d942491e3c8"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.f1c607e4.js",
    "revision": "55f5a2347269e8eec50d4b908214f4fe"
  },
  {
    "url": "assets/js/10.3430d041.js",
    "revision": "77af7c2189a913375ad61c2abeec603b"
  },
  {
    "url": "assets/js/11.cdf37598.js",
    "revision": "9d9a09e55fb3181c66c45087d6059716"
  },
  {
    "url": "assets/js/12.65a52497.js",
    "revision": "2f186df57c76ad0e8a8f5e3b787a6da0"
  },
  {
    "url": "assets/js/13.67312c10.js",
    "revision": "54d6295fcc61f7f6c301fc6e36dc488c"
  },
  {
    "url": "assets/js/14.13c7863b.js",
    "revision": "4ca7c0dbf9b4e3472557e54e147f020b"
  },
  {
    "url": "assets/js/15.460d9c9e.js",
    "revision": "f6fe5332c0e1a53833e5dc23c13606d2"
  },
  {
    "url": "assets/js/16.cfceaf4b.js",
    "revision": "7240c703c8c59a53f38e56df16e26fe9"
  },
  {
    "url": "assets/js/17.6be0a830.js",
    "revision": "2c10e144879524787c962cec0a053832"
  },
  {
    "url": "assets/js/18.ae067574.js",
    "revision": "17cf1686fdf7e3ec0721b58c8cc8119e"
  },
  {
    "url": "assets/js/19.eea3dded.js",
    "revision": "401cc1d6195302c8269d714438c5b4ac"
  },
  {
    "url": "assets/js/20.6c9f440e.js",
    "revision": "0c603cb3bc771924a2d7a195f2b189a7"
  },
  {
    "url": "assets/js/21.0ea002dd.js",
    "revision": "d12c0c181825c671817b0c25a710f28a"
  },
  {
    "url": "assets/js/22.b87a62b3.js",
    "revision": "6c33f648258562ba398beae3644f7f3f"
  },
  {
    "url": "assets/js/23.30d1d692.js",
    "revision": "051cde1d36b9c5b59cc14a8af6ff82ad"
  },
  {
    "url": "assets/js/24.cc0007c8.js",
    "revision": "572fdf1ec420a8aa9f6e27f5857491f4"
  },
  {
    "url": "assets/js/4.6190e333.js",
    "revision": "fae7c81ef7210aa9ae37c61b733b93cf"
  },
  {
    "url": "assets/js/5.c976d4e1.js",
    "revision": "0bb744899f4dd45703c491fc741150ce"
  },
  {
    "url": "assets/js/6.684f3ef3.js",
    "revision": "51a19fc02aed1ffe69cc716a179493f9"
  },
  {
    "url": "assets/js/7.8f71ce4b.js",
    "revision": "9b105e7ed9f2c077afac45baae06bdf4"
  },
  {
    "url": "assets/js/8.c0ab4cdc.js",
    "revision": "cc2347477456e5183860eacd0b7b85a1"
  },
  {
    "url": "assets/js/9.14be1e53.js",
    "revision": "dddef22e20819c7780900b0601042dff"
  },
  {
    "url": "assets/js/app.d7218b7f.js",
    "revision": "2e3b4e589781ad11700098c00b5080fc"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.de4e0e19.js",
    "revision": "8a8f7d13e3efb91e7acb291494d96224"
  },
  {
    "url": "categories/guide/index.html",
    "revision": "15e14bf91f234d3bb1d2dd47c93e8cef"
  },
  {
    "url": "categories/index.html",
    "revision": "0dada5498d6d5c88e718d36974663a3b"
  },
  {
    "url": "categories/VuePress -/index.html",
    "revision": "dd5837bfc6c1b2e63e47639b53a63905"
  },
  {
    "url": "categories/vuepress教程/index.html",
    "revision": "5dbc5a52aee30b1d1d99be1a73c5ceb3"
  },
  {
    "url": "categories/作者 -/index.html",
    "revision": "ff1f227935fa2f480f4f32d53a665975"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "b8ba8fe7a820f159bfaa5701772a30e2"
  },
  {
    "url": "categories/电商/index.html",
    "revision": "45eb8f7eb8e28b0078f868f3d7ed4d33"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide.md/index.html",
    "revision": "d486ed00b745dd328f59064ef7c740d0"
  },
  {
    "url": "guide/index.html",
    "revision": "8541f17a87943ea4e203fb15ddd7d988"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "a1a0c6fef0cd95315ac23f3ebc9ef69d"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "238d834aa9f5eaafeb9a70fadeaa189e"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "09c8872333d08eafa84b960a8fcb302e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "6a70040eaccf37c6725ba5d1a38de881"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "37616195cfa34795c619b3639aaf76cb"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
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
    "revision": "587e600fc4fb39875aff5679b908592c"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "7ae57560e5a69edb1629e490b83ac16b"
  },
  {
    "url": "tags/Github/index.html",
    "revision": "e580a713070476cdebdfc54436f2f15f"
  },
  {
    "url": "tags/VuePress/index.html",
    "revision": "a16fac9cafe68f6274a8cfc36dc990f5"
  },
  {
    "url": "tags/关于我/index.html",
    "revision": "6b1a30b52e62c794ed535ebb66a94134"
  },
  {
    "url": "tags/博客/index.html",
    "revision": "1cf2ec4eaf5d71970e82c5ab621645b0"
  },
  {
    "url": "tags/导航网站/index.html",
    "revision": "ab575ce1e2f03c553443d8e0da83fe4a"
  },
  {
    "url": "tags/工具箱/index.html",
    "revision": "984c5c774aacbdb81c4fb6e3c7cda1a3"
  },
  {
    "url": "tags/抖音/index.html",
    "revision": "45a407c276397143405698438e7662d2"
  },
  {
    "url": "tags/持续集成/index.html",
    "revision": "01c19f30ec8baed7d07444b0995d500d"
  },
  {
    "url": "tags/教程/index.html",
    "revision": "66e774108d433ae2be940e7c6be4eaf4"
  },
  {
    "url": "tags/电商/index.html",
    "revision": "2657be4c210d685162e7bb5f18b00ec7"
  },
  {
    "url": "tags/站点导航/index.html",
    "revision": "6fd18720175a109bd1bb8c77f9db7c80"
  },
  {
    "url": "tags/评论/index.html",
    "revision": "923d339c196c7a690293c1ea9e26f640"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "65482e9d9bf7cb447cb93f8878e1c690"
  },
  {
    "url": "timeline/index.html",
    "revision": "fa6721cd63b161ed96bcb05cd40f4b4c"
  },
  {
    "url": "导航站/index.html",
    "revision": "8794c6c5b2bf32fd49893c873ab4be58"
  },
  {
    "url": "技术文章/博客插件/插件文章.html",
    "revision": "4eb197e58989687e635eed11449c246a"
  },
  {
    "url": "技术文章/建站指南/pl.html",
    "revision": "3eb7271af78ecbe92c648967d7941916"
  },
  {
    "url": "技术文章/建站指南/senran02.html",
    "revision": "d3d5bc4eb23045e1d1652752c7ee16b4"
  },
  {
    "url": "技术文章/建站指南/senran03.html",
    "revision": "eb8030767ab8d3835ab574a5badd8c64"
  },
  {
    "url": "技术文章/建站指南/vuepress.html",
    "revision": "e251c7b5c5c06443e9c573ffbf95f851"
  },
  {
    "url": "电商自媒体/life.html",
    "revision": "08e6fa5932ca5afe3dd2317151655f09"
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
