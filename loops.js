let fruit = ['mango', 'apple', 'grapes'];
let newArray = [];

let car = {
  name: 'toyota',
  year: 2025,
  type: 'sport'
};

// ✅ for...of → used for arrays
for (let frt of fruit) {
  console.log(frt);
  newArray.push(frt);
}
console.log("New Array:", newArray);

// ✅ for...in → used for objects
for (let vehicle in car) {
  console.log(vehicle, ":", car[vehicle]);
}
