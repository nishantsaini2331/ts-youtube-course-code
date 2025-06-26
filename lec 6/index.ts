class Product {
  public name: string;
  _price: number;
  private _brand: string;
  readonly id: number;

  constructor(n: string, p: number, b: string) {
    this.name = n;
    this._price = p;
    this._brand = b;
    this.id = Math.floor(Math.random() * 999);
  }

  getPrice() {
    console.log("Price is ", this._price);
  }

  updateBrand(brand: string) {
    this._brand = brand;
  }

  get brand() {
    return this._brand;
  }

  set price(p: number) {
    this._price = p;
  }
}

class Mobile extends Product {
  cameraSpecs: string;
  batteryMah: string;

  constructor(n: string, p: number, b: string, c: string, battery: string) {
    super(n, p, b);
    this.batteryMah = battery;
    this.cameraSpecs = c;
  }

  getPrice() {
    console.log("Mobile Price is ", this._price);
  }
}

const product1 = new Mobile("Iphone 17", 300000, "Apple", "108 mp", "7000 mAh");
const product2 = new Product("Samsung galaxy", 200000, "Samsung");

product1.getPrice();
product1.price = 22333;
console.log(product1);

//shortcut
// class User {
//   constructor(public name: string, public age: number) {}
// }

// console.log(new User("Nishant", 23));
