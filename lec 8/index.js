"use strict";
// abstract class Product {
//   constructor(
//     public name: string,
//     public brand: string,
//     public price: number
//   ) {}
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        User.count++;
    }
}
User.count = 0;
new User("Aads", 35);
new User("Aads", 35);
new User("Aads", 35);
new User("Aads", 35);
new User("Aads", 35);
new User("Aads", 35);
console.log(User.count);
