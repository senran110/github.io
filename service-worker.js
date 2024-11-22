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
    "revision": "19cf6e633490a4c1b67eb0938e82b0ca"
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
    "url": "assets/js/16.c7b71e87.js",
    "revision": "3885b6d51b2dee55dbb730305f147e31"
  },
  {
    "url": "assets/js/17.4bd17b56.js",
    "revision": "cb5b95073b1964e64dec7e0918e041b8"
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
    "url": "assets/js/23.05ab4436.js",
    "revision": "3f57d0de6d4cf183485a2593f5458980"
  },
  {
    "url": "assets/js/24.811bbcea.js",
    "revision": "f3dbfbc5e5ed0e530f640077201c70a5"
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
    "url": "assets/js/app.554efd4e.js",
    "revision": "97c8b592dd85219903d5c44f6fc4105b"
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
    "revision": "f09e27396b4d9c34aa69bafa68f19501"
  },
  {
    "url": "categories/index.html",
    "revision": "7b062310250e90cb468edc3b327e6721"
  },
  {
    "url": "categories/VuePress -/index.html",
    "revision": "ad5aaecc3e5faa1d48e746e83a6cc162"
  },
  {
    "url": "categories/vuepress教程/index.html",
    "revision": "bc2606397367f2a953d1e1eebe5e9818"
  },
  {
    "url": "categories/作者 -/index.html",
    "revision": "ad804fd7df2e83fb25d42a4029a9b1e7"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "0f0f7aecad93527f40cdb4e64d7fd7c2"
  },
  {
    "url": "categories/电商/index.html",
    "revision": "8a59f15a3a9ab30688732b6616afafa4"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide.md/index.html",
    "revision": "7029a46be62d6d3c923f9d839239d0fa"
  },
  {
    "url": "guide/index.html",
    "revision": "ee790b59439a86489a86c9fea82afb43"
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
    "revision": "1c116915d4a8e176db1cf4936597b799"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "c156af0921760ddd57a463617a9babb1"
  },
  {
    "url": "tags/Github/index.html",
    "revision": "f2e1be01aa51bbdfc838c10023913a1c"
  },
  {
    "url": "tags/VuePress/index.html",
    "revision": "65e5f2a26d212aeb7e6a113de5090113"
  },
  {
    "url": "tags/关于我/index.html",
    "revision": "e1837c2e6ebf45ae56e611d95eef92e0"
  },
  {
    "url": "tags/博客/index.html",
    "revision": "707b72379bc24f00dbc5d0c5e5a6a4b7"
  },
  {
    "url": "tags/导航网站/index.html",
    "revision": "d3ed0d0b2a20e707e99d0841771bade2"
  },
  {
    "url": "tags/工具箱/index.html",
    "revision": "4e6e9f4bddd31164e9fc3c021321ad92"
  },
  {
    "url": "tags/抖音/index.html",
    "revision": "ce8c3445101c47421866f48593f78d0d"
  },
  {
    "url": "tags/持续集成/index.html",
    "revision": "886d600ea5d7fec6c406afd4e8f9c298"
  },
  {
    "url": "tags/教程/index.html",
    "revision": "b495329dc097c6d7e979dcacd5bd9075"
  },
  {
    "url": "tags/电商/index.html",
    "revision": "90daee695a3bbf8607d044e7477b5e30"
  },
  {
    "url": "tags/站点导航/index.html",
    "revision": "124393f69fb13988ec31d8626bebb76d"
  },
  {
    "url": "tags/评论/index.html",
    "revision": "096f8639b10cc29a4fb986d71b3268b3"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "5c8e5a808522335095b07caa7f5ce30c"
  },
  {
    "url": "timeline/index.html",
    "revision": "0614a75e0570f5663a45a4a429f00b2f"
  },
  {
    "url": "导航站/index.html",
    "revision": "cdfc9e23bba63d7f921c9937f08a9baf"
  },
  {
    "url": "技术文章/博客插件/插件文章.html",
    "revision": "7efd4353a44476013d04eea34d3f496e"
  },
  {
    "url": "技术文章/建站指南/pl.html",
    "revision": "8e26f2b72883cbda179a130eb27c658e"
  },
  {
    "url": "技术文章/建站指南/senran02.html",
    "revision": "69dd0872ad6d101e731755b2435d6df7"
  },
  {
    "url": "技术文章/建站指南/senran03.html",
    "revision": "47cf25b9a24b123a559017fe32669a63"
  },
  {
    "url": "技术文章/建站指南/vuepress.html",
    "revision": "32af6762fcb857455623ca91d8ca3a10"
  },
  {
    "url": "电商自媒体/life.html",
    "revision": "c53e3493d3e16160bf97bd695eae7332"
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
