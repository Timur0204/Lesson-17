// 1.
let side = +prompt('Напишите сторону квадрата чтобы вычеслить площу (в см)');
console.log(`Сторона квадрата: ${side} см`);

let square = side * 4;
square = Math.round(square * 10) / 10;
console.log(`Площадь квадрата: ${square} см2`);
alert(`Ваша площадь квадрата: ${square} см2`);



//2.
//2.1
//let cubeEdgeSurface = +prompt('Напишите длину ребра куба чтобы вычеслить площу боковой поверхности куба(в см)');
//console.log(`Длина ребра куба: ${cubeEdgeSurface} см`);

//let lateralSurfaceArea = 4 * cubeEdgeSurface **2;
//lateralSurfaceArea = Math.round(lateralSurfaceArea * 10) / 10;
//console.log(`Площадь боковой поверхности куба: ${lateralSurfaceArea} см`);
//alert(`Ответ: ${lateralSurfaceArea} см`);
//2.2
//let cubeEdgeSurface = +prompt('Напишите длину ребра куба чтобы вычкслить его обьем (в см)');
//console.log(`Длина ребра куба: ${cubeEdgeSurface} см`);

//let cubeVolume = cubeEdgeSurface **3;
//cubeVolume = Math.round(cubeVolume * 10) / 10;
//console.log(`Обьем куба: ${cubeVolume} см`);
//alert(`Ответ: ${cubeVolume} см`);



//3.
//3.1
//let circleRadius = +prompt(`Напишите радиус окружности, чтобы вычеслить длину окружности (в см)`);
//console.log(`Радиус окружности: ${circleRadius} см`);

//let circumference = 2 * 3.14 * circleRadius;
//circumference = Math.round(circumference * 10) / 10;
//console.log(`Длина окружности: ${circumference} см`);
//alert(`Ответ: ${circumference} см`);
//3.2
//let circleRadius = +prompt(`Напишите радиус окружности, чтобы вычеслить длину окружности (в см)`);
//console.log(`Радиус окружности: ${circleRadius} см`);

//let circleSquare = 3.14 * circleRadius **2;
//circleSquare = Math.round(circleSquare * 10) / 10;
//console.log(`Площадь круга: ${circleSquare}  см2`);
//alert(`Ответ: ${circleSquare} см2`);



//4.
//let weight = +prompt('Укажите массу вещества (в кг) для определения плотности материала');
//console.log(`Масса вещества: ${weight} кг`);
//let volume = +prompt('Укажите обьем вещества (в м3) для определения плотности материала');
//console.log(`Обьем вещества: ${volume} м3`);

//let materialDensity = weight / volume;
//materialDensity = Math.round(materialDensity * 10) / 10;
//console.log(`Плотность материала: ${materialDensity} кг/м3`)
//alert(`Ответ: ${materialDensity} кг/м3`)



//5.
//let population = +prompt('Напишите количество населения страны для определения плотности населения');
//console.log(`Населения: ${population}`);
//let territoryArea = +prompt('Напишите размер территория страны (в км2) для определения плотности населения');
//console.log(`Территория: ${territoryArea} км2`);

//let populationDensity = population / territoryArea;
//populationDensity = Math.round(populationDensity * 10) / 10;
//console.log(`Плотность населения страны: ${populationDensity}`);
//alert(`Ответ: ${populationDensity}`);



//6.
//let firstKatet = +prompt('Напишите первый катет (в см) для того чтобы найти гипотенузу');
//console.log(`Первый катет: ${firstKatet} см`);
//let secondKatet = +prompt('Напишите второй катет (в см) для того чтобы найти гипотенузу');
//console.log(`Второй катет: ${secondKatet} см`);

//let hypotenuse = Math.sqrt(firstKatet **2 + secondKatet **2);
//hypotenuse = Math.round(hypotenuse * 10) / 10;
//console.log(`Гипотенуза: ${hypotenuse} см`);
//alert(`Ответ: ${hypotenuse} см`);



//7.
//let a = +prompt('Напишите значение а чтобы решить пример');
//console.log(`a = ${a}`);

//let y = (a **2 + 10) / Math.sqrt(a **2 + 1);
//y = Math.round(y * 100) / 100;
//console.log(`y = ${y}`);
//alert(`Ответ: ${y}`);