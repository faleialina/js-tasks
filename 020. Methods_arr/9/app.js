// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите сумму всех элементов массива. Проверки на
// ввод только чисел. Использовать forEach, reduce
const arr = [];
const n = prompt('количество элементов массива');
for (let i = 0; i < n; i++) {
   arr.push(prompt('заполнение массива'))
}
// //1-й способ
arr.forEach(function (elem) {
let sum = 0
   if (!isNaN(elem)) {
    sum+=elem
      console.log(sum);
   } else {
      console.log('ввод только чисел');
   }
});



// let result = arr.reduce(function(sum, elem) {
// 	return sum + elem;
// }, 0);

// console.log(result);