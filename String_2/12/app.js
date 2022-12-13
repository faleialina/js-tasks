// Пользователь вводит дату в формате 'xxxx-xx-xx'. Преобразуйте эту дату в формат
//'xx.xx.xxxx'.
let date = 'xxxx-xx-xx';
let arr = date.split('-');
let newDate = arr.reverse();
console.log(newDate.join('.'));