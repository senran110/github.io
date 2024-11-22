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
    "revision": "89fb52d7b8447adac61c6d5fba7cc56d"
  },
  {
    "url": "assets/css/0.styles.ade29b3b.css",
    "revision": "907684042f2bdc7ed591c1f1a84986ec"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.d308820f.js",
    "revision": "6239a32ddaf926a9c96f8ec291a168a3"
  },
  {
    "url": "assets/js/10.6d3e279f.js",
    "revision": "3980be051d51e4f86957bb4e5a82470b"
  },
  {
    "url": "assets/js/14.21b0d622.js",
    "revision": "12632ceafde380e0e6fb1640180c6851"
  },
  {
    "url": "assets/js/15.34cc20d6.js",
    "revision": "aa7aff49956fc7c183f631d062c017cb"
  },
  {
    "url": "assets/js/16.9321bfc2.js",
    "revision": "7ed522323d5b3030f3a79b685ec4e17a"
  },
  {
    "url": "assets/js/17.55003d14.js",
    "revision": "b8a768fbc8d31a6580e5e5929593b06f"
  },
  {
    "url": "assets/js/18.090f8cbd.js",
    "revision": "d4e7659994963118d58353a965965df2"
  },
  {
    "url": "assets/js/19.9f0780e0.js",
    "revision": "4a05b7539f58802a381ce069e5ba4e45"
  },
  {
    "url": "assets/js/2.449dd96a.js",
    "revision": "92eaec36aac464755080866f622cbb5d"
  },
  {
    "url": "assets/js/20.94c8b394.js",
    "revision": "3cda8290fa4103d05ace11c2302c4e85"
  },
  {
    "url": "assets/js/21.8834873a.js",
    "revision": "94b0e988213c36a0e69b99ce62d013cb"
  },
  {
    "url": "assets/js/22.dd52110b.js",
    "revision": "8e13a6239c742451fde5c0b7b110618a"
  },
  {
    "url": "assets/js/23.7bd7caf0.js",
    "revision": "2f6a79534d7190a0c73f24a7c4d9d368"
  },
  {
    "url": "assets/js/24.05331d8b.js",
    "revision": "d2510767a8194211bc3d0a0814510bad"
  },
  {
    "url": "assets/js/25.45aa19db.js",
    "revision": "f97bc3f46d94b4461da4a985efeaa24a"
  },
  {
    "url": "assets/js/26.2b6f7e91.js",
    "revision": "a782f35219d9beaa4e0f633a20e76bac"
  },
  {
    "url": "assets/js/27.2503b35e.js",
    "revision": "baa82d0b9f2dcd092dde542f777211e1"
  },
  {
    "url": "assets/js/28.77bedc1b.js",
    "revision": "e621b693ee3b3cfd16a13b53642ae2a7"
  },
  {
    "url": "assets/js/29.0dd2c65d.js",
    "revision": "16cdbe14c5e07600ff8e6275928d2fc4"
  },
  {
    "url": "assets/js/3.f60f7135.js",
    "revision": "743e0ecefd52abcd710a5b4199dc6d3f"
  },
  {
    "url": "assets/js/30.3333f3c0.js",
    "revision": "9dcdc4e03a28dc11d4edb5dbe621eff7"
  },
  {
    "url": "assets/js/31.313c8ee7.js",
    "revision": "3ebaa56d715b3563fe32f5eec7141744"
  },
  {
    "url": "assets/js/32.52544b06.js",
    "revision": "46ab0ca11e731c34509cd8ebe0247249"
  },
  {
    "url": "assets/js/33.08e01862.js",
    "revision": "e7a18e0632b69c1c5ce07ffeed7de2b5"
  },
  {
    "url": "assets/js/34.78da5dbf.js",
    "revision": "51a9fddc1db54d4ccb6965d0ac751e7a"
  },
  {
    "url": "assets/js/35.50413094.js",
    "revision": "8efafac36588e368d08ffbad0510288c"
  },
  {
    "url": "assets/js/36.74c2fb36.js",
    "revision": "b2f3a7526be9aced34533077bb88cf98"
  },
  {
    "url": "assets/js/37.d5f1df7c.js",
    "revision": "94cdb1250e2be11cc1616e14c7d1db26"
  },
  {
    "url": "assets/js/38.d513413f.js",
    "revision": "6fee1eb8f5b7adc4d206ea93ea89d5d4"
  },
  {
    "url": "assets/js/39.9f9649a2.js",
    "revision": "c5a9442999d2d6664d68856604c87980"
  },
  {
    "url": "assets/js/4.7d1639d6.js",
    "revision": "8c6b72c1121aceb178f104c7046f1ea3"
  },
  {
    "url": "assets/js/40.0591be74.js",
    "revision": "23fe3fa49f7711d4fd89f62bb388129f"
  },
  {
    "url": "assets/js/41.c664e9db.js",
    "revision": "1b93b04cbecf6626d47b307596309006"
  },
  {
    "url": "assets/js/42.7caa5e5f.js",
    "revision": "a1c42d20608eab9cfcb12cbf7fe92042"
  },
  {
    "url": "assets/js/43.df80feaa.js",
    "revision": "4377449fb1b3e91178203af041e7739b"
  },
  {
    "url": "assets/js/44.9894c05d.js",
    "revision": "7b4e7b47eff1cb2bbf4a6c4628553187"
  },
  {
    "url": "assets/js/45.100122eb.js",
    "revision": "7f66cd67f36028184145ec056db2fc6c"
  },
  {
    "url": "assets/js/46.c0bffae6.js",
    "revision": "6ee50bbec0656a4fdf6d7beac53dfeb3"
  },
  {
    "url": "assets/js/47.c12a8dfa.js",
    "revision": "5bf4aadecec3633cf8fc0256c001d220"
  },
  {
    "url": "assets/js/48.b28667a3.js",
    "revision": "c6218c0c7ec8aab817b978a26a83f43d"
  },
  {
    "url": "assets/js/49.d5211a3c.js",
    "revision": "7f3a7553fcb22540205e1e7fd27fbf05"
  },
  {
    "url": "assets/js/5.e606ebdb.js",
    "revision": "f0f5aae9a8fa85faa05825dcc1661b4a"
  },
  {
    "url": "assets/js/50.d032412d.js",
    "revision": "d8e3b9939dfefbe93ea285617cae5127"
  },
  {
    "url": "assets/js/51.3cfcae72.js",
    "revision": "2f7e7c4f8a9591aff013317ae89e41b4"
  },
  {
    "url": "assets/js/52.b7d2442c.js",
    "revision": "acdf68c0a90211a97929c2d174b50d81"
  },
  {
    "url": "assets/js/6.b6327c11.js",
    "revision": "8dadfd37ffceb41b292850ea72f9e373"
  },
  {
    "url": "assets/js/7.bf40018e.js",
    "revision": "d334ce74b85949c564933957885a1e15"
  },
  {
    "url": "assets/js/8.2ca06e4a.js",
    "revision": "39ec67588f298c66b4bb5ac4a5360c37"
  },
  {
    "url": "assets/js/9.af021e96.js",
    "revision": "1c35c6de08180dbe1a82a4de56290891"
  },
  {
    "url": "assets/js/app.ab4486eb.js",
    "revision": "82097d2baaca2a5d336522c77a09a5c1"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~docsearch.94f7372b.js",
    "revision": "0d7db3a5cfc37aad52b9d8297426e765"
  },
  {
    "url": "assets/js/vendors~flowchart.31ba58e1.js",
    "revision": "a553e4366b644a32ccdce3bb8d943d7e"
  },
  {
    "url": "categories/guide/index.html",
    "revision": "4f82c5a625de28e3712c3db709554bb7"
  },
  {
    "url": "categories/index.html",
    "revision": "d02b6a9fac66eb7eb2c188fcc14d6ec7"
  },
  {
    "url": "categories/VuePress -/index.html",
    "revision": "74b1dbf518075ef8222a52d183ca5912"
  },
  {
    "url": "categories/vuepress教程/index.html",
    "revision": "741f2b2b90fbde9d1c54225a2db6a2a7"
  },
  {
    "url": "categories/作者 -/index.html",
    "revision": "fcbaa4236412a311068e9e96f4669439"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "29da37ffea4c38a9c4029bb6da0f0d14"
  },
  {
    "url": "categories/电商/index.html",
    "revision": "5914a929bec777b62205f16541c554fe"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide.md/index.html",
    "revision": "0edad09e7c57fdaae658ffc806967443"
  },
  {
    "url": "guide/index.html",
    "revision": "9ace9336b5dca9eaf1bbe61ff3564b45"
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
    "revision": "c6de99365b860b6f53fc067503c355ac"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "b0acd6d72b5a107be80d07cec0e5d75a"
  },
  {
    "url": "tags/Github/index.html",
    "revision": "a4a762c363fb44d07df1d333b44c6aea"
  },
  {
    "url": "tags/VuePress/index.html",
    "revision": "7516fa7040dd30facbdf3af1877e8028"
  },
  {
    "url": "tags/关于我/index.html",
    "revision": "3c2c014ea0de709510e89ea640ff829d"
  },
  {
    "url": "tags/博客/index.html",
    "revision": "4370901abdea42a9e0a45348d0da8bf7"
  },
  {
    "url": "tags/导航网站/index.html",
    "revision": "405abfd11e8c6e18721f1d1fe6d1cbb7"
  },
  {
    "url": "tags/工具箱/index.html",
    "revision": "6be23c204492f7084d6af6e301d072ac"
  },
  {
    "url": "tags/抖音/index.html",
    "revision": "d813358441a0f6ef685773ee22c970f9"
  },
  {
    "url": "tags/持续集成/index.html",
    "revision": "60a8c9355fef1cbe94554159f75d435a"
  },
  {
    "url": "tags/教程/index.html",
    "revision": "0c5e47042db0334e110078c3f251ee43"
  },
  {
    "url": "tags/电商/index.html",
    "revision": "988aa10cf3639653bdf5f05b84145428"
  },
  {
    "url": "tags/站点导航/index.html",
    "revision": "cae68af7d48f320042cdce21ffdf0871"
  },
  {
    "url": "tags/评论/index.html",
    "revision": "aa061b76fda1d5caad6994526831e60d"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "ee90965f9bcdc758712c91495ba3fd5f"
  },
  {
    "url": "timeline/index.html",
    "revision": "50ada919be4ed84880a7c585ae64ad0d"
  },
  {
    "url": "导航站/index.html",
    "revision": "7ccc6e8ddfec6a77008f8f42fd360b03"
  },
  {
    "url": "技术文章/博客插件/插件文章.html",
    "revision": "534cf57150969e504ac19c42b17a809e"
  },
  {
    "url": "技术文章/建站指南/pl.html",
    "revision": "547496f66229524681c9f16e8ac30dbf"
  },
  {
    "url": "技术文章/建站指南/senran02.html",
    "revision": "ed77c79d0c73b775ebc79607c4fa23ec"
  },
  {
    "url": "技术文章/建站指南/senran03.html",
    "revision": "4964f4f16040ee9e67284468f55a14fb"
  },
  {
    "url": "技术文章/建站指南/vuepress.html",
    "revision": "c502da801cd72611cfd915886c4cedbf"
  },
  {
    "url": "电商自媒体/life.html",
    "revision": "75a162cc261502801897b38d4d11ae7c"
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
