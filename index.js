
let arr = ['I', 'go', 'home'] 
console.log(arr.pop())   // повертає home(тобто вирізає останій елемент масиву) 
 
//  
//  arr.slice([start], [end]) 
let arr1 = ['BMW', 'Opel', 'Mazda', 'Reno'] 
const cars = arr1.slice(0, 2) 
console.log(cars) // ['BMW', 'Opel'] масив з елементів з  по  
console.log(arr1) 
 
// //  arr.splice(index[, deleteCount,eleml, ..., elemN]) 
 
let arr2 = ['BMW', 'Opel', 'Mazda', 'Reno', 'Reno1'] 
const cars1 = arr2.splice(0, 2) 
console.log(arr2) // ['Mazda', 'Reno'] // змінює перший масив,  вирізає з нього елемент по індексу з  по індекс -1  
console.log(cars1) //['BMW', 'Opel']  // створює новий масив з вказаного індекму по індекс -1 
 
// добавляє в масив  
let arr3 = ['BMW', 'Opel', 'Mazda', 'Reno', 'Reno1'] 
arr3.splice(0, 2, 'Porsche', 'Fiat') 
console.log(arr3) // ['Porsche', 'Fiat', 'Mazda', 'Reno', 'Reno1'] змінює елементи по вказаним індексам останій індекс -1 
 
// 
 
// // arr.concat(['BMW', 'Opel', 'Mazda', 'Reno', 'Reno1']) 
let arr4 = ['BMW', 'Opel', 'Mazda', 'Reno', 'Reno1'] 
const cars4 = arr4.concat('Porsche', 'Fiat') 
console.log(cars4) // ['BMW', 'Opel', 'Mazda', 'Reno', 'Reno1', 'Porsche', 'Fiat'] добавляє елементи в масив не змінюючий попередній масив 
 
// // 
 
let arr5 = ['BMW', 'Opel', 'Mazda', 'Reno', 'Reno1', 'Porsche', 'Fiat'] 
arr5.forEach((el, index) => { 
    console.log(` Car is ${el}, on index ${index}`) 
}) 
// перебор масиву   
// Car is BMW, on index 0 
// Car is Opel, on index 1 
// Car is Mazda, on index 2 
// Car is Reno, on index 3 
// Car is Reno1, on index 4 
// Car is Porsche, on index 5 
// Car is Fiat, on index 6 
 
// // // // // // // // // // // // // // // // // // // // // // // 
 
// indexOf() 
let arr6 = ['BMW', 'Opel', 'Mazda', 'Reno', 'Reno1', 'Porsche', 'Fiat'] 
console.log(arr6.indexOf('Opel')) // повертає індекс як  що елемента не має в масиві повертає -1 
 
// includes() 
let arr7 = ['BMW', 'Opel', 'Mazda', 'Reno', 'Reno1', 'Porsche', 'Fiat'] 
console.log(arr7.includes('Opel')) // повертає true / false 
 
// // // // // // // // // // // // // // // // // // // // // // // 
 
// find() 
let users = [ 
    { id: 1, name: 'Вася' }, 
    { id: 2, name: 'Петя' }, 
    { id: 3, name: 'Маша' } 
] 
 
let user = users.find((el) => { 
    if (el.id === 2) { 
        return el 
    } 
}) 
console.log(user)   // найходе елемент масиву, як тільки знайде елемент закінчує цикл по масиву 
 
 
let user1 = users.findIndex((el) => { 
    if (el.id === 2) { 
        return el 
    } 
}) 
console.log(user1) // находить індекс 
 
 
// // 
 
let users1 = [ 
    { id: 1, name: 'Вася', age: 12 }, 
    { id: 2, name: 'Петя', age: 22 }, 
    { id: 3, name: 'Маша', age: 40 } 
] 
 
let noAdults = users1.filter((el) => { 
    if (el.age > 18) { 
        return el 
    } 
}) 
console.log(noAdults) // повертає новий масив (проходить по масиву) 
 
// // 
 
let users8 = [ 
    { id: 1, name: 'Вася', age: 12 }, 
    { id: 2, name: 'Петя', age: 22 }, 
    { id: 3, name: 'Маша', age: 40 } 
] 
 
const namePeop = users8.map((nam) => { 
    return nam.name 
}) 
 
console.log(namePeop) // повертає масив елементів 
 
 
let users9 = [ 
    { id: 1, name: 'Вася', age: 12 }, 
    { id: 2, name: 'Петя', age: 22 }, 
    { id: 3, name: 'Маша', age: 40 } 
] 
 
const namePeop1 = users9.map((nam) => { 
    if(nam.age > 12){   // добавляєм в масив елемент при певній умові 
        return{ 
            ...nam, 
            height: '189' 
        } 
    } else{ 
        return nam 
    } 
}) 
 
console.log(namePeop1) 
 
 
 
 
// // // // // // // // // // // // // // // // // // // // // // // 
 
let myArray = [15, 5, 600, 6, 2, 500, 3, 7, 200, 9, 1000] 
let maxEl = [0] 
for (let i = 0; i < myArray.length; i++) { 
    if (maxEl < myArray[i]) { 
        maxEl = myArray[i] 
    } 
} 
console.log(maxEl) 
console.log(myArray.indexOf(maxEl)) // індекс мак елемента в масиві  
 
 
// или (має право на існування))) 
 
// let myArray1 = [15, 5, 600, 6, 2, 500, 3, 7, 200, 9, 1000] 
// myArray1.sort() 
// console.log(myArray1.reverse().pop()) 
 
 
// 
// зайти мінусові 
const arrMy = [15, -80, 5,


600, 6, 2, -2, 500, 3, 7, -8, 200, 9, 1000] 
 
let resultArr = [] 
for (let i = 1; i < arrMy.length; i++) { 
    if (arrMy[i] < 0) { 
        resultArr.push(arrMy[i]) 
    } 
} 
console.log(resultArr) 
 
 
// let result = arrMy.filter((el)=>{ 
//     if(el < 0){ 
//         return el 
//     } 
// }) 
// console.log(result) 
 
//////////////////////////////////////////////// 
// повтораяються елементи  
 
const myArray2 = [15, 2, 3, 2, 2, 3, 2, 3 - 80, 5, 600, 6, 2, -2, 500, 3, 7, -8, 200, 500, 5, 6, 9, 1000] 
 
let multyNumbs = myArray2.filter((el, index, selArr) => { 
    return selArr.indexOf(el) !== index 
}) 
 
// числа які повторюються (порівнюємо елементи масиву) 
let multyNumbesCount = 0 
multyNumbs.forEach((el) => { 
    myArray2.forEach((el2) => { 
        if (el === el2) { 
            multyNumbesCount++ 
        } 
    }) 
}) 
 
console.log(multyNumbs) 
 
 
/////////////////