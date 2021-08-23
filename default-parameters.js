// node default-parameters.js \\

function fullName(first, last='is a Good Person') 
{
    const name = first + ' ' + last;
    return name;
}

// const name = fullName('Jashim', 'Molla');
const name = fullName('Jashim');
console.log(name);