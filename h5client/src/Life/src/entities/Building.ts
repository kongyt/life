
class Building extends Laya.Sprite{

    costTime:number = 0;
    progress:laya.ui.ProgressBar;

    constructor(imgName:string){
        super();
        this.init(imgName);
    }


    init(imgName:string){
        this.loadImage(imgName,0,0,0,0,new laya.utils.Handler(this, this.onLoaded));            
    }

    onLoaded(){
        this.pivot(this.width/2, this.height/2);
        this.progress = new laya.ui.ProgressBar("res/ui/building_progress.png");
        this.progress.pos(10,  -20);
        this.progress.width = this.width - 20;
        this.progress.height = 8;
        this.progress.value = 0;
        
        this.addChild(this.progress); 
    }

    public startBuild(){
        this.progress.timer.frameLoop(1, this, this.onChangeProgress);
    }

    public stopBuild(){
        this.progress.timer.clear(this, this.onChangeProgress);
    }


    onChangeProgress( e:Event):void{
        GM.instance().logD("onChangeProgress");
        if(this.progress.value < 1){
            this.progress.value += 1/5 * this.progress.timer.delta/1000;
            if(this.progress.value > 1){
                this.progress.value = 1;
                this.progress.removeSelf();
            }
        }
    }

}