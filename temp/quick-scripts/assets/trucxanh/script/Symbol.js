(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/trucxanh/script/Symbol.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'bb9ef5r4lRFqJcW+ymuvU9X', 'Symbol', __filename);
// trucxanh/script/Symbol.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        staticSymbol: cc.Node,
        label: cc.Label,
        cover: cc.Node,
        symbols: {
            default: [],
            type: cc.SpriteFrame
        }

    },

    onLoad: function onLoad() {
        this.index = 0;

        this.node.on("SET_ID", this.changeToSymbol, this);
        this.node.on("SET_INDEX", this.setIndex, this);
        this.node.on("RESET_SYMBOL", this.resetSymbol, this);
        this.node.on("HIDDEN_SYMBOL", this.hiddenSymbol, this);
        this.node.on("DISABLED_SYMBOL", this.disabledSymbol, this);
        this.node.on("ENABLED_SYMBOL", this.enabledSymbol, this);
        this.node.on("HIDDEN_COVER", this.flipShow, this);
        this.node.on("RESET_COVER", this.flipHide, this);
        this.node.on("SHOW_COVER", this.showCover, this);
    },
    onClick: function onClick(evt, index) {
        this.clickItemEvent = new cc.Event.EventCustom('SYMBOL_HAS_CLICK', true);
        this.clickItemEvent.setUserData({
            id: this.symbolID,
            index: this.index
        });
        this.node.dispatchEvent(this.clickItemEvent);
    },
    flipShow: function flipShow() {
        var _this = this;

        this.node.runAction(cc.sequence(cc.scaleTo(0.2, 0, 1), cc.callFunc(function () {
            _this.cover.active = false;
        }), cc.scaleTo(0.2, 1, 1)));
    },
    flipHide: function flipHide() {
        var _this2 = this;

        this.node.runAction(cc.sequence(cc.scaleTo(0.2, 0, 1), cc.callFunc(function () {
            _this2.cover.active = true;
        }), cc.scaleTo(0.2, 1, 1)));
    },
    showCover: function showCover() {
        this.cover.active = true;
    },
    hiddenSymbol: function hiddenSymbol() {
        this.node.opacity = 0;
    },
    disabledSymbol: function disabledSymbol() {
        this.node.active = false;
    },
    enabledSymbol: function enabledSymbol() {
        this.node.active = true;
    },
    getSymbolID: function getSymbolID() {
        return this.symbolID;
    },
    setIndex: function setIndex(num) {
        this.label.string = num;
        this.index = num;
    },
    resetSymbol: function resetSymbol(i) {
        var delay = i * 0.1;
        this.node.runAction(cc.sequence(cc.delayTime(delay), cc.fadeIn(0.1)));
    },
    changeToSymbol: function changeToSymbol(symbolID) {
        var asset = this.symbols[symbolID];
        this.symbolID = symbolID;
        this.staticSymbol.getComponent(cc.Sprite).spriteFrame = asset;
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
        //# sourceMappingURL=Symbol.js.map
        