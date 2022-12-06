(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/trucxanh/Game.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ffe9cnPap9OkbmNjcEe35Aj', 'Game', __filename);
// trucxanh/Game.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        scoreLabel: cc.Label,
        winGamePanel: cc.Node,
        loseGamePanel: cc.Node,
        tableGame: cc.Node,
        score: 0,
        startButton: cc.Node
    },

    onLoad: function onLoad() {

        //window.item = this;
        this.totalScore = this.score;
        this.tableGame.active = false;
        this.node.on("UPDATE_SCORE", this.updateScore, this);
        this.node.on("GAME_WIN", this.winGame, this);
        this.node.on("GAME_RESTART", this.restart, this);
        this.hiddenWinGamePanel();
        this.showScore();
    },
    playGame: function playGame() {
        this.startButton.active = false;
        this.setNewGame();
    },
    updateScore: function updateScore(ev) {
        var _this = this;

        this.isUpdateScore = true;
        var isCorrect = ev.getUserData().isCorrect;
        if (isCorrect) {
            this.newScore = this.totalScore + 10;
        } else {
            this.newScore = this.totalScore - 10;
        }
        cc.tween(this).to(1, { totalScore: this.newScore }, { easing: "sineInOut" }).call(function () {
            _this.isUpdateScore = false;
        }).start();
        this.checkLose();
        ev.stopPropagation();
    },
    winGame: function winGame(ev) {
        ev.stopPropagation();
        this.showWinGamePanel();
        this.node.soundControl && this.node.soundControl.playMusicAudio();
    },
    showWinGamePanel: function showWinGamePanel() {
        this.tableGame.active = false;
        this.winGamePanel.active = true;
    },
    hiddenWinGamePanel: function hiddenWinGamePanel() {
        this.winGamePanel.active = false;
    },
    hiddenLoseGamePanel: function hiddenLoseGamePanel() {
        this.loseGamePanel.active = false;
    },
    setNewGame: function setNewGame() {
        this.node.soundControl && this.node.soundControl.stopMusicAudio();
        this.totalScore = this.score;
        this.tableGame.active = true;
        this.hiddenWinGamePanel();
        this.hiddenLoseGamePanel();
        this.tableGame.emit("RESET_TABLE");
        this.showScore();
        this.node.soundControl && this.node.soundControl.playMusicAudio();
    },
    restart: function restart(ev) {
        ev.stopPropagation();
        this.totalScore = this.score;
        this.tableGame.active = true;
        // todo
        // reset table
        // reset score
        // reset effect win
        this.setNewGame();
    },
    showScore: function showScore() {
        this.scoreLabel.string = 'Score: ' + Math.round(this.totalScore);
    },
    checkLose: function checkLose() {
        if (this.newScore == 0) {
            this.tableGame.active = false;
            this.loseGamePanel.active = true;
            this.node.soundControl && this.node.soundControl.playMusicAudio();
        }
    },
    update: function update() {
        if (this.isUpdateScore) this.showScore();
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
        //# sourceMappingURL=Game.js.map
        