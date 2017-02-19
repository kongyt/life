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
        _this.debugArea = true;
        _this.select = 0;
        _this.selectPerson = 0;
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
        _this.mapLayer = new Layer();
        _this.addChild(_this.mapLayer);
        _this.peopleLayer = new Layer();
        _this.addChild(_this.peopleLayer);
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
        if (this.select == 0 && this.selectPerson == 0) {
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
            if (this.select != 0) {
                if (x - Math.ceil(this.building.width / 2 / this.mapCellWidth) < 0 || y - Math.ceil(this.building.height / 2 / this.mapCellHeight) < 0 || x + Math.ceil(this.building.width / 2 / this.mapCellWidth) > this.mapWidth || y + Math.ceil(this.building.height / 2 / this.mapCellHeight) > this.mapHeight) {
                    return;
                }
                for (var i = x - Math.ceil((this.building.width / 2) / this.mapCellWidth); i < x + Math.ceil((this.building.width / 2) / this.mapCellWidth); i++) {
                    for (var j = y - Math.ceil((this.building.height / 2) / this.mapCellHeight); j < y + Math.ceil(this.building.height / 2 / this.mapCellHeight); j++) {
                        if (this.map[i][j] != 0) {
                            flag = false;
                        }
                    }
                }
                if (flag) {
                    this.building.pos(x * this.mapCellWidth, y * this.mapCellHeight);
                    // if(this.debugArea){
                    //     this.graphics.drawRect(x*this.mapCellWidth ,y*this.mapCellHeight,
                    //         this.mapCellWidth * Math.ceil(this.building.width/this.mapCellWidth),this.mapCellHeight * Math.ceil(this.building.height/this.mapCellHeight),"#00FF00");
                    // }           
                    for (var i = x - Math.ceil((this.building.width / 2) / this.mapCellWidth); i < x + Math.ceil((this.building.width / 2) / this.mapCellWidth); i++) {
                        for (var j = y - Math.ceil((this.building.height / 2) / this.mapCellHeight); j < y + Math.ceil(this.building.height / 2 / this.mapCellHeight); j++) {
                            this.map[i][j] = 1;
                        }
                    }
                    this.building.alpha = 1;
                    this.building.startBuild();
                    this.select = 0;
                    this.building = null;
                    this.drawDebugRect();
                }
            }
            else if (this.selectPerson != 0) {
                if (x < 0 || y < 0 || x + Math.ceil(this.person.width / 2 / this.mapCellWidth) > this.mapWidth || y + Math.ceil(this.person.height / 2 / this.mapCellHeight) > this.mapHeight) {
                    return;
                }
                else {
                    this.person.alpha = 1;
                    this.selectPerson = 0;
                    this.astar = new AStar(this.map);
                    console.log("" + this.person.x);
                    var path = this.astar.findFastWay(new Laya.Point(Math.floor(this.person.x), Math.floor(this.person.y)), new Laya.Point(100, 100));
                    this.person.moveTo(path[0].x * 16, path[1].y * 16);
                    this.person = null;
                }
            }
        }
    };
    GameMap.prototype.onMouseUp = function (e) {
        this.stopDrag();
    };
    GameMap.prototype.onMouseMove = function (e) {
        var x = Laya.stage.mouseX - this.x;
        var y = Laya.stage.mouseY - this.y;
        x /= this.mapCellWidth;
        x = Math.floor(x);
        y /= this.mapCellHeight;
        y = Math.floor(y);
        if (this.select != 0) {
            this.building.pos(x * this.mapCellWidth, y * this.mapCellHeight);
        }
        else if (this.selectPerson != 0) {
            this.person.pos((x + 0.5) * this.mapCellWidth, y * this.mapCellHeight);
        }
    };
    GameMap.prototype.setSelect = function (select) {
        if (this.select != 0) {
            return;
        }
        this.select = select;
        this.building = new Building("res/building" + this.select + ".png");
        this.building.alpha = 0.5;
        this.mapLayer.addChild(this.building);
        this.on("mousemove", this, this.onMouseMove);
        var x = Laya.stage.mouseX - this.x;
        var y = Laya.stage.mouseY - this.y;
        x /= this.mapCellWidth;
        x = Math.floor(x);
        y /= this.mapCellHeight;
        y = Math.floor(y);
        this.building.pos(x * this.mapCellWidth, y * this.mapCellHeight);
    };
    GameMap.prototype.setSelectPerson = function (selectPerson) {
        if (this.selectPerson != 0) {
            return;
        }
        this.selectPerson = selectPerson;
        this.person = new Person("res/person.png");
        this.person.alpha = 0.5;
        this.peopleLayer.addChild(this.person);
        this.on("mousemove", this, this.onMouseMove);
        var x = Laya.stage.mouseX - this.x;
        var y = Laya.stage.mouseY - this.y;
        x /= this.mapCellWidth;
        x = Math.floor(x);
        y /= this.mapCellHeight;
        y = Math.floor(y);
        this.person.pos(x * this.mapCellWidth, y * this.mapCellHeight);
    };
    GameMap.prototype.clearSelect = function () {
        if (this.select != 0) {
            this.building.removeSelf();
            this.building = null;
            this.select = 0;
        }
    };
    GameMap.prototype.clearAll = function () {
        this.graphics.clear();
        this.clearSelect();
        this.mapLayer.destroyChildren();
        this.peopleLayer.destroyChildren();
        this.init();
    };
    GameMap.prototype.drawDebugRect = function () {
        for (var i = 0; i < this.mapWidth; i++) {
            for (var j = 0; j < this.mapHeight; j++) {
                if (this.map[i][j] != 0) {
                    this.graphics.drawRect(i * this.mapCellWidth + 1, j * this.mapCellHeight + 1, this.mapCellWidth - 1, this.mapCellHeight - 1, "#00FF00");
                }
            }
        }
    };
    return GameMap;
}(Actor));
//# sourceMappingURL=GameMap.js.map