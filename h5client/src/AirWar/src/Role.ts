

class Role extends Laya.Sprite{
    private body: Laya.Animation;

    constructor(){
        super();
        this.init();
    }

    init():void{

        //缓存飞行动作
        Laya.Animation.createFrames(["war/hero_fly1.png", "war/hero_fly2.png"], "hero_fly");

        // 缓存击中爆炸动作
         Laya.Animation.createFrames(["war/hero_down1.png", "war/hero_down2.png"], "hero_down");

        this.body = new Laya.Animation();

        this.addChild(this.body);

        this.playAction("hero_fly");
    }

    playAction(action:string):void{
        this.body.play(0,true,action);
        var bound: Laya.Rectangle = this.body.getBounds();
        this.body.pos(-bound.width/2, -bound.height/2);
    }
}