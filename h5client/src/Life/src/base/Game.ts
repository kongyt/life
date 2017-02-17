
class Game{
    protected stageWidth:number = 0;
    protected stageHeight:number = 0;
    protected useWebGL:boolean = false;
    protected stage:Laya.Stage = null;
    protected timer:Laya.Timer = null;
    protected currentScene:Scene = null;

    constructor(stageWidth:number, stageHeight:number, useWebGL:boolean){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.useWebGL = useWebGL;
        
        if(this.useWebGL){
            Laya.init(this.stageWidth, this.stageHeight, Laya.WebGL);  
        }else{
            Laya.init(this.stageWidth, this.stageHeight);
        }

        this.stage = Laya.stage;
        this.timer = Laya.timer;

        this.stage.screenMode = "horizontal";
        this.stage.scaleMode = "showall";
        this.stage.bgColor = "#232628";
        this.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        this.stage.alignH = Laya.Stage.ALIGN_CENTER;
       
    }

    // 返回舞台宽度
    public getStageWidth():number{
        return this.stageWidth;
    }

    // 返回舞台高度
    public getStageHeight():number{
        return this.stageHeight;
    }

    // 是否使用WebGL
    public isWebGL():boolean{
        return this.useWebGL;
    }

    public setScene(scene:Scene){
        if(this.currentScene != null){
            this.currentScene.removeSelf();
            this.currentScene.destory();
        }        

        this.currentScene = scene;
        if(this.currentScene != null){
            this.currentScene.init();
            Laya.stage.addChild(this.currentScene); 
        }else{
            console.error("Can't post null to function \"setScene\"");
        }
              
    }

    public getScene():Scene{
        return this.currentScene;
    }

    // 返回Timer实例
    public getTimer(): Laya.Timer{
        return this.timer;
    }

    public showGameStat(x:number, y:number){
        laya.utils.Stat.show(0,0);
    }

    public start(){
        this.timer.frameLoop(1,this, this.act, [this.timer.delta]);
    }

    public act(delta:number){
        if(this.currentScene != null){//或许可以通过策略保证 this.currentScene != null 减少判断
            this.currentScene.act(delta);
        }       
    }

     // 暂停
    public pause(){
        if(this.currentScene != null){
            this.currentScene.pause();
        }
    }

    // 恢复
    public resume(){
        if(this.currentScene != null){
            this.currentScene.resume();
        }
    }

    // 销毁
    public destory(){
         if(this.currentScene != null){
            this.currentScene.destory();
        }
    }
}