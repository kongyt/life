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
        var map = new GameMap();
        this.stage.addChild(map);
        GM.instance().logI("Ok");
    };
    return LifeGame;
}(Game));
//# sourceMappingURL=LifeGame.js.map