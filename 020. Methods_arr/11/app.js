// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите произведение всех элементов массива.
// Проверки на ввод только чисел. Использовать forEach, reduce

const arr = [];
const n = prompt('количество элементов массива');
for (let i = 0; i < n; i++) {
   arr.push(prompt('заполнение массива'))
}
//1-й способ
let result = 1
arr.forEach(function (elem) {
   if (!isNaN(elem)) {
      result *= elem
   } else {
      console.log('ввод только чисел');
   }
});
console.log(result);


//2-й способ
// let result = arr.reduce(function (s, elem) {
//   if (!isNaN(elem)) {
//     return s * elem;
//   } else {
//     console.log('ввод только чисел');
//   }
// }, 1);
// console.log(result);