class Game{

    private hero: Role;
    // 定义背景容器
    private bg:BackGround;

    private gameInfo: GameInfo;

    constructor(){
        Laya.init(480, 852, Laya.WebGL);

        this.bg = new BackGround();

        Laya.stage.addChild(this.bg);
        Laya.loader.load("res/atlas/war.json", Laya.Handler.create(this, this.onLoaded), null, Laya.Loader.ATLAS);
       
     
        
    }

    onLoaded(){

           this.gameInfo = new GameInfo();
        Laya.stage.addChild(this.gameInfo);
        // this.hero = new Role();
        // this.hero.pos(240, 700);
        // Laya.stage.addChild(this.hero);

        // Laya.stage.on("mousemove", this, this.onMouseMove);
    }

    onMouseMove(e: Laya.Event):void{
        this.hero.pos(Laya.stage.mouseX, Laya.stage.mouseY);
    }
}

new Game();