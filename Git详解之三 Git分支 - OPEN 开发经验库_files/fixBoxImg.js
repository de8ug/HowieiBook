/*! 3948 2013-9-17 14:8:14 */
define(function(){var e=function(){var t={},n={},i=function(e){t.boxWidth=e.width,t.boxHeight=e.height};return n.fix=function(n,i){var o=i.width,s=i.height,r=e.parseSize({boxWidth:t.boxWidth,boxHeight:t.boxHeight,imgWidth:o,imgHeight:s});return n&&(n.width=r.width,n.height=r.height),r},e.parseSize=function(e){var t,n,i=e.imgWidth/e.imgHeight,o=e.boxWidth/e.boxHeight;return o>i?(t=e.boxWidth,n=t/i):(n=e.boxHeight,t=n*i),{width:t,height:n,iImgRatio:i,iBoxRatio:o}},i.apply(n,arguments),n};return e});