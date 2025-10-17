
//reverse the string using the split(),reverse(),join() method 
let name='akash';
let reversed = name.split("").reverse().join("");
console.log(reversed)

//sum of array values

let arr=[10,20,30,40];

let totalSum=arr.reduce((cum,curr)=>cum+curr,0);

console.log(totalSum)
//2nd flow with the for loop to find the sum;
let total=0;
for(let value of arr){

    if(value>0){
        total+=value;
    }

}
console.log (total)

function countVowels(str) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    console.log(count);
  }
  
  countVowels('akash');
  

  let number=[2,3,1,5];

  let max=Math.max(...number);
  console.log(max);
  