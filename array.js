//Array is collection of values
//arrays method,loops through array

let number=[2,5,8,10];

let double=number.forEach(num=>num*2);
console.log(double);

let newArray=number.map(f=>f+10);

let even=number.filter(num=> num%2==0)