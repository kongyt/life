var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Building = (function (_super) {
    __extends(Building, _super);
    function Building(imgName) {
        var _this = _super.call(this) || this;
        _this.costTime = 0;
        _this.init(imgName);
        return _this;
    }
    Building.prototype.init = function (imgName) {
        this.loadImage(imgName, 0, 0, 0, 0, new laya.utils.Handler(this, this.onLoaded));
    };
    Building.prototype.onLoaded = function () {
        this.pivot(this.width / 2, this.height / 2);
        this.progress = new laya.ui.ProgressBar("res/ui/building_progress.png");
        this.progress.pos(10, -20);
        this.progress.width = this.width - 20;
        this.progress.height = 8;
        this.progress.value = 0;
        this.addChild(this.progress);
    };
    Building.prototype.startBuild = function () {
        this.progress.timer.frameLoop(1, this, this.onChangeProgress);
    };
    Building.prototype.stopBuild = function () {
        this.progress.timer.clear(this, this.onChangeProgress);
    };
    Building.prototype.onChangeProgress = function (e) {
        GM.instance().logD("onChangeProgress");
        if (this.progress.value < 1) {
            this.progress.value += 1 / 5 * this.progress.timer.delta / 1000;
            if (this.progress.value > 1) {
                this.progress.value = 1;
                this.progress.removeSelf();
            }
        }
    };
    return Building;
}(Laya.Sprite));
//# sourceMappingURL=Building.js.map