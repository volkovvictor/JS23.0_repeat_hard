'use strict';

const isString = (str) => {
   if (typeof str === 'string') {
      return str.trim().length > 30 ? str.trim().slice(0, 31) + '...' : str.trim();
   }
};

console.log(isString(prompt('Введите строку', 'что-то введено')));