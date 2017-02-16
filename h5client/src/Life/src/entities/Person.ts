

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

class Person{
    private wallet:Wallet;
    
    constructor(){
        this.wallet = new Wallet();
    }
}