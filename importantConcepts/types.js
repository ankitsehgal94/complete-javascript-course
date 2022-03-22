// type conversion

console.log(String(23));
console.log(Number('111'));
console.log(typeof NaN);

//type coercion (Javascript has automatic type coercion,)

// when operating with multiple data types, javascript convertes the data type from 
// number to string and string to number depending on the operator

console.log('I am' + 23 + 'years old'); // I am 23 years old
// here js converted 23 to string (with + operator js converts number to string)

//with other operator js converts to string 
console.log('23'-'10'-3);//10
console.log('23'/'2'); //11.5


//fasly values
// values that are not exactly false but will become false, when we try to convert them 
// to booleans.

// JS has 5 falsy values : 0, '', undefined, null, NaN

//Everything else is a truthy values

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Ankit')); //true
console.log(Boolean({})); //true
console.log(Boolean('')); //true

