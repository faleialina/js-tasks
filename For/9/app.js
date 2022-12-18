// На вход подается строка из нескольких строк. Необходимо преобразовать слово в
// хештег. Добавить проверку на ввод текстовых значений
// hSСhOol СomPAnY-> #hschoolcompany
const a = 'hSСhOol СomPAnY'.toLowerCase().replaceAll(' ', '');
if (isNaN(a)) {
    console.log(`#${a}`);
} else {
    console.log('Введите текст')
}


