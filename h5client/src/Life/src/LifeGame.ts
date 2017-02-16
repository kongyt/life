
class LifeGame extends Game{
    constructor(stageWidth:number, stageHeight:number, useWebGL:boolean){
        super(stageWidth, stageHeight, useWebGL);

        this.init();
    }

    init(){
        var map:GameMap = new GameMap();
        this.stage.addChild(map);
    }
}