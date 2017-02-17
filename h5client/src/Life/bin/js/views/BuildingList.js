var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BuildingList = (function (_super) {
    __extends(BuildingList, _super);
    function BuildingList() {
        var _this = _super.call(this) || this;
        _this.hasMap = false;
        _this.map = null;
        _this.select = 0;
        _this.init();
        return _this;
    }
    BuildingList.prototype.init = function () {
        this.buildingBtn1.on("click", this, this.onClick, [1]);
        this.buildingBtn2.on("click", this, this.onClick, [2]);
        this.buildingBtn3.on("click", this, this.onClick, [3]);
        this.buildingBtn4.on("click", this, this.onClick, [4]);
        this.buildingBtn5.on("click", this, this.onClick, [5]);
        this.buildingBtn6.on("click", this, this.onClick, [6]);
        this.buildingBtn7.on("click", this, this.onClick, [7]);
        this.clearBtn.on("click", this, this.onClearBtn);
        this.clearAllBtn.on("click", this, this.onClearAll);
    };
    BuildingList.prototype.onClick = function (select, e) {
        this.select = select;
        if (this.hasMap) {
            this.map.setSelect(this.select);
        }
        GM.instance().logI("Select building " + this.select);
    };
    BuildingList.prototype.onClearBtn = function () {
        this.select = 0;
        if (this.hasMap) {
            this.map.clearSelect();
        }
        GM.instance().logI("Clear select building");
    };
    BuildingList.prototype.onClearAll = function () {
        this.select = 0;
        if (this.hasMap) {
            this.map.clearAll();
        }
        GM.instance().logI("Clear all");
    };
    BuildingList.prototype.setGameMap = function (map) {
        this.hasMap = true;
        this.map = map;
    };
    return BuildingList;
}(ui.BuildingListUI));
//# sourceMappingURL=BuildingList.js.map