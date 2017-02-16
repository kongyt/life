var GM = (function () {
    function GM() {
        // 设置游戏实例
        this.game = null;
    }
    GM.instance = function () {
        if (GM._instance == null) {
            GM._instance = new GM();
        }
        return GM._instance;
    };
    GM.prototype.setGame = function (game) {
        this.game = game;
    };
    // 返回游戏实例
    GM.prototype.getGame = function () {
        return this.game;
    };
    // 设置日志输出等级
    GM.prototype.setLogLevel = function (level) {
        GM.logLevel = level;
    };
    // 打印Log
    GM.prototype.logMsg = function (level, tag, msg) {
        if (level >= GM.logLevel) {
            console.log("[*" + tag + "*]: " + msg);
        }
    };
    GM.prototype.logD = function (msg) {
        this.logMsg(GM.DEBUG, "DEBUG", msg);
    };
    GM.prototype.logI = function (msg) {
        this.logMsg(GM.INFO, "INFO", msg);
    };
    GM.prototype.logW = function (msg) {
        this.logMsg(GM.WARN, "WARN", msg);
    };
    GM.prototype.logE = function (msg) {
        this.logMsg(GM.ERROR, "ERROR", msg);
    };
    return GM;
}());
GM._instance = null;
// 输出日志等级，当大于等于logLevel才可别输出到控制台
GM.logLevel = 0;
GM.DEBUG = 0;
GM.INFO = 1;
GM.WARN = 2;
GM.ERROR = 3;
//# sourceMappingURL=GM.js.map