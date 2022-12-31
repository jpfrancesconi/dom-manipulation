let fruits = ['Apple', 'Banana', 'Strawberry', 'Cherry'];
console.log(fruits);
console.log(fruits.length); // Quantity of element from this array
console.log(fruits[0]); //first element from this array

let moreFruits = fruits.push("Greeps"); // Add an element at the last position of the array
console.log(fruits);

let last = fruits.pop(); // Revome the last element of the array
console.log(fruits);

let first = fruits.unshift('Orange'); // Add element to the first position of the array
console.log(fruits);

let deleteFruit = fruits.shift(); // Remove the fist element of the array
console.log(fruits);

let indexFruit = fruits.indexOf('Strawberry'); // return the position of the given element of the array
console.log(indexFruit);
