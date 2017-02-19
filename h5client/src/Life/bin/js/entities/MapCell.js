var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MapCell = (function () {
    function MapCell() {
        // 地图块坐标，左上为原点，x轴向右，y轴向下
        this.x = 0;
        this.y = 0;
        // 地图块类型，BLANK：空地  GRASSLAND:草地   WOODS：树林  WATER:湖泊   BUILDING:建筑
        this.type = 0;
        // 拥有者,0表示无主之地，1表示国有，
        this.owner = 0;
        // 土地价格
        this.price = 0;
        this.forSale = false;
    }
    MapCell.prototype.isForSale = function () {
        return this.forSale;
    };
    MapCell.prototype.sell = function (price) {
        this.price = price;
        this.forSale = true;
    };
    MapCell.prototype.buy = function (person) {
    };
    return MapCell;
}());
MapCell.BLANK = 0;
MapCell.GRASSLAND = 1;
MapCell.WOODS = 2;
MapCell.WATER = 3;
MapCell.BUILDING = 4;
var WaterMapCell = (function (_super) {
    __extends(WaterMapCell, _super);
    function WaterMapCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WaterMapCell;
}(MapCell));
var GrasslandMapCell = (function (_super) {
    __extends(GrasslandMapCell, _super);
    function GrasslandMapCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GrasslandMapCell;
}(MapCell));
var WoodsMapCell = (function (_super) {
    __extends(WoodsMapCell, _super);
    function WoodsMapCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WoodsMapCell;
}(MapCell));
var BlankMapCell = (function (_super) {
    __extends(BlankMapCell, _super);
    function BlankMapCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BlankMapCell;
}(MapCell));
var BuildingMapCell = (function (_super) {
    __extends(BuildingMapCell, _super);
    function BuildingMapCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BuildingMapCell;
}(MapCell));
//# sourceMappingURL=MapCell.js.map