

class GM{
    private static _instance:GM = null;

    public static instance():GM{
        if(GM._instance == null){
            GM._instance = new GM();
        }
        return GM._instance;
    }


    // 设置游戏实例
    private game:Game = null;
    public setGame(game:Game){
        this.game = game;
    }

    // 返回游戏实例
    public getGame():Game{
        return this.game;
    }

    // 输出日志等级，当大于等于logLevel才可别输出到控制台
    private static logLevel:number = 0;
   
    public static DEBUG:number = 0;
    public static INFO:number = 1; 
    public static WARN:number = 2;
    public static ERROR:number = 3;

    // 设置日志输出等级
    public setLogLevel(level:number){
        GM.logLevel = level;
    }

    // 打印Log
    public logMsg(level:number,tag:string, msg:string){
        if(level >= GM.logLevel){
            console.log("[*" + tag + "*]: "+ msg);
        }
    }

    public logD(msg:string){
        this.logMsg(GM.DEBUG, "DEBUG", msg);
    }

    public logI(msg:string){
        this.logMsg(GM.INFO, "INFO", msg);
    }

    public logW(msg:string){
        this.logMsg(GM.WARN, "WARN", msg);
    }

    public logE(msg:string){
        this.logMsg(GM.ERROR, "ERROR", msg);
    }

}