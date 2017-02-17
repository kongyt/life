
class LifeGame extends Game{

    private map:GameMap;
    constructor(stageWidth:number, stageHeight:number, useWebGL:boolean){
        super(stageWidth, stageHeight, useWebGL);

        this.init();
    }

    init(){
        this.map = new GameMap();
        this.stage.addChild(this.map);

        Laya.loader.load(["res/atlas/comp.json",], Laya.Handler.create(this, this.onLoaded), null, Laya.Loader.ATLAS);
    }

    onLoaded(){
        var buildings:BuildingList = new BuildingList();
        this.stage.addChild(buildings);
        buildings.setGameMap(this.map);
    }
}