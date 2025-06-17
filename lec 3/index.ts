// let arr: readonly number[] = [1, 3, 34, 45, 32];

// // arr.push(1);

// let strArr: string[] = ["hello", "nishant", "ASFD"];
// let strArr2 : Array<string> = ["asda" , "asd"]

// console.log(arr);

//tuples -> fixed length

// let coordinate: readonly [number, number] = [12323, 12344532];

// coordinate.push(4324);
// console.log(coordinate);

let user: {
  name: string;
  email: string;
  age?: number;
} = {
  name: "nishant",
  email: "nishant@gmail.com",
  age: 23,
};

let users: {
  name: string;
  email: string;
  age?: number;
}[] = [{
  name: "nishant",
  email: "nishant@gmail.com",
  age: 23,
}];

console.log(users);
