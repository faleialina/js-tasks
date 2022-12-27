// Ввести строку. Если она равна “hschool”, вывести true. В противном случае false.
// Добавить проверки для строк. Удалить лишние пробелы

const a = prompt();
if (isNaN(a)) {
    if (a === 'hschool') {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('ошибка ввода');
}