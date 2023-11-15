// 1.
let side = +prompt('Напишите сторону квадрата чтобы вычеслить площу (в см)');
console.log(`Сторона квадрата: ${side} см`);

let square = side * 4;
square = Math.round(square * 10) / 10;
console.log(`Площадь квадрата: ${square} см2`);
alert(`Ваша площадь квадрата: ${square} см2`);
