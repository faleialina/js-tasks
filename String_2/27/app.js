// На вход программе подается строка из букв А, Г, Ц, Т. Напишите программу,
// которая подсчитывает сколько букв
// АааГГЦЦцТТтттА => А – 4 Г – 2 Ц – 3 Т – 5 


const str = prompt().trim();
let result_А = 0;
let result_Г = 0;
let result_Ц = 0;
let result_Т = 0;
for (i = 0; i < str.length; i++) {
    if (str[i] === 'А') {
        result_А += 1
    }
    if (str[i] === 'Г') {
        result_Г += 1
    }
    if (str[i] === 'Ц') {
        result_Ц += 1
    }
    if (str[i] === 'Т') {
        result_Т += 1
    }
}
console.log(`А – ${result_А} Г – ${result_Г} Ц – ${result_Ц} Т – ${result_Т}`);