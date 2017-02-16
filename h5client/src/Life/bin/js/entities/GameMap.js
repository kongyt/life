var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameMap = (function (_super) {
    __extends(GameMap, _super);
    function GameMap() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    GameMap.prototype.init = function () {
        for (var i = 0; i < 51; i++) {
            this.graphics.drawLine(i * 16, 0, i * 16, 1600, "#ff0000", 1);
        }
        for (var i = 0; i < 31; i++) {
            this.graphics.drawLine(0, i * 16, 1600, i * 16, "#ff0000", 1);
        }
        GM.instance().logI("划线");
    };
    return GameMap;
}(Actor));
GameMap.MAP_CELL_WIDTH = 16;
GameMap.MAP_CELL_HEIGHT = 16;
//# sourceMappingURL=GameMap.js.map