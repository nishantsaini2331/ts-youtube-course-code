// let num1 = 4;
// let str = "nishant";
// let num1 = 342;
// let str = "codethread";
// let sum = num1 + str;
// console.log("sum is", sum);
// let isValid = true
// function hello(name: string) {
//   console.log("Hii", name);
// }
// hello("Nishant");
function combine(val1, val2) {
    if (typeof val1 === "number" || typeof val2 === "number") {
        return val1.toString() + val2.toString();
    }
    return val1 + val2;
}
var result = combine(33, 5);
console.log(result);
