// На вход программе подается строка из букв А, Г, Ц, Т. Напишите программу,
// которая подсчитывает сколько букв
// АааГГЦЦцТТтттА => А – 4 Г – 2 Ц – 3 Т – 5 


const str = prompt().trim().toLowerCase();
let result_А = 0;
let result_Г = 0;
let result_Ц = 0;
let result_Т = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] === 'а') {
        result_А += 1
    }
    else if (str[i] === 'г') {
        result_Г += 1
    }
    else if (str[i] === 'ц') {
        result_Ц += 1
    }
    else if (str[i] === 'т') {
        result_Т += 1
    }
}
console.log(`А – ${result_А} Г – ${result_Г} Ц – ${result_Ц} Т – ${result_Т}`);