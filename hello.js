var variable = "extra";
var varLength = variable.length;
// Creating Arrays
var strings = ["one", "two", "three", "four", "five"];
var numbers = [1, 2, 3, 4, 5,];
//Multitype Arrays
var strAndNum = ['age', 20];
//multidimensional array
var numbersArray = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]];
//Tuples
var exampleTuple = [20, "twenty"];
//Enums
var State;
(function (State) {
    State[State["Playing"] = 0] = "Playing";
    State[State["Paused"] = 1] = "Paused";
    State[State["Stopped"] = 2] = "Stopped";
})(State || (State = {}));
//Objects
var human = {
    firstname: 'Frank',
    age: 32,
    height: 200,
    greet: function () {
        if (human.height >= 200) {
            return console.log("hello ".concat(human.firstname, ", you long ass motherfucker"));
        }
        else {
            return console.log("hello there ".concat(human.firstname));
        }
    }
};
human.greet();
