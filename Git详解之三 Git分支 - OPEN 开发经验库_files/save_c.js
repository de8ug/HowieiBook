/*! 5318 2013-11-28 16:40:47 */
define(["lib/jquery/1_9","lib/jh","pjt/content_ex/transport/all","kit/cross_msg","pjt/content_ex/view/saveok_v","pjt/content_ex/controller/addTag_c","pjt/content_ex/view/saveing_v","comp/statis","pjt/content_ex/controller/share_c"],function(e,t,i,n,r,o,a,s,c){var u=function(){var u={},d={},p=function(){u.controller={},d.showSaving(),u.viewSaving.statusTo(1),u.showSt2Timer=setTimeout(function(){u.viewSaving.statusTo(2)},1e3)};return u.clearPage=function(i){i=i||{};var n=document.getElementById("page");return i.del?n.innerHTML="":t.forEach([function(){e(u.viewSaveok.dom).hide()},function(){u.controller.addTag.hide()},function(){u.controller.share.hide()},function(){},function(){}],function(e){try{e()}catch(t){}}),{then:function(e){n&&e(n)}}},d.showSaving=function(){u.viewSaving=a(d),u.clearPage().then(function(e){e.appendChild(u.viewSaving.dom),u.viewSaving.setting({statusNum:4,randomStarusRate:!0})})},u.showShare=function(){u.closeViewBlock=!0,u.controller.share||(u.controller.share=c({key:u.oSaveImageRsp.data.records,type:"article",title:u.sRetTitle,showTagEdit:!0,pic:u.sTopicImage}),u.controller.share.on("close",function(){d.closeView(!0)}),u.controller.share.viewShare.on("clickGotoAddTagBtn",function(){d.gotoAddTag()}),u.controller.share.viewShare.on("clickShareBtn",function(e,t){s.trackEvent("插件保存文章后点击分享渠道","按钮"+t.src.getAttribute("data-statis-sign"))})),n.postMessage(parent,{cmd:"SET_IFRAME_TOPCENTER",width:850,height:100}),u.clearPage().then(function(t){var i=u.controller.share.render();t.appendChild(i),e(i).show()})},u.gotoSaveok=function(){u.closeViewBlock=!1,u.viewSaveok=r(d),e(u.viewSaveok).on("clickSeeLink",function(){s.trackEvent("插件保存文章后点击查看")}),e(u.viewSaveok).on("clickCloseBtn",function(){d.closeView(!0)}),e(u.viewSaveok).on("clickShareBtn",function(){u.controller.share||s.trackEvent("插件保存文章后点击分享按钮"),u.showShare()}),u.clearPage({del:!0}).then(function(e){e.appendChild(u.viewSaveok.dom),u.viewSaveok.willClose()})},u.getText=function(e){var t,i,n=e.nodeType,r="";if(n){if(1===n||9===n||11===n){if("string"==typeof e.textContent)return e.textContent;if("string"==typeof e.innerText)return e.innerText.replace(/\r/g,"");for(e=e.firstChild;e;e=e.nextSibling)r+=u.getText(e)}else if(3===n||4===n)return e.nodeValue}else for(t=0;i=e[t];t++)8!==i.nodeType&&(r+=u.getText(i));return r},u.getTopicImage=function(e){var t,i,n=e.getElementsByTagName("img");for(t=0,i=n.length;i>t;++t)if(n[t].width>=250&&n[t].height>=100)return n[t].src;return null},u.fixTitle=function(t){return e("<div>"+t+"</div>").text()},u.statisSaveArticleCost=function(e){3e3>e?s.trackEvent("插件保存文章耗时3秒内",e):5e3>e?s.trackEvent("插件保存文章耗时3-5秒内",e):1e4>e?s.trackEvent("插件保存文章耗时5-10秒内",e):15e3>e?s.trackEvent("插件保存文章耗时10-15秒内",e):25e3>e?s.trackEvent("插件保存文章耗时15-25秒内",e):35e3>e?s.trackEvent("插件保存文章耗时25-35秒内",e):s.trackEvent("插件保存文章耗时超过35秒",e)},d.saveRet=function(e){clearTimeout(u.showSt2Timer),u.viewSaving.statusTo(3),d.setBdstoken(e.bdstoken);var t=document.createElement("div");t.innerHTML=e.oRet.content,u.statisSaveArticleCost(e.oRet.iSaveArticleCost);var r=u.getText(t);u.sTopicImage=u.getTopicImage(t),u.sRetTitle=u.fixTitle(e.oRet.title),e={records:[{title:u.sRetTitle,text:r,res_src:u.sTopicImage,content:'<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'+e.oRet.content,url:e.sRefer,from:e.sFrom,type:"article"}]},i.saveFav({data:{param:JSON.stringify(e),bdstoken:u.bdstoken},ok:function(e){u.oSaveImageRsp=e,u.gotoSaveok(e),u.viewSaving.statusTo(4)},bad:function(e){return-35008===e.status?(n.postMessage(parent,{cmd:"GO_LOGIN",okCallbackData:{srcSign:"article_save_c"}}),!1):void 0}})},d.gotoAddTag=function(){var e={type:"article",aKey:u.oSaveImageRsp.data.records,bdstoken:u.bdstoken};s.trackEvent("编辑标签","插件保存文章后"),n.postMessage(parent,{cmd:"SET_IFRAME_TOPCENTER",width:850,height:100}),u.showAddTag(e)},u.showAddTag=function(t){return u.closeViewBlock=!0,u.controller.addTag||(u.controller.addTag=o(t),e(u.controller.addTag).on("saveTagsOk",function(){u.showSaveok({tips:"添加标签成功"})})),u.clearPage().then(function(t){var i=u.controller.addTag.render();t.appendChild(i),e(i).show()}),u.controller.addTag},u.showSaveok=function(t){u.viewSaveok.showTips(t),u.clearPage().then(function(){e(u.viewSaveok.dom).show(),u.viewSaveok.willClose()})},d.closeView=function(e){(e||!u.closeViewBlock)&&n.postMessage(parent,{cmd:"CLOSE_IFRAME"})},d.setBdstoken=function(e){window.__CONF__=window.__CONF__||{bdstoken:e},u.bdstoken=window.__CONF__.bdstoken},d.render=function(){return u.viewSaving.dom},p(),d};return u});