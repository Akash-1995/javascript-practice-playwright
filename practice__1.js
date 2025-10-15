//find even number

//1.Print all event numbers 1 to 20

for(let i=1;i<=20;i++){
    if(i%2==0){
        console.log(`even number : ${i}`)
    }
}

//2. print array to uppercase

let fruits =["apple", "banana", "mango", "grapes"];
let newArray=[];
for (let fr of fruits){
   newArray.push( fr.toUpperCase());
}

console.log(newArray);


//3.Write a function sumOfNumbers(n) that returns the sum of first n natural numbers.

function sumOfNumbers(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

console.log(sumOfNumbers(10));

//4. extract the user names which is above age 30; Array + Object

let users = [
    {name: "Akash", age: 29},
    {name: "Shivanee", age: 28},
    {name: "Rohit", age: 35}
  ];

  for(let user of users){
      if(user.age>=30){
          console.log(user.name)
      }
  }
