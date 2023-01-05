// На входе задан массив [‘hschool’, ‘hschool_0’, ‘hschool_1’]. Напишите все возможные
// способы обращения к первому и последнему элементам


const arr =['hschool', 'hschool_0', 'hschool_1'];
//1-й способ
console.log(arr[0]);
console.log(arr[2]);

//2-й способ
console.log(arr[0]);
arr.reverse()
console.log(arr[0]);


