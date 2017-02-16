var Game = (function () {
    function Game() {
        Laya.init(480, 852, Laya.WebGL);
        this.bg = new BackGround();
        Laya.stage.addChild(this.bg);
        Laya.loader.load("res/atlas/war.json", Laya.Handler.create(this, this.onLoaded), null, Laya.Loader.ATLAS);
    }
    Game.prototype.onLoaded = function () {
        this.gameInfo = new GameInfo();
        Laya.stage.addChild(this.gameInfo);
        // this.hero = new Role();
        // this.hero.pos(240, 700);
        // Laya.stage.addChild(this.hero);
        // Laya.stage.on("mousemove", this, this.onMouseMove);
    };
    Game.prototype.onMouseMove = function (e) {
        this.hero.pos(Laya.stage.mouseX, Laya.stage.mouseY);
    };
    return Game;
}());
new Game();
//# sourceMappingURL=Game.js.map