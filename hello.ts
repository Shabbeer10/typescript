class Human {
    name: string;
    constructor( data: string) {
        this.name = data;
    }
}

let human = new Human('Gabriel');
if (human instanceof Human) {
    console.log(`${human.name} is a human`);
}

let str: any = "extra"
let strLength = (str as string).length;
console.log(strLength);