"use strict";
cc._RF.push(module, 'fffc3StzP5CqqurqKoIbCr1', 'WinGame');
// trucxanh/script/WinGame.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        buttonPlay: cc.Node

    },

    onLoad: function onLoad() {},
    onClick: function onClick() {
        this.node.dispatchEvent(new cc.Event.EventCustom('GAME_RESTART', true));
    }
});

cc._RF.pop();