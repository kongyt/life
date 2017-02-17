var PersonInfo = (function () {
    function PersonInfo() {
        this.userid = 10000;
        this.gold = 0;
        this.silver = 0;
        this.copper = 0;
    }
    return PersonInfo;
}());
var MapCellInfo = (function () {
    function MapCellInfo() {
        this.x = 0;
        this.y = 0;
    }
    return MapCellInfo;
}());
var TestDataAccess = (function () {
    function TestDataAccess() {
    }
    TestDataAccess.prototype.getPersonInfo = function (userid) {
        var tmp = new PersonInfo();
        tmp.copper = 10;
        tmp.gold = 10;
        tmp.silver = 10;
        tmp.userid = 10000;
        return tmp;
    };
    TestDataAccess.prototype.setPersonInfo = function (personInfo) {
    };
    TestDataAccess.prototype.getMapCellInfo = function (x, y) {
        return new MapCellInfo;
    };
    return TestDataAccess;
}());
//# sourceMappingURL=Data.js.map