var Wallet = (function () {
    function Wallet() {
        this.goldCoin = 0;
        this.silverCoin = 0;
        this.copperCoin = 0;
        this.goldCoin = 0;
        this.silverCoin = 0;
        this.copperCoin = 0;
    }
    Wallet.prototype.changeMoney = function (deltaGold, deltaSilver, deltaCopper) {
        this.goldCoin += deltaGold;
        this.silverCoin += deltaSilver;
        this.copperCoin += deltaCopper;
    };
    Wallet.prototype.isEnough = function (gold, silver, copper) {
        if (this.goldCoin > gold) {
            return true;
        }
        else if (this.goldCoin == gold && this.silverCoin > silver) {
            return true;
        }
        else if (this.goldCoin == gold && this.silverCoin == silver && this.copperCoin >= copper) {
            return true;
        }
        return false;
    };
    return Wallet;
}());
var Person = (function () {
    function Person() {
        this.wallet = new Wallet();
    }
    return Person;
}());
//# sourceMappingURL=Person.js.map