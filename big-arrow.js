// node big-arrow.js \\

//arrow function => ( for single parameter no need of parenthesis )

/* const number = params => 25 + params;
const result = number(15);
console.log(result);
 */

//More arrow function

const title = (first, second, third) => `${first} ${second} ${third}`;

const mainTitle = title('The','Iron','Man');
console.log(mainTitle );

//arrow function without parameter

const hero = () => `Tony Stark
The Legend`;

const mainHero = hero();
console.log(mainHero);

//arrow function multiple line operation

const calculate = (num1, num2, num3) =>
{
    const sum = num1 + num2 + num3;
    const avg = sum /3 ;
    return avg;
}

const average = calculate(45, 98, 14);
console.log(average.toFixed(2));
