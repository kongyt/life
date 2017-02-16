class GameInfo extends ui.GameInfoUI{
    constructor(){
        super();
        this.startBtn.on("click", this, this.onStartBtnClick);
    }

    onStartBtnClick(e: Laya.Event):void{
        console.log("ok");
    }
}