var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Wallet = (function () {
    function Wallet() {
        this.goldCoin = 0;
        this.silverCoin = 0;
        this.copperCoin = 0;
        this.goldCoin = 0;
        this.silverCoin = 0;
        this.copperCoin = 0;
    }
    Wallet.prototype.changeMoney = function (deltaGold, deltaSilver, deltaCopper) {
        this.goldCoin += deltaGold;
        this.silverCoin += deltaSilver;
        this.copperCoin += deltaCopper;
    };
    Wallet.prototype.isEnough = function (gold, silver, copper) {
        if (this.goldCoin > gold) {
            return true;
        }
        else if (this.goldCoin == gold && this.silverCoin > silver) {
            return true;
        }
        else if (this.goldCoin == gold && this.silverCoin == silver && this.copperCoin >= copper) {
            return true;
        }
        return false;
    };
    return Wallet;
}());
var Person = (function (_super) {
    __extends(Person, _super);
    function Person(imgName) {
        var _this = _super.call(this) || this;
        _this.debugRect = true;
        _this.moveSpeed = 100;
        _this.deltaXPerSecond = 0;
        _this.deltaYPerSecond = 0;
        _this.moveCostTime = 0;
        _this.moveToPosX = 0;
        _this.moveToPosY = 0;
        _this.moveTime = 0;
        _this.isMoving = false;
        _this.init(imgName);
        return _this;
    }
    Person.prototype.init = function (imgName) {
        this.loadImage(imgName, 0, 0, 0, 0, new laya.utils.Handler(this, this.onLoaded));
    };
    Person.prototype.onLoaded = function () {
        this.wallet = new Wallet();
        this.pivot(this.width / 2, this.height - 8);
        this.drawDebugRect();
    };
    Person.prototype.drawDebugRect = function () {
        if (this.debugRect) {
            this.graphics.drawRect(this.pivotX - 8, this.pivotY, 17, 17, "#FF0000");
        }
    };
    Person.prototype.moveTo = function (x, y) {
        this.isMoving = true;
        this.moveToPosX = x;
        this.moveToPosY = y;
        this.moveCostTime = Math.sqrt((y - this.y) * (y - this.y) + (x - this.x) * (x - this.x)) / this.moveSpeed;
        this.deltaXPerSecond = (x - this.x) / this.moveCostTime;
        this.deltaYPerSecond = (y - this.y) / this.moveCostTime;
        this.timer.frameLoop(1, this, this.onMove, [], true);
    };
    Person.prototype.onMove = function () {
        var dt = this.timer.delta / 1000;
        this.pos(this.x + this.deltaXPerSecond * dt, this.y + this.deltaYPerSecond * dt);
        this.moveTime += dt;
        if (this.moveCostTime - this.moveTime <= 0) {
            this.timer.clear(this, this.onMove);
            this.onMoveDone();
        }
    };
    Person.prototype.onMoveDone = function () {
    };
    return Person;
}(Laya.Sprite));
//# sourceMappingURL=Person.js.map