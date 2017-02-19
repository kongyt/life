
class BuildingList extends ui.BuildingListUI{

    private hasMap:boolean = false;
    private map:GameMap = null;
    public select:number = 0;

    constructor(){
        super();
        this.init();
    }

    init(){
        this.buildingBtn1.on("click",this, this.onClick, [1]);
        this.buildingBtn2.on("click",this, this.onClick, [2]);
        this.buildingBtn3.on("click",this, this.onClick, [3]);
        this.buildingBtn4.on("click",this, this.onClick, [4]);
        this.buildingBtn5.on("click",this, this.onClick, [5]);
        this.buildingBtn6.on("click",this, this.onClick, [6]);
        this.buildingBtn7.on("click",this, this.onClick, [7]);
        this.personBtn.on("click", this, this.onPersonBtn);
        this.clearBtn.on("click", this, this.onClearBtn);
        this.clearAllBtn.on("click", this, this.onClearAll);
    }


    onPersonBtn(){
        this.onClearBtn();
        if(this.hasMap){
            this.map.setSelectPerson(1);;
        }
    }

    onClick(select:number, e:Event):void{
        this.select = select;
        if(this.hasMap){
            this.map.setSelect(this.select);
        }
        GM.instance().logI("Select building " + this.select);
    }

    onClearBtn(){
        this.select = 0;
        if(this.hasMap){
            this.map.clearSelect();
        }
        GM.instance().logI("Clear select building");
    }


    onClearAll(){
        this.select = 0;
        if(this.hasMap){
            this.map.clearAll();
        }


        GM.instance().logI("Clear all");
    }

    public setGameMap(map:GameMap){
        this.hasMap = true;
        this.map = map;
    }

}