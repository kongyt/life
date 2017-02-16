
    
class GameMap extends Actor{
    public static MAP_CELL_WIDTH:number = 16;
    public static MAP_CELL_HEIGHT:number = 16;

    constructor(){
        super();
        this.init();
    }

    init(){
        for(var i:number = 0; i < 51; i++){
            this.graphics.drawLine(i * 16, 0, i*16, 1600, "#ff0000", 1);   
        }  
         for(var i:number = 0; i < 31; i++){
            this.graphics.drawLine(0, i*16, 1600, i*16, "#ff0000", 1);   
        }       
    }
}