function getFirstElement<T>(arr: T[]) {
  return arr[0];
}

const res1 = getFirstElement<number>([1, 3, 234, 4, 2, 24]);
const res2 = getFirstElement(["Asd", "sad", "asfd"]);
const res3 = getFirstElement([true, false]);

console.log(res1, res2, res3);

function getLength<T extends { length: number }>(item: T) {
  console.log(item.length);
}

getLength([1, 4, 23, 5]);
getLength("codethread");

function getPropertyValue<T extends object, U extends keyof T>(obj: T, key: U) {
  console.log(obj[key]);
}

getPropertyValue({ name: "nishant", age: 24 , address : "ASsdasfasdfasfd"}, "age");
