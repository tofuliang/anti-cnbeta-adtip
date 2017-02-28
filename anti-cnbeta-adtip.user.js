// ==UserScript==
// @name         CnBeta辅助工具
// @namespace    https://blog.tofuliang.tk/
// @version      4.1
// @description  CnBeta上的辅助性工具，用于去除广告等
// @author       tofuliang
// @match        http://*.cnbeta.com/*
// @grant        unsafeWindow
// @run-at       document-body
// ==/UserScript==

(function() {
    'use strict';
    
    var uw = this;
    var ib = uw.Node.prototype.insertBefore;
    var sa = uw.Element.prototype.setAttribute;
    
    uw.Node.prototype.insertBefore = function(t, p) {
        if (t.tagName === 'DIV' && this.tagName === 'BODY' && -1 !==(t.textContent || t.innerText).indexOf('请将我们加入广告屏蔽插件的白名单')) {
            uw.Node.prototype.insertBefore = ib;
            return;
        }
        ib.apply(this, Array.prototype.slice.call(arguments));
    };
    
    uw.Element.prototype.setAttribute = function(name,attr){
        if('style' == name && 'padding-top:40px' === attr){
            uw.Element.prototype.setAttribute=sa;
            return;
        }
        sa.apply(this, Array.prototype.slice.call(arguments));
    };
    
}).apply(unsafeWindow);
