var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var BuildingListUI = (function (_super) {
        __extends(BuildingListUI, _super);
        function BuildingListUI() {
            return _super.call(this) || this;
        }
        BuildingListUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.BuildingListUI.uiView);
        };
        return BuildingListUI;
    }(View));
    BuildingListUI.uiView = { "type": "View", "props": { "width": 800, "label": "取消选择", "height": 60 }, "child": [{ "type": "Button", "props": { "y": 5, "x": 5, "var": "buildingBtn1", "skin": "comp/button.png", "label": "建筑1" } }, { "type": "Button", "props": { "y": 5, "x": 95, "var": "buildingBtn2", "skin": "comp/button.png", "label": "建筑2" } }, { "type": "Button", "props": { "y": 5, "x": 185, "var": "buildingBtn3", "skin": "comp/button.png", "label": "建筑3" } }, { "type": "Button", "props": { "y": 5, "x": 640, "var": "clearBtn", "skin": "comp/button.png", "label": "取消选择" } }, { "type": "Button", "props": { "y": 5, "x": 720, "var": "clearAllBtn", "skin": "comp/button.png", "label": "清除所有" } }, { "type": "Button", "props": { "y": 4, "x": 275, "var": "buildingBtn4", "skin": "comp/button.png", "label": "建筑4" } }, { "type": "Button", "props": { "y": 5, "x": 365, "var": "buildingBtn5", "skin": "comp/button.png", "label": "建筑5" } }, { "type": "Button", "props": { "y": 5, "x": 455, "var": "buildingBtn6", "skin": "comp/button.png", "label": "建筑6" } }, { "type": "Button", "props": { "y": 5, "x": 545, "var": "buildingBtn7", "skin": "comp/button.png", "label": "建筑7" } }, { "type": "Button", "props": { "y": 35, "x": 5, "var": "personBtn", "skin": "comp/button.png", "label": "人物" } }] };
    ui.BuildingListUI = BuildingListUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map