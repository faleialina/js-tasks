// Ввести строку. Проверить на isNaN. Если число, то ошибка ввода. Если это строка
//то узнать какая у нее длина. Привести к одному регистру, убрать лишние пробелы

const a = prompt().trim();
if (isNaN(a)) {
    console.log(a.toLowerCase()); 
    console.log(a.length);
} else {
    console.log('ошибка ввода');
}