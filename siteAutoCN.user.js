// ==UserScript==
// @name         sitesAutoCN
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://developer.mozilla.org/*
// @match        *://docs.microsoft.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
     var pageURL = window.location.href;
     var pageHostname = window.location.hostname;
     var pagePathname = window.location.pathname;
     var siteMatchingMap = [
         ["developer.mozilla.org/en-US/","en-US","zh-CN"],
         ["docs.microsoft.com/zh-cn/", "zh-cn", "zh-cn"],
         ["en.wikipedia.org/","en","zh"]
     ];

})();
