//nameFunction ,Arrow Function, expression function , return function 
//variables declear inside are called as local variable and outside call glocal variable.

function numners(...numners){
    return numners.reduce((curr,acc)=>curr+acc,0)
}

console.log(numners(1,3,4,5));

//default parameter

function greeting(name='ram'){
    console.log(`hi : ${name}`)
}

greeting();

//Functions are blocks of code that perform a specific task and can be reused multiple times.
