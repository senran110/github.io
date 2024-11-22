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
    "revision": "27d1a30775bb77e74bc2250a241c7b10"
  },
  {
    "url": "assets/css/0.styles.27853926.css",
    "revision": "f1db2674e92905bce6bdb4df3954b9b2"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.5a5402c8.js",
    "revision": "9e868df251ef7985b8dd78d150e1e0a0"
  },
  {
    "url": "assets/js/10.b88ad0a6.js",
    "revision": "a9c44044a011497a98492d7ade832686"
  },
  {
    "url": "assets/js/11.5d6d9378.js",
    "revision": "5ec3eb273f58c8917b9d4b832ed33d92"
  },
  {
    "url": "assets/js/12.c33144c4.js",
    "revision": "7c9c3b0b9ecc1c579410977bca66922a"
  },
  {
    "url": "assets/js/13.00e30bd6.js",
    "revision": "6abef1c0f8facf555a78614901c92430"
  },
  {
    "url": "assets/js/14.113e70df.js",
    "revision": "4913673ff5db0e4ab7e2221afb7184bb"
  },
  {
    "url": "assets/js/15.9192753e.js",
    "revision": "2701f2bd7828437c2618df2b8b283e87"
  },
  {
    "url": "assets/js/16.a2225e11.js",
    "revision": "574abfaf061b33d6d2643f1e55663860"
  },
  {
    "url": "assets/js/17.4bd17b56.js",
    "revision": "cb5b95073b1964e64dec7e0918e041b8"
  },
  {
    "url": "assets/js/18.3d16051b.js",
    "revision": "247430b4c4ac1fd5ef488626393f7d91"
  },
  {
    "url": "assets/js/19.58f7355d.js",
    "revision": "d0ccb267e64bb08dac94456ff30e3dca"
  },
  {
    "url": "assets/js/20.0051af0d.js",
    "revision": "61f9e522e43ba53baad3645be09e2781"
  },
  {
    "url": "assets/js/21.5a136698.js",
    "revision": "67d498f9c87c4cd517d756635952b9a9"
  },
  {
    "url": "assets/js/22.f46a530f.js",
    "revision": "81d72806cb3551a0511668fdf43babf9"
  },
  {
    "url": "assets/js/23.13df71d6.js",
    "revision": "dc1951f1f148f43190bc5b04ff29f31b"
  },
  {
    "url": "assets/js/24.b28654c1.js",
    "revision": "410cb7d9a76395d629e3d5e0a139987e"
  },
  {
    "url": "assets/js/4.a538abc9.js",
    "revision": "9fc2b7af491923c7d4e092febea9b88c"
  },
  {
    "url": "assets/js/5.0b637880.js",
    "revision": "b809f5bf78b0c06bd4eabbae36af2f26"
  },
  {
    "url": "assets/js/6.d3675998.js",
    "revision": "808856fe906e4956f57793657d4142f2"
  },
  {
    "url": "assets/js/7.dae50ee5.js",
    "revision": "c34f836a686d88698bfbd874b2a184be"
  },
  {
    "url": "assets/js/8.4b1f581e.js",
    "revision": "b1c3bca426485b4ae1a1b57e13c4086d"
  },
  {
    "url": "assets/js/9.0657792b.js",
    "revision": "229f2a45f6c66d4f406c2c10ce5303d2"
  },
  {
    "url": "assets/js/app.580b720d.js",
    "revision": "8566c5e212de730e2bec736a7879ebe9"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.690141eb.js",
    "revision": "2d448ad5632ad4ecb76ac3d33d9f6f79"
  },
  {
    "url": "categories/guide/index.html",
    "revision": "5839f56a9a313e68b7698a038db024ab"
  },
  {
    "url": "categories/index.html",
    "revision": "64efd103d277e564687df094d8cba1c1"
  },
  {
    "url": "categories/VuePress -/index.html",
    "revision": "4f71af17173382846354974158352fce"
  },
  {
    "url": "categories/vuepress教程/index.html",
    "revision": "1c3effc5a453476dd86ab5b1d6e01f1b"
  },
  {
    "url": "categories/作者 -/index.html",
    "revision": "b63c84cabd50479bc4f5ff93c5916643"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "92197f68bb24ceaa4db87238ddffe0ce"
  },
  {
    "url": "categories/电商/index.html",
    "revision": "4fdce24edb7387e394c1f5bf3d1e3251"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide.md/index.html",
    "revision": "dc9bcc2b8aa197191367370d87e11ac0"
  },
  {
    "url": "guide/index.html",
    "revision": "7faf9aaa8f423e3112f45db83f49bdd3"
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
    "revision": "4676cde08dc54215cafdb0743d194e72"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "8b4323967e4bb74ad457e024dc272b7e"
  },
  {
    "url": "tags/Github/index.html",
    "revision": "8a9240f1ae218d3c0393df5d6811b95e"
  },
  {
    "url": "tags/VuePress/index.html",
    "revision": "e240f1f9bd753d70830e573851627175"
  },
  {
    "url": "tags/关于我/index.html",
    "revision": "cda4eb4f6dce629640f0265e413e88c8"
  },
  {
    "url": "tags/博客/index.html",
    "revision": "3c5e48d5e1b63798171ea385d0e5006c"
  },
  {
    "url": "tags/导航网站/index.html",
    "revision": "c2e1fc0ba2e6589919c6751b0942e981"
  },
  {
    "url": "tags/工具箱/index.html",
    "revision": "3116d4f16ab701c88f6f054451d4b9b4"
  },
  {
    "url": "tags/抖音/index.html",
    "revision": "f42bbc47c8e3bcfcb6a714cefd67cf63"
  },
  {
    "url": "tags/持续集成/index.html",
    "revision": "934fb30c21f2c8913e303fbe00303243"
  },
  {
    "url": "tags/教程/index.html",
    "revision": "37ab51e97994dc8bdec1cd7b80c243a6"
  },
  {
    "url": "tags/电商/index.html",
    "revision": "8a1f7b66dc9d704699620c5087864768"
  },
  {
    "url": "tags/站点导航/index.html",
    "revision": "f4865560dbc7c7a74885b54bd28a335e"
  },
  {
    "url": "tags/评论/index.html",
    "revision": "e372ad26f1ab1fcf27286dd5bd2d51b0"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "f17d9b86663b52155719df4f28cdda25"
  },
  {
    "url": "timeline/index.html",
    "revision": "84423aede622d6a1ec91648e94458997"
  },
  {
    "url": "导航站/index.html",
    "revision": "21535ac790b36096dc940af5d0b4d5cc"
  },
  {
    "url": "技术文章/博客插件/插件文章.html",
    "revision": "85dc0780604325b81370cf0f38f7f060"
  },
  {
    "url": "技术文章/建站指南/pl.html",
    "revision": "cbc42f0a3d74c58a146603a2d6253325"
  },
  {
    "url": "技术文章/建站指南/senran02.html",
    "revision": "8c129ce98c44cbd595fda89cda067f60"
  },
  {
    "url": "技术文章/建站指南/senran03.html",
    "revision": "26e40ce92063cc0d58ac1de08bbe204f"
  },
  {
    "url": "技术文章/建站指南/vuepress.html",
    "revision": "b1ebe2c9e6a16c94167d4baced7f311d"
  },
  {
    "url": "电商自媒体/life.html",
    "revision": "825bb3e161266b634ccaddb86a871172"
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
