var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameMap = (function (_super) {
    __extends(GameMap, _super);
    function GameMap() {
        var _this = _super.call(this) || this;
        _this.mapCellWidth = 0;
        _this.mapCellHeight = 0;
        _this.mapWidth = 0;
        _this.mapHeight = 0;
        _this.debugArea = false;
        _this.select = 0;
        _this.building1ok = true;
        _this.building2ok = true;
        _this.building3ok = true;
        _this.old_x = 0;
        _this.old_y = 0;
        _this.dragStartX = 0;
        _this.dragStartY = 0;
        _this.width = 4000;
        _this.height = 2400;
        _this.mapCellWidth = 16;
        _this.mapCellHeight = 16;
        _this.mapWidth = Math.floor(_this.width / _this.mapCellWidth);
        _this.mapHeight = Math.floor(_this.height / _this.mapCellHeight);
        _this.mouseEnabled = true;
        _this.on("mousedown", _this, _this.onMouseDown);
        _this.on("mouseup", _this, _this.onMouseUp);
        _this.on("dragstart", _this, _this.onDragStart);
        _this.on("dragmove", _this, _this.onDragMove);
        _this.init();
        return _this;
    }
    GameMap.prototype.init = function () {
        this.map = new Array();
        for (var i = 0; i < this.mapWidth; i++) {
            this.map.push(new Array());
            for (var j = 0; j < this.mapHeight; j++) {
                this.map[i].push(0);
            }
        }
        for (var i = 0; i < this.mapWidth + 1; i++) {
            this.graphics.drawLine(i * this.mapCellWidth, 0, i * this.mapCellWidth, this.mapCellHeight * this.mapHeight, "#ff0000", 1);
        }
        for (var i = 0; i < this.mapHeight + 1; i++) {
            this.graphics.drawLine(0, i * this.mapCellHeight, this.mapCellWidth * this.mapWidth, i * this.mapCellHeight, "#ff0000", 1);
        }
        // Laya.loader.load("../res/building1.png",Laya.Handler.create(this, this.onLoaded, [1]), null, Laya.Loader.ATLAS);
        // Laya.loader.load("../res/building2.png",Laya.Handler.create(this, this.onLoaded, [2]), null, Laya.Loader.ATLAS);
        // Laya.loader.load("../res/building3.png",Laya.Handler.create(this, this.onLoaded, [3]), null, Laya.Loader.ATLAS);
    };
    GameMap.prototype.onLoaded = function (which) {
        switch (which) {
            case 1:
                this.building1ok = true;
                break;
            case 2:
                this.building2ok = true;
                break;
            case 3:
                this.building3ok = true;
                break;
        }
    };
    GameMap.prototype.onDragStart = function (e) {
        this.old_x = this.x;
        this.old_y = this.y;
        this.dragStartX = this.stage.mouseX;
        this.dragStartY = this.stage.mouseY;
        GM.instance().logD("DragStart!");
    };
    GameMap.prototype.onDragMove = function (e) {
        this.pos(Laya.stage.mouseX - this.dragStartX + this.old_x, Laya.stage.mouseY - this.dragStartY + this.old_y);
    };
    GameMap.prototype.onMouseDown = function (e) {
        if (this.select == 0) {
            this.startDrag();
        }
        else {
            var x = Laya.stage.mouseX - this.x;
            var y = Laya.stage.mouseY - this.y;
            x /= this.mapCellWidth;
            x = Math.floor(x);
            y /= this.mapCellHeight;
            y = Math.floor(y);
            var flag = true;
            x -= Math.floor(Math.ceil(this.building.width / this.mapCellWidth) / 2);
            y -= Math.floor(Math.ceil(this.building.height / this.mapCellHeight) / 2);
            if (x < 0 || y < 0 || x + Math.ceil(this.building.width / this.mapCellWidth) > this.mapWidth || y + Math.ceil(this.building.height / this.mapCellHeight) > this.mapHeight) {
                return;
            }
            for (var i = x; i < x + Math.ceil(this.building.width / this.mapCellWidth); i++) {
                for (var j = y; j < y + Math.ceil(this.building.height / this.mapCellHeight); j++) {
                    if (this.map[i][j] != 0) {
                        flag = false;
                    }
                }
            }
            if (flag) {
                this.building.pos(x * this.mapCellWidth, y * this.mapCellHeight);
                if (this.debugArea) {
                    this.graphics.drawRect(x * this.mapCellWidth, y * this.mapCellHeight, this.mapCellWidth * Math.ceil(this.building.width / this.mapCellWidth), this.mapCellHeight * Math.ceil(this.building.height / this.mapCellHeight), "#00FF00");
                }
                for (var i = x; i < x + Math.ceil(this.building.width / this.mapCellWidth); i++) {
                    for (var j = y; j < y + Math.ceil(this.building.height / this.mapCellHeight); j++) {
                        this.map[i][j] = 1;
                    }
                }
                this.building.alpha = 1;
                this.select = 0;
                this.building = null;
            }
        }
    };
    GameMap.prototype.onMouseUp = function (e) {
        this.stopDrag();
    };
    GameMap.prototype.onMouseMove = function (e) {
        if (this.select == 0) {
            return;
        }
        var x = Laya.stage.mouseX - this.x;
        var y = Laya.stage.mouseY - this.y;
        x /= this.mapCellWidth;
        x = Math.floor(x);
        y /= this.mapCellHeight;
        y = Math.floor(y);
        x -= Math.floor(Math.ceil(this.building.width / this.mapCellWidth) / 2);
        y -= Math.floor(Math.ceil(this.building.height / this.mapCellHeight) / 2);
        if (this.debugArea) {
            this.graphics.drawRect(x * this.mapCellWidth, y * this.mapCellHeight, this.mapCellWidth * Math.ceil(this.building.width / this.mapCellWidth), this.mapCellHeight * Math.ceil(this.building.height / this.mapCellHeight), "#00FF00");
        }
        this.building.pos(x * this.mapCellWidth, y * this.mapCellHeight);
    };
    GameMap.prototype.setSelect = function (select) {
        if (this.select != 0) {
            return;
        }
        this.select = select;
        this.building = new Laya.Sprite();
        this.building.alpha = 0.5;
        this.building.loadImage("res/building" + this.select + ".png");
        this.building.autoSize = true;
        this.addChild(this.building);
        this.on("mousemove", this, this.onMouseMove);
        var x = Laya.stage.mouseX - this.x;
        var y = Laya.stage.mouseY - this.y;
        x /= this.mapCellWidth;
        x = Math.floor(x);
        y /= this.mapCellHeight;
        y = Math.floor(y);
        x -= Math.floor(Math.ceil(this.building.width / this.mapCellWidth) / 2);
        y -= Math.floor(Math.ceil(this.building.height / this.mapCellHeight) / 2);
        if (this.debugArea) {
            this.graphics.drawRect(x * this.mapCellWidth, y * this.mapCellHeight, this.mapCellWidth * Math.ceil(this.building.width / this.mapCellWidth), this.mapCellHeight * Math.ceil(this.building.height / this.mapCellHeight), "#00FF00");
        }
        this.building.pos(x * this.mapCellWidth, y * this.mapCellHeight);
    };
    GameMap.prototype.clearSelect = function () {
        if (this.select != 0) {
            this.building.removeSelf();
            this.building = null;
            this.select = 0;
        }
    };
    GameMap.prototype.clearAll = function () {
        this.clearSelect();
        this.destroyChildren();
        ;
        for (var i = 0; i < this.mapWidth; i++) {
            for (var j = 0; j < this.mapHeight; j++) {
                this.map[i][j] = 0;
            }
        }
    };
    return GameMap;
}(Actor));
//# sourceMappingURL=GameMap.js.map