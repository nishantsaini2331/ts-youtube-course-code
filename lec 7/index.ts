// type StringOrNumber = number | string;

// let id: StringOrNumber = 23423;
// id = "dasd";

// function combine(val1: StringOrNumber, val2: StringOrNumber) {
//   if (typeof val1 === "number" || typeof val2 === "number") {
//     return val1.toString() + val2.toString();
//   }
//   return val1 + val2;
// }

// let result = combine(33, 5);
// console.log(result);

// type Nishant = number;

// let val: Nishant = 3342;

// type StringOrNumber = number | string;
// type StringOrBoolean = string | Boolean;

// type NewType = StringOrBoolean & StringOrNumber;
// type NewType2 = StringOrNumber | StringOrBoolean;

// const val1: NewType = "true";
// const val2: NewType2 = 12;

// type User = {
//   name: string;
//   age: number;
//   readonly email: string;
//   phone?: number;
// };

// type Student = User & {
//   enrolledCourse: string[];
// };

// const user: User = {
//   name: "nishant",
//   age: 31,
//   email: "nishant@gmail.com",
// };

// const user2: User = {
//   name: "nishant",
//   age: 31,
//   email: "nishant@gmail.com",
//   phone: 232131,
// };

// const student: Student = {
//   age: 33,
//   email: "sfdas@gmail.com",
//   enrolledCourse: [],
//   name: "RajPal",
// };

// type UnionType = { name: string } | { age: number };

// const hello: UnionType = { name: " adasd" };

// type Sum = (num1: number, num2: number) => number;

// const sum: Sum = (num1: number, num2: number) => num1 + num2;

// sum(13, 132);

// interface Product {
//   name: string;
//   brand: string;
//   readonly price: number;
//   rating?: number;
// }

// interface Age {
//   age: number;
// }

// type Age = { age: number };

// interface UnionType extends Age {
//   name: string;
// }

// interface Product {
//   name: string;
//   brand: string;
//   readonly price: number;
//   rating?: number;
// }

// interface Product {
//   description: string;
//   discount: number;
// }

// type Product = {
//   name: string;
//   brand: string;
//   readonly price: number;
//   rating?: number;
// };

// type Product = {
//   description: string;
//   discount: number;
// };

// const product: Product = {};

// interface Product {
//   name: string;
//   brand: string;
//   readonly price: number;
//   rating?: number;
// }

type Product = {
  name: string;
  brand: string;
  readonly price: number;
  rating?: number;
};

class Mobile implements Product {
  brand: string;
  name: string;
  price: number;
  rating?: number | undefined;
}

type Id = string;
const id: Id = "adadd";
// class Student implements User{

// }
