// abstract class Product {
//   constructor(
//     public name: string,
//     public brand: string,
//     public price: number
//   ) {}

//   abstract getDiscountedPrice(discount: number): void;

//   printDetails() {
//     console.log(`${this.brand} ${this.name} costs $${this.price}`);
//   }
// }

// class Mobile extends Product {
//   constructor(name: string, brand: string, price: number, public os: string) {
//     super(name, brand, price);
//   }

//   getDiscountedPrice(discount: number) {
//     const discountedPrice = this.price - this.price * (discount / 100);
//     console.log(`Price after discount : ${discountedPrice}`);
//   }
// }

// const iPhone = new Mobile("iphone 17", "Apple", 320000, "ios");
// console.log(iPhone);
// iPhone.printDetails();
// iPhone.getDiscountedPrice(50);

////////////////////////////////////////////////

// abstract class User2 {
//   constructor(public name: string, public age: number) {}
// }

// class User3 extends User2 {
//   constructor(public name: string, public age: number) {
//     super(name, age);
//   }
// }

// interface User1 {
//   name: string;
//   age: number;
//   //   getDiscount(): void;
// }

// class User implements User1 {
//   static count: number = 0;
//   constructor(public name: string, public age: number) {
//     User.count++;
//   }
// }

// const u1 = new User("Aads", 35);

// new User("Aads", 35);
// new User("Aads", 35);
// new User("Aads", 35);
// new User("Aads", 35);
// new User("Aads", 35);

// console.log(User.count);

///////////////////////////////////////////////

// abstract class Product {
//   constructor(
//     public name: string,
//     public brand: string,
//     public price: number
//   ) {}

//   abstract getDiscountedPrice(discount: number): void;

//   printDetails() {
//     console.log(`${this.brand} ${this.name} costs $${this.price}`);
//   }
// }

// class Xyz {}

// class Mobile extends Product {
//   constructor(name: string, brand: string, price: number, public os: string) {
//     super(name, brand, price);
//   }

//   getDiscountedPrice(discount: number) {
//     const discountedPrice = this.price - this.price * (discount / 100);
//     console.log(`Price after discount : ${discountedPrice}`);
//   }
// }

// const iPhone = new Mobile("iphone 17", "Apple", 320000, "ios");
// console.log(iPhone);
// iPhone.printDetails();
// iPhone.getDiscountedPrice(50);

interface Camera {
  frontCamMp: number;
  backCamMp: number;
}

interface Bluetooth {
  version: number;
}

interface Wifi {
  frequency: number;
}

class Mobile implements Camera, Bluetooth, Wifi {
  constructor(
    public frontCamMp: number,
    public backCamMp: number,
    public version: number,
    public frequency: number
  ) {}
}

class HandWatch implements Bluetooth, Wifi {}
