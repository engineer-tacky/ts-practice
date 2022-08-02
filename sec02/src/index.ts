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
let x = 123;
let y = '456';
x = Number(y);
console.log(x);