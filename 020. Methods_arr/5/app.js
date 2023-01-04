// На входе 10 элементов. Из элементов составить 2 массива по 5 элементов. Далее
// необходимо сравнить массивы. Если они идентичны, то вывести булевое true, в
// противном случае false. forEach

const value = 5;
const arr1 = [];
const arr2 = [];
for (let i = 0; i < value; i++) {
    arr1.push(prompt());
}
for (let i = 0; i < value; i++) {
    arr2.push(prompt());
}
const onestr = arr1.join('');
const twostr = arr2.join('');
if (onestr === twostr) {
    console.log('true');
} else {
    console.log('false');
}