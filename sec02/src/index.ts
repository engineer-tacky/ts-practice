// any型 どんな型のデータでも代入できるが、普段は使わない
// let x;
// x = 123;
// console.log(x);

// x = '123';
// console.log(x);

// 型の変換方法1
// let x = 123;
// let y = '456';
// x = +y;
// console.log(x);

// 型の変換方法2
// let x = 123;
// let y = '456';
// x = Number(y);
// console.log(x);

// 計算
let price:number = 12500;
let withTax:number = price * 1.1;
let withoutTax:number = price / 1.1;
console.log('金額：' + price);
console.log('税込：' + withTax);
console.log('税抜：' + withoutTax);
