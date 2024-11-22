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
    "revision": "ab5d807f38672d96436bd3ae5164c986"
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
    "url": "assets/js/11.f34f5f03.js",
    "revision": "b66f3fce81c3245446b3e434de77fbc5"
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
    "url": "assets/js/14.7aa50509.js",
    "revision": "5bd26611f46a4f7ac401ee1fb93cc2ac"
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
    "url": "assets/js/app.7dd86f38.js",
    "revision": "0c5f07d624fbc612251ea73bfd1dfe0a"
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
    "revision": "fe43f409d8f64718a54843733c6dc5f3"
  },
  {
    "url": "categories/index.html",
    "revision": "7818dc151a1a244b0493447c7b2b3623"
  },
  {
    "url": "categories/VuePress -/index.html",
    "revision": "630d45411da205c2ee545d80a52fa891"
  },
  {
    "url": "categories/vuepress教程/index.html",
    "revision": "e5fde710cc80ad29dd9f009635899f56"
  },
  {
    "url": "categories/作者 -/index.html",
    "revision": "5e215084e7584cced70dc39e942823fe"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1bd1130a3a3d54ece9d8ee2a2ba38102"
  },
  {
    "url": "categories/电商/index.html",
    "revision": "8fa80c35cbb988aa958d7b8cd80efe18"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide.md/index.html",
    "revision": "47d5e0557fbc1ca260f8736a2a0a4c25"
  },
  {
    "url": "guide/index.html",
    "revision": "36b6b62a2990fc0a178f567adc4c0d98"
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
    "revision": "445ddb40cbc712e57dccb76922201ebc"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "2cfbe3d185a5d208d700711e101d1a96"
  },
  {
    "url": "tags/Github/index.html",
    "revision": "5a2594bccca1ea2e78c9cf05b364dd8a"
  },
  {
    "url": "tags/VuePress/index.html",
    "revision": "8f6c6adca87e756053632cb497702d5a"
  },
  {
    "url": "tags/关于我/index.html",
    "revision": "2cf804d9168b0d72c8b55441f8a2d855"
  },
  {
    "url": "tags/博客/index.html",
    "revision": "3c68daa4f4ee4cbbf3a19f889e535c27"
  },
  {
    "url": "tags/导航网站/index.html",
    "revision": "f11acf0662c6d5808e47f529ee033570"
  },
  {
    "url": "tags/工具箱/index.html",
    "revision": "376d9e3aa4edb3a7dcfe01632a0ea5b4"
  },
  {
    "url": "tags/抖音/index.html",
    "revision": "158c8c8d0c2a0dac479589c27d91b137"
  },
  {
    "url": "tags/持续集成/index.html",
    "revision": "8f590bff1981f55b7c9dec147529a4a8"
  },
  {
    "url": "tags/教程/index.html",
    "revision": "eb946f4f7dc99c8c10ce18444f6d348b"
  },
  {
    "url": "tags/电商/index.html",
    "revision": "7c4478edea2f10dfee74b153298c2841"
  },
  {
    "url": "tags/站点导航/index.html",
    "revision": "8712f09fab87098d6ee0ac817fb914ae"
  },
  {
    "url": "tags/评论/index.html",
    "revision": "9b3398fe7b6d3470dd496e3b1d8c0d65"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "1f4631654b9acbc84f81500d3dd1675e"
  },
  {
    "url": "timeline/index.html",
    "revision": "0c8d909803fa32084b1731cc65f4880f"
  },
  {
    "url": "导航站/index.html",
    "revision": "a64f5192cc3cff2afb087a52768e3c0a"
  },
  {
    "url": "技术文章/博客插件/插件文章.html",
    "revision": "5d6be6cd7edffe298317b54effdae73f"
  },
  {
    "url": "技术文章/建站指南/pl.html",
    "revision": "5a61ece6b31e73ff3901a131383ef05c"
  },
  {
    "url": "技术文章/建站指南/senran02.html",
    "revision": "7af1fd9b1200b04730cfa98b658c46ac"
  },
  {
    "url": "技术文章/建站指南/senran03.html",
    "revision": "d46f542d5be91af04a144ef1f2e00394"
  },
  {
    "url": "技术文章/建站指南/vuepress.html",
    "revision": "03cad2e9f7096f19bc354b0c36e5c6ac"
  },
  {
    "url": "电商自媒体/life.html",
    "revision": "bf9be7cb25669b0990cb979ed8abf200"
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
