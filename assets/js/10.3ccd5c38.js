(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{392:function(t,e,n){},431:function(t,e,n){"use strict";n(392)},444:function(t,e,n){"use strict";n.r(e);var s=n(19),a=n(1);const o={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}};var u={data:()=>({rawPopupConfig:{message:"有新的内容更新",buttonText:"刷新"},updateEvent:null}),created(){s.a.$on("sw-updated",this.onSWUpdated),!0==={message:"有新的内容更新",buttonText:"刷新"}&&(this.rawPopupConfig=o)},computed:{popupConfig(){return Object(a.h)(this,this.rawPopupConfig)},enabled(){return Boolean(this.popupConfig&&this.updateEvent)},message(){const t=this.popupConfig;return t&&t.message||o["/"].message},buttonText(){const t=this.popupConfig;return t&&t.buttonText||o["/"].buttonText}},methods:{onSWUpdated(t){this.updateEvent=t},reload(){this.updateEvent&&(this.updateEvent.skipWaiting().then(()=>{location.reload(!0)}),this.updateEvent=null)}}},i=(n(431),n(2)),p=Object(i.a)(u,(function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",(function(){return[t.enabled?e("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)),e("br"),t._v(" "),e("button",{on:{click:t.reload}},[t._v(t._s(t.buttonText))])]):t._e()]}),{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)}),[],!1,null,"ef6a919a",null);e.default=p.exports}}]);