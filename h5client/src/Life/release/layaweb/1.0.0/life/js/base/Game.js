var Game = (function () {
    function Game(stageWidth, stageHeight, useWebGL) {
        this.stageWidth = 0;
        this.stageHeight = 0;
        this.useWebGL = false;
        this.stage = null;
        this.timer = null;
        this.currentScene = null;
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.useWebGL = useWebGL;
        if (this.useWebGL) {
            Laya.init(this.stageWidth, this.stageHeight, Laya.WebGL);
        }
        else {
            Laya.init(this.stageWidth, this.stageHeight);
        }
        this.stage = Laya.stage;
        this.timer = Laya.timer;
        this.stage.screenMode = "horizontal";
        this.stage.scaleMode = "showall";
        this.stage.bgColor = "#232628";
        this.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        this.stage.alignH = Laya.Stage.ALIGN_CENTER;
    }
    // 返回舞台宽度
    Game.prototype.getStageWidth = function () {
        return this.stageWidth;
    };
    // 返回舞台高度
    Game.prototype.getStageHeight = function () {
        return this.stageHeight;
    };
    // 是否使用WebGL
    Game.prototype.isWebGL = function () {
        return this.useWebGL;
    };
    Game.prototype.setScene = function (scene) {
        if (this.currentScene != null) {
            this.currentScene.removeSelf();
            this.currentScene.destory();
        }
        this.currentScene = scene;
        if (this.currentScene != null) {
            this.currentScene.init();
            Laya.stage.addChild(this.currentScene);
        }
        else {
            console.error("Can't post null to function \"setScene\"");
        }
    };
    Game.prototype.getScene = function () {
        return this.currentScene;
    };
    // 返回Timer实例
    Game.prototype.getTimer = function () {
        return this.timer;
    };
    Game.prototype.showGameStat = function (x, y) {
        laya.utils.Stat.show(0, 0);
    };
    Game.prototype.start = function () {
        this.timer.frameLoop(1, this, this.act, [this.timer.delta]);
    };
    Game.prototype.act = function (delta) {
        if (this.currentScene != null) {
            this.currentScene.act(delta);
        }
    };
    // 暂停
    Game.prototype.pause = function () {
        if (this.currentScene != null) {
            this.currentScene.pause();
        }
    };
    // 恢复
    Game.prototype.resume = function () {
        if (this.currentScene != null) {
            this.currentScene.resume();
        }
    };
    // 销毁
    Game.prototype.destory = function () {
        if (this.currentScene != null) {
            this.currentScene.destory();
        }
    };
    return Game;
}());
//# sourceMappingURL=Game.js.map