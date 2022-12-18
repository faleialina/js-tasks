// На вход программе подается строка текста содержащая “@”. Напишите
// программу, которая удаляет все вхождения символа “@”. Добавить проверки
// // 123@1@@34 -> 123134


const a = '123@1@@34'.trim();

let result = ''
if (a.length > 0) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === '@') {
            continue
        } else {
            result += a[i]
        }
    }
    console.log(result);
} else {
    console.log('Ошибка ввода');
}
