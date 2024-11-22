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
    "revision": "02287c0b14e24a4fc01e17dafc02c8a9"
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
    "url": "assets/js/17.6be0a830.js",
    "revision": "2c10e144879524787c962cec0a053832"
  },
  {
    "url": "assets/js/18.3d16051b.js",
    "revision": "247430b4c4ac1fd5ef488626393f7d91"
  },
  {
    "url": "assets/js/19.0339ef4d.js",
    "revision": "21654a909ed03865313e4d35a670012a"
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
    "url": "assets/js/22.b87a62b3.js",
    "revision": "6c33f648258562ba398beae3644f7f3f"
  },
  {
    "url": "assets/js/23.0163a860.js",
    "revision": "05eeca91d612851dbe75504276b23669"
  },
  {
    "url": "assets/js/24.811bbcea.js",
    "revision": "f3dbfbc5e5ed0e530f640077201c70a5"
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
    "url": "assets/js/app.e5f7c15e.js",
    "revision": "a8983c18ce206ba618930a27eea081fd"
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
    "revision": "b3c2c873b7bcda7cb4a2d5e8f731e272"
  },
  {
    "url": "categories/index.html",
    "revision": "3d2a58880c19fcf3aa2c8c7cd1bba173"
  },
  {
    "url": "categories/VuePress -/index.html",
    "revision": "46948663d3baf507e6837cef7c35338f"
  },
  {
    "url": "categories/vuepress教程/index.html",
    "revision": "acf63b9fa27478ce64c0258641696540"
  },
  {
    "url": "categories/作者 -/index.html",
    "revision": "918b2495f1426d38737c7afa8ef4f3d1"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "14deba5a8f3aaa1af15b67ffc2592b62"
  },
  {
    "url": "categories/电商/index.html",
    "revision": "4c48b5ed3ddbf498dd234646484b892c"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide.md/index.html",
    "revision": "6b80dac94afc843429e234dd5b853850"
  },
  {
    "url": "guide/index.html",
    "revision": "0804e64fd32938dd83f8e5a067b840e4"
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
    "revision": "eea83904d4e873526592f9401d9dbbbf"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "0451809d57cd5d976f327f4e25e85c49"
  },
  {
    "url": "tags/Github/index.html",
    "revision": "7d333aa8a6b5fbdca5e9e0b3bbc47661"
  },
  {
    "url": "tags/VuePress/index.html",
    "revision": "b3d9d6c48fedcfe4ec237271f0719e26"
  },
  {
    "url": "tags/关于我/index.html",
    "revision": "6a58436fe85451d485053000d5b6c8de"
  },
  {
    "url": "tags/博客/index.html",
    "revision": "0f8e9d79fa29e6192af9b52bbc787f53"
  },
  {
    "url": "tags/导航网站/index.html",
    "revision": "4fc653b5a64fe1a9f67e4b77d0a9c353"
  },
  {
    "url": "tags/工具箱/index.html",
    "revision": "b83fdec0be93d4e31a3373499ef1c65c"
  },
  {
    "url": "tags/抖音/index.html",
    "revision": "0b7d974b9d2f64fe7f295abe82d569b8"
  },
  {
    "url": "tags/持续集成/index.html",
    "revision": "86e988b50426c865fe691c333bda3141"
  },
  {
    "url": "tags/教程/index.html",
    "revision": "cc8b8b590048de70ae9720e66a01fbe8"
  },
  {
    "url": "tags/电商/index.html",
    "revision": "faa2215eb90a97a32e97fd608b5ceaf2"
  },
  {
    "url": "tags/站点导航/index.html",
    "revision": "acda41df95abcfe323c62d2f8e27e650"
  },
  {
    "url": "tags/评论/index.html",
    "revision": "3d83c4bbd218cf3e9bd966e430e34e7d"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "3a7e48d16fb916c3300abe09977d51a5"
  },
  {
    "url": "timeline/index.html",
    "revision": "f4cd98a80294b18fa2d1f3595c01e1eb"
  },
  {
    "url": "导航站/index.html",
    "revision": "53cb87c1a1e242cf1176357c19390b7d"
  },
  {
    "url": "技术文章/博客插件/插件文章.html",
    "revision": "0ed7efe0dce06e3c734030465243ac1e"
  },
  {
    "url": "技术文章/建站指南/pl.html",
    "revision": "3903bdf85c5d4632b31a7af101bb5f06"
  },
  {
    "url": "技术文章/建站指南/senran02.html",
    "revision": "6bf0ead771afc6ac37ec3fc4eee7d340"
  },
  {
    "url": "技术文章/建站指南/senran03.html",
    "revision": "fefec3eb16693b23ff86c17c8f89b405"
  },
  {
    "url": "技术文章/建站指南/vuepress.html",
    "revision": "c3daca2064358ceb51f257d9d0de8587"
  },
  {
    "url": "电商自媒体/life.html",
    "revision": "acd2bb3a1456cc9f9574706f3bf427c0"
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
