// node arrow-function.js \\

//Function Declaration

/* function numbers(params) {
    
    return 5 + params;
}

const result = numbers(5);
console.log(result); */

//Function expression

/* const numbers = function numbers(params) {
    return 5 + params;
}

const result = numbers(25);
console.log(result); */

//Function expression (anonymous)

/* const numbers = function (params) {
    return 5 + params;
}

const result = numbers(15);
console.log(result); */

//Arrow function

const numbers = (params) => 25 + params;
const result = numbers(15);
console.log(result);


