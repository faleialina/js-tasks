// На вход подается число. Необходимо вывести все числа от 1 до введенного числа
// кратные 3. 
const num = 30;
let result = 1;
for (let i = 1; i <= num; i++) {
    i % 3 === 0 ? console.log(i) : null;
}
