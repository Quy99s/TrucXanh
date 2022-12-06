(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/trucxanh/script/WinGame.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'fffc3StzP5CqqurqKoIbCr1', 'WinGame', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=WinGame.js.map
        