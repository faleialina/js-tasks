/*На вход программе подается число n – количество собачьих лет. Напишите
программу, которая вычисляет возраст собаки в человеческих годах.
В течение первых двух лет собачий год равен 10.5 человеческим годам. После
этого каждый год собаки равен 4 человеческим годам*/


const n = +prompt();
if (n === 1 || n === 2) {
    console.log(n * 10.5);
} else {
    console.log(2 * 10.5 + (n - 2) * 4);
}



