var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BuildingProgress = (function (_super) {
    __extends(BuildingProgress, _super);
    function BuildingProgress() {
        var _this = _super.call(this, "res/ui/progress.png") || this;
        _this.init();
        return _this;
    }
    BuildingProgress.prototype.init = function () {
        this.x = 100;
        this.y = 100;
        this.value = 0;
        this.width = 100;
        this.height = 10;
    };
    return BuildingProgress;
}(laya.ui.ProgressBar));
//# sourceMappingURL=BuildingProgress.js.map