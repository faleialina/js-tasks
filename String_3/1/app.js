// На входе строка, необходимо убрать все личшние пробелы и привести каждый
// элемент к нижнему регистру. Повторить строку 3 раза. Добавить проверку на ввод
// только текстовых значений


const a = prompt().trim().toLowerCase();
if (isNaN(a)) {

    console.log(a.repeat(3));
} else {
    console.log('ошибка ввода ');
}