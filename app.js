let userHeight = 180;
let userWeight = 65;
let age = 20;
console.log(`User height : ${userHeight}`);
console.log(`User weight : ${userWeight}`);
if (age >= 19) {
  console.log(`user is adult -> age : ${age}`);
} else {
  console.log(`user is child -> age : ${age}`);
}
console.log(`User BMI -> ${userWeight / (userHeight / 100) ** 2}`);
