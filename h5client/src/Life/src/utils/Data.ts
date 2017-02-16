

class PersonInfo{
    userid:number = 10000;
    gold:number = 0;
    silver:number = 0;
    copper:number = 0;
}

class MapCellInfo{
    x:number = 0;
    y:number = 0;
}

interface DataAccess{
    getPersonInfo(userid:number):PersonInfo;
    setPersonInfo(personInfo:PersonInfo);
    getMapCellInfo(x:number, y:number):MapCellInfo;
}

class TestDataAccess implements DataAccess{
    getPersonInfo(userid:number){
        var tmp = new PersonInfo();
        tmp.copper = 10;
        tmp.gold = 10;
        tmp.silver = 10;
        tmp.userid = 10000;
        return tmp;
    }

    setPersonInfo(personInfo:PersonInfo){

    }

    getMapCellInfo(x:number, y:number):MapCellInfo{
        return new MapCellInfo;
    }
}