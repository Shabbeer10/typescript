var Human = /** @class */ (function () {
    function Human(data) {
        this.name = data;
    }
    return Human;
}());
var human = new Human('Gabriel');
if (human instanceof Human) {
    console.log("".concat(human.name, " is a human"));
}
var str = "extra";
var strLength = str.length;
console.log(strLength);
