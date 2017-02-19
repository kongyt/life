
    
class GameMap extends Actor{
    public mapCellWidth:number = 0;
    public mapCellHeight:number = 0;
    public mapWidth:number = 0;
    public mapHeight:number = 0;
    public map:number[][];
    private debugArea:boolean = true;
    private select = 0;
    private selectPerson = 0;
    private person:Person;
    private building:Building;

    private astar:AStar;
    private mapLayer:Layer;
    private peopleLayer:Layer;
    constructor(){
        super();
        this.width = 4000;
        this.height = 2400;
        this.mapCellWidth = 16;
        this.mapCellHeight = 16;
        this.mapWidth = Math.floor(this.width/this.mapCellWidth);
        this.mapHeight = Math.floor(this.height/this.mapCellHeight);
        this.mouseEnabled = true;

        this.mapLayer = new Layer();
        this.addChild(this.mapLayer);
        this.peopleLayer = new Layer();
        this.addChild(this.peopleLayer);

        this.on("mousedown", this, this.onMouseDown);
        this.on("mouseup", this, this.onMouseUp);
        this.on("dragstart", this, this.onDragStart);
        this.on("dragmove", this, this.onDragMove);
        
        this.init();
    }

    init(){
        this.map = new Array();
        for(var i:number = 0; i < this.mapWidth; i++){
            this.map.push(new Array());
            for(var j:number = 0; j < this.mapHeight; j++){
                this.map[i].push(0);
            }
        }

        for(var i:number = 0; i < this.mapWidth + 1; i++){
            this.graphics.drawLine(i * this.mapCellWidth, 0, i*this.mapCellWidth, this.mapCellHeight * this.mapHeight, "#ff0000", 1);
           
        }  
        for(var i:number = 0; i < this.mapHeight + 1; i++){
            this.graphics.drawLine(0, i*this.mapCellHeight, this.mapCellWidth * this.mapWidth, i*this.mapCellHeight, "#ff0000", 1);   
        }     

    }


    private building1ok:boolean = true;
    private building2ok:boolean = true;
    private building3ok:boolean = true;
    onLoaded(which:number){
        switch(which){
            case 1:
                this.building1ok = true;
                break;
            case 2:
                this.building2ok = true;
                break;
            case 3:
                this.building3ok = true;
                break;
        }
    }

    private old_x:number = 0;
    private old_y:number = 0; 
    private dragStartX:number = 0;
    private dragStartY:number = 0;
    onDragStart(e:Event):void{
        this.old_x = this.x;
        this.old_y = this.y;
        this.dragStartX = this.stage.mouseX;
        this.dragStartY = this.stage.mouseY;
        GM.instance().logD("DragStart!");
    }

    onDragMove(e:Event):void{
        this.pos(Laya.stage.mouseX - this.dragStartX + this.old_x, Laya.stage.mouseY - this.dragStartY + this.old_y);
    }

    onMouseDown(e:Event):void{
        if(this.select == 0 && this.selectPerson == 0){
            this.startDrag();
        }else{
            var x:number = Laya.stage.mouseX - this.x;
            var y:number = Laya.stage.mouseY - this.y;
            x /= this.mapCellWidth;
            x = Math.floor(x);
            y /= this.mapCellHeight;
            y = Math.floor(y); 
            var flag:boolean = true;

            if(this.select != 0){
                if(x - Math.ceil(this.building.width/2/this.mapCellWidth) < 0 || y - Math.ceil(this.building.height/2/this.mapCellHeight)< 0 || x + Math.ceil(this.building.width/2/this.mapCellWidth) > this.mapWidth || y + Math.ceil(this.building.height/2/this.mapCellHeight) > this.mapHeight){
                     return;
                }
                for(var i:number = x - Math.ceil((this.building.width/2)/this.mapCellWidth); i < x + Math.ceil((this.building.width/2)/this.mapCellWidth); i++){
                    for(var j:number = y - Math.ceil((this.building.height/2)/this.mapCellHeight); j < y + Math.ceil(this.building.height/2/this.mapCellHeight); j++){
                        if( this.map[i][j] != 0){
                            flag = false;
                        }
                    }
                } 
                if(flag){
                    this.building.pos(x*this.mapCellWidth, y*this.mapCellHeight);

                // if(this.debugArea){
                //     this.graphics.drawRect(x*this.mapCellWidth ,y*this.mapCellHeight,
                //         this.mapCellWidth * Math.ceil(this.building.width/this.mapCellWidth),this.mapCellHeight * Math.ceil(this.building.height/this.mapCellHeight),"#00FF00");
                // }           

                    for(var i:number = x - Math.ceil((this.building.width/2)/this.mapCellWidth); i < x + Math.ceil((this.building.width/2)/this.mapCellWidth); i++){
                        for(var j:number = y - Math.ceil((this.building.height/2)/this.mapCellHeight); j < y + Math.ceil(this.building.height/2/this.mapCellHeight); j++){
                            this.map[i][j] = 1;
                        }
                    }  

                    this.building.alpha = 1;
                    this.building.startBuild();
                    this.select = 0;
                    this.building = null;      
                    this.drawDebugRect(); 
                }            
            }else if(this.selectPerson != 0){
                if(x < 0 || y < 0 || x + Math.ceil(this.person.width/2/this.mapCellWidth) > this.mapWidth || y + Math.ceil(this.person.height/2/this.mapCellHeight) > this.mapHeight){
                     return;
                }else{
                    this.person.alpha = 1;
                    this.selectPerson = 0;
                    this.astar = new AStar(this.map);
                    console.log(""+this.person.x);
                    var path:Array<Laya.Point> = this.astar.findFastWay(new Laya.Point(Math.floor(this.person.x),Math.floor(this.person.y)), new Laya.Point(100,100));
                    this.person.moveTo(path[0].x * 16,path[1].y * 16);
                    this.person = null;      
                }
            }

        }

    }

    onMouseUp(e:Event):void{
        this.stopDrag();
    }

    onMouseMove(e:Event):void{
        var x:number = Laya.stage.mouseX - this.x;
        var y:number = Laya.stage.mouseY - this.y;
        x /= this.mapCellWidth;
        x = Math.floor(x);
        y /= this.mapCellHeight;
        y = Math.floor(y);  
       
       if(this.select != 0){
            this.building.pos(x*this.mapCellWidth, y*this.mapCellHeight);    
        }else if(this.selectPerson != 0){
            this.person.pos((x+0.5)*this.mapCellWidth, y*this.mapCellHeight);
        }
           
    }

    setSelect(select:number){
        if(this.select != 0){
            return;
        }
        this.select = select;

        this.building = new Building("res/building"+this.select+".png");
        this.building.alpha = 0.5;        
        
        this.mapLayer.addChild(this.building);
        this.on("mousemove", this, this.onMouseMove);

        var x:number = Laya.stage.mouseX - this.x;
        var y:number = Laya.stage.mouseY - this.y;
        x /= this.mapCellWidth;
        x = Math.floor(x);
        y /= this.mapCellHeight;
        y = Math.floor(y); 
       
        this.building.pos(x*this.mapCellWidth, y*this.mapCellHeight);      
    }

    setSelectPerson(selectPerson:number){
        if(this.selectPerson != 0){
            return;
        }
        this.selectPerson = selectPerson;

        this.person = new Person("res/person.png");
        this.person.alpha = 0.5;        
        
        this.peopleLayer.addChild(this.person);
        this.on("mousemove", this, this.onMouseMove);

        var x:number = Laya.stage.mouseX - this.x;
        var y:number = Laya.stage.mouseY - this.y;
        x /= this.mapCellWidth;
        x = Math.floor(x);
        y /= this.mapCellHeight;
        y = Math.floor(y); 
       
        this.person.pos(x*this.mapCellWidth, y*this.mapCellHeight);  
    }

    public clearSelect(){
        if(this.select != 0){
            this.building.removeSelf();
            this.building = null;
            this.select = 0;
        }
    }

    public clearAll(){

        this.graphics.clear();
        this.clearSelect();
        this.mapLayer.destroyChildren();
        this.peopleLayer.destroyChildren();
        this.init();
    }


    drawDebugRect(){

        for(var i:number = 0; i < this.mapWidth; i++){
            for(var j:number = 0; j < this.mapHeight; j++){
                if(this.map[i][j] != 0){
                    this.graphics.drawRect(i*this.mapCellWidth +1 ,j*this.mapCellHeight+1,
                        this.mapCellWidth - 1 ,this.mapCellHeight-1,"#00FF00");
                }
            }
        }
    }

}