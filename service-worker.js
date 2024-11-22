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
    "revision": "fa96f8d5f5d052f624a81147e6ca80a1"
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
    "url": "assets/js/17.7d110227.js",
    "revision": "6a0c60aa95433e13a4973cf094699b85"
  },
  {
    "url": "assets/js/18.ae067574.js",
    "revision": "17cf1686fdf7e3ec0721b58c8cc8119e"
  },
  {
    "url": "assets/js/19.58f7355d.js",
    "revision": "d0ccb267e64bb08dac94456ff30e3dca"
  },
  {
    "url": "assets/js/20.6c9f440e.js",
    "revision": "0c603cb3bc771924a2d7a195f2b189a7"
  },
  {
    "url": "assets/js/21.0f9325bf.js",
    "revision": "41b56bfdb46883a49fcc24352f64f044"
  },
  {
    "url": "assets/js/22.81ba8eec.js",
    "revision": "f91be7c5c44a457fbb239360de399e62"
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
    "url": "assets/js/app.28ec112b.js",
    "revision": "985bdce0443e53f25c0e3afd219ebaf0"
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
    "revision": "846da7e41c5a49e3ed3e83139585585e"
  },
  {
    "url": "categories/index.html",
    "revision": "075bfc93d5f800df9234a62c6e645954"
  },
  {
    "url": "categories/VuePress -/index.html",
    "revision": "ed2d46236b37ba36cf45fb1d4770bb6c"
  },
  {
    "url": "categories/vuepress教程/index.html",
    "revision": "a39dd4f466e04a84bba37b3a4f53ec9d"
  },
  {
    "url": "categories/作者 -/index.html",
    "revision": "69bb020703ff3076ea00b51685faef66"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "22b17b354f82758ec044d8f4a06c3406"
  },
  {
    "url": "categories/电商/index.html",
    "revision": "f7de52bf06cbc807cb079be6fce79049"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide.md/index.html",
    "revision": "d90e05442b55e1fcf5559ff28d4c37c6"
  },
  {
    "url": "guide/index.html",
    "revision": "41f2e9fd4070f945066d4959d9823564"
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
    "revision": "a20c4f54a3ee8f0d874cd3aa6dd1f6ca"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "afe54a832816718897b61c405a6c350d"
  },
  {
    "url": "tags/Github/index.html",
    "revision": "e67ebed2fc231a0ff7c5099444f64178"
  },
  {
    "url": "tags/VuePress/index.html",
    "revision": "66c154bb582f20cc8714497478808085"
  },
  {
    "url": "tags/关于我/index.html",
    "revision": "ba34a3c570a302261f8d2d9fda335e7b"
  },
  {
    "url": "tags/博客/index.html",
    "revision": "906a211fd0f2a69f07026ff1f9cb5e47"
  },
  {
    "url": "tags/导航网站/index.html",
    "revision": "78fd4a0da351fe736296b19aa1fd860a"
  },
  {
    "url": "tags/工具箱/index.html",
    "revision": "1ba0dc5fec3b9b518fdc1d768e211623"
  },
  {
    "url": "tags/抖音/index.html",
    "revision": "b5623d90098a0fce66aced2bffc4b604"
  },
  {
    "url": "tags/持续集成/index.html",
    "revision": "bd56210c801f27dbf21845e39561d6fa"
  },
  {
    "url": "tags/教程/index.html",
    "revision": "8116a4dd706d204fac46ff7667977d21"
  },
  {
    "url": "tags/电商/index.html",
    "revision": "92c7978db8f4b452919816cee5b80d44"
  },
  {
    "url": "tags/站点导航/index.html",
    "revision": "f7da02c8de9d354293e8737a715a637f"
  },
  {
    "url": "tags/评论/index.html",
    "revision": "a16d66ae17f8d50b5e149f28c5dcaeac"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "b8204e5b7f649179212708455fe00f7a"
  },
  {
    "url": "timeline/index.html",
    "revision": "2701ba6e2a85112b95c899afbdc28ef8"
  },
  {
    "url": "导航站/index.html",
    "revision": "db11a317174e7761606788af6a9bafd4"
  },
  {
    "url": "技术文章/博客插件/插件文章.html",
    "revision": "925593debf29260c55c67d497dab33c2"
  },
  {
    "url": "技术文章/建站指南/pl.html",
    "revision": "b54dd4a90940007785d7d1a6aedbe359"
  },
  {
    "url": "技术文章/建站指南/senran02.html",
    "revision": "44d1de0a6be63255738c7c871684f89f"
  },
  {
    "url": "技术文章/建站指南/senran03.html",
    "revision": "0768d0d80589f21e98ea50fe8ea11054"
  },
  {
    "url": "技术文章/建站指南/vuepress.html",
    "revision": "832a42644d2a302696cc2183075c40ca"
  },
  {
    "url": "电商自媒体/life.html",
    "revision": "b2c91964bcb547dd8e6ea84a42b4bc43"
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
