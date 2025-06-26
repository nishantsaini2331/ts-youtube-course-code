let num: number = 4;

let var1: any;

var1 = "d";
var1 = 3;
var1 = ["asdasd", "asd", 33];

// console.log(var1.toUpperCase());

let var2: unknown;

var2 = "ASdasd";

// if (typeof var2 === "string") {
//   console.log(var2.toUpperCase());
// }
// var2 = 11;
// if (typeof var2 === "number") {
//   console.log(var2.toString());
// }

function fun1(): never {
  throw "heel";
}

// fun1();

function fun2(num1: number, num2: number) {
  console.log(num1 + num2);
}

console.log(fun2(3, 5));
console.log();
console.log();
console.log();
console.log(fun1());
// fun2();
// const a = 4;
