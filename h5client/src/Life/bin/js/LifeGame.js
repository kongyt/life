var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LifeGame = (function (_super) {
    __extends(LifeGame, _super);
    function LifeGame(stageWidth, stageHeight, useWebGL) {
        var _this = _super.call(this, stageWidth, stageHeight, useWebGL) || this;
        _this.init();
        return _this;
    }
    LifeGame.prototype.init = function () {
        this.map = new GameMap();
        this.stage.addChild(this.map);
        Laya.loader.load(["res/atlas/comp.json",], Laya.Handler.create(this, this.onLoaded), null, Laya.Loader.ATLAS);
    };
    LifeGame.prototype.onLoaded = function () {
        var buildings = new BuildingList();
        this.stage.addChild(buildings);
        buildings.setGameMap(this.map);
    };
    return LifeGame;
}(Game));
//# sourceMappingURL=LifeGame.js.map