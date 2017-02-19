

class Wallet{
    public goldCoin:number = 0;
    public silverCoin:number = 0;
    public copperCoin:number = 0;

    constructor(){
        this.goldCoin = 0;
        this.silverCoin = 0;
        this.copperCoin = 0;
    }

    public changeMoney(deltaGold:number, deltaSilver:number, deltaCopper:number){
        this.goldCoin += deltaGold;
        this.silverCoin += deltaSilver;
        this.copperCoin += deltaCopper;
    }

    public isEnough(gold:number, silver:number, copper:number):boolean{
        if(this.goldCoin > gold){
            return true;
        }else if(this.goldCoin == gold && this.silverCoin > silver){
            return true;
        }else if(this.goldCoin == gold && this.silverCoin == silver && this.copperCoin >= copper){
            return true;
        }
        return false;
    }
}

class Person extends Laya.Sprite{
    private wallet:Wallet;
    private debugRect:boolean = true;
    private moveSpeed:number = 100;
    
    constructor(imgName:string){
        super();
        this.init(imgName);
    }

    init(imgName:string){
        this.loadImage(imgName,0,0,0,0,new laya.utils.Handler(this, this.onLoaded));            
    }


    onLoaded(){
        this.wallet = new Wallet();
        this.pivot(this.width/2, this.height - 8);
        this.drawDebugRect();
    }

    public drawDebugRect(){
        if(this.debugRect){
            this.graphics.drawRect(this.pivotX - 8, this.pivotY, 17, 17, "#FF0000");
        }
    }



    private deltaXPerSecond:number = 0;
    private deltaYPerSecond:number = 0;
    private moveCostTime:number = 0;
    private moveToPosX:number = 0;
    private moveToPosY:number = 0;
    private moveTime:number = 0;

    private isMoving:boolean = false;
    public moveTo(x:number, y:number){
        this.isMoving = true;
        this.moveToPosX = x;
        this.moveToPosY = y;
        this.moveCostTime = Math.sqrt((y - this.y)*(y - this.y) + (x - this.x)*(x - this.x))/this.moveSpeed;
        this.deltaXPerSecond = (x - this.x)/this.moveCostTime;
        this.deltaYPerSecond = (y - this.y)/this.moveCostTime;
        this.timer.frameLoop(1,this,this.onMove,[],true);
    }



    public onMove(){
        var dt:number =  this.timer.delta/1000;
        this.pos(this.x + this.deltaXPerSecond * dt, this.y + this.deltaYPerSecond * dt);
        this.moveTime += dt;
        if(this.moveCostTime - this.moveTime <= 0){
            this.timer.clear(this, this.onMove)
            this.onMoveDone();
        }
    }

    onMoveDone(){
        
    }
}