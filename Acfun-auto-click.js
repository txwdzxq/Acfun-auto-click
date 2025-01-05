    // ==UserScript==
    // @name         acfun auto click
    // @namespace    http://tampermonkey.net/
    // @version      2024-12-22
    // @description  acfun auto click!
    // @author       umekoj
    // @match        https://www.acfun.cn/
    // @icon         https://cdn.aixifan.com/ico/favicon.ico
    // @grant        none
    // @license      MIT
    // ==/UserScript==
     
    (function() {
        'use strict';
        const mouse_click_event = new MouseEvent("click", {
            'view': window,
            'bubbles': true,
            'cancelable': true,
            'clientX': 100,
            'clientY': 100
        });
        setInterval(()=>{
            document.querySelector("div[class='fr no-select footer-avatar-ac']").dispatchEvent(mouse_click_event)
        },1000)
    })();

