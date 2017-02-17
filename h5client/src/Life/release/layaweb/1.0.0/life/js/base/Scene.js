var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Scene = (function (_super) {
    __extends(Scene, _super);
    function Scene() {
        return _super.call(this) || this;
    }
    // 初始化
    Scene.prototype.init = function () {
    };
    // 逻辑操作
    Scene.prototype.act = function (delta) {
    };
    // 暂停
    Scene.prototype.pause = function () {
    };
    // 恢复
    Scene.prototype.resume = function () {
    };
    // 销毁
    Scene.prototype.destory = function () {
    };
    return Scene;
}(Laya.Node));
//# sourceMappingURL=Scene.js.map