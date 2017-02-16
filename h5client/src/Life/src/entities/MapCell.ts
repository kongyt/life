
class MapCell{
    public static BLANK:number = 0;
    public static GRASSLAND:number = 1;
    public static WOODS:number = 2;
    public static WATER:number = 3;
    public static BUILDING:number = 4;

    // 地图块坐标，左上为原点，x轴向右，y轴向下
    protected x:number = 0;   
    protected y:number = 0;

    // 地图块类型，BLANK：空地  GRASSLAND:草地   WOODS：树林  WATER:湖泊   BUILDING:建筑
    protected type:number = 0;

    // 拥有者,0表示无主之地，1表示国有，
    protected owner:number = 0;

    // 土地价格
    protected price:number = 0;

    protected forSale:boolean = false;

    constructor(){

    }

    isForSale(){
        return this.forSale;
    }

    sell(price:number){
        this.price = price;
        this.forSale = true;
    }

    buy(person:Person){
        
    }

}

class WaterMapCell extends MapCell{

}

class GrasslandMapCell extends MapCell{

}

class WoodsMapCell extends MapCell{

}

class BlankMapCell extends MapCell{

}

class BuildingMapCell extends MapCell{

}