const num = 266219;
let numArr;
let mult = 1;

numArr = num + '';
numArr = numArr.split('');

numArr.forEach(n => {
   mult *= n;
})

console.log(mult)