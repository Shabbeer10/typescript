let variable: any = "extra"
let varLength = (<string>variable).length;

// Creating Arrays
let strings: string[] = ["one", "two", "three", "four","five"];

let numbers: Array<number> = [1, 2, 3, 4, 5,]

//Multitype Arrays
let strAndNum: (string | number)[] = ['age', 20]

//multidimensional array
let numbersArray: number[][] = [[1,2,3,4,5],[6,7,8,9,10]]

//Tuples
let exampleTuple: [number, string] = [20, "twenty"];

//Enums
enum State{
    Playing,
    Paused,
    Stopped,
}

//Objects
const human = {
    firstname: 'Frank',
    age: 32,
    height: 218,
    greet: ()=> {
        if (human.height >= 200) {
            return console.log(`hello ${human.firstname}, you long ass motherfucker`)
        }else { return console.log(`hello there ${human.firstname}`)}
    }
};
//human.greet();

type Human = {firstName: string, age: number, height: number};

const John: Human = {firstName: "John", age: 20, height: 170};
