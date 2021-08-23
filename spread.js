// node spread.js \\

const numbers = [45, 53, 59, 44, 23];

/* console.log(numbers);
console.log('');

/// Three dots
console.log(...numbers); */

// const largeNumber = Math.max(numbers);

// const largeNumber = Math.max(40, 33, 89, 99);

/* const largeNumber = Math.max(...numbers); //Magic

console.log(largeNumber); */

//Variable Reference

// const newArray = numbers;
// const newArray = [ numbers ]; // two dimension array

// const newArray = [ ...numbers ]; // two dimension array

//Now pushing elements with ...dots
const newArray = [33,...numbers,100 ];

numbers.push(100);
console.log(numbers);
console.log(newArray);