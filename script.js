const num = 266219;
let numArr;
let mult = 1;

numArr = num + '';
numArr = numArr.split('');

numArr.forEach(n => {
   mult *= n;
})


mult **= 3;
mult += '';

console.log(mult.slice(0,2))