var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Role = (function (_super) {
    __extends(Role, _super);
    function Role() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    Role.prototype.init = function () {
        //缓存飞行动作
        Laya.Animation.createFrames(["war/hero_fly1.png", "war/hero_fly2.png"], "hero_fly");
        // 缓存击中爆炸动作
        Laya.Animation.createFrames(["war/hero_down1.png", "war/hero_down2.png"], "hero_down");
        this.body = new Laya.Animation();
        this.addChild(this.body);
        this.playAction("hero_fly");
    };
    Role.prototype.playAction = function (action) {
        this.body.play(0, true, action);
        var bound = this.body.getBounds();
        this.body.pos(-bound.width / 2, -bound.height / 2);
    };
    return Role;
}(Laya.Sprite));
//# sourceMappingURL=Role.js.map