console.log("Hello");

// comment line

//variable
let b = "titanic";
console.log(b);

//working with html in javascript

//let music = prompt('what kinda music do you like');
//document.getElementById("music").innerHTML = music;

//numbers
let num1 = 88.7;
num1++;
console.log(45 / 5);
num1--;

console.log(num1);

//Functions
function tion() {
	console.log("this is tion functon");
}

tion();

// function greet(yourLike) {
// 	//let like = prompt('what do you like most?');
// 	let result = "I love " + yourLike + " too";
// 	console.log(result);
// }

// //let like = prompt('what do you like the most?')

// greet(like);

//adding two numbers in functions
function addNumbers(num1, num2) {
	let result = num1 + num2;
	console.log(result);
}

addNumbers(34, 35);

//while loops
// let num = 0;

// while (num < 100) {
//     num += 1;
//     console.log(num);
// }

// for loop
// for (let num = 0; num <= 100; num++) {
//     console.log(num);
// }


//Data types


//Srings
let cars = 'Ferrari,Tesla,Aston-Martin,BMW'

console.log("strings-count" + cars.length)

console.log(cars.split(','));

console.log(cars.split('e'));


//Array
let Brands = ['Ferrari', 'Tesla', 'Aston-Martin', 'BMW', 'Apple-Car'];

console.log(Brands[3]);

Brands[0] = 'Mercedez';

console.log(Brands);

for (let i = 0; i < Brands.length; i++) {

    console.log(Brands[i]);

}

// array methods
console.log(Brands.join(' * '));
console.log(Brands.pop(), Brands);




// sort numbers

let randomNumbers = [4, 2, 23, 55, 223, 333, 5234, 2, 56, 22, 23232, 52, 32, 232432, 552333, 55, 64];

console.log(randomNumbers.sort(function (a, b) { return a - b }));   // sorted in ascending order



let nullArray = [];
for (let num = 0; num < 10; num++) {
    nullArray.push(num);
}
console.log(nullArray);


// Objects
let player = { name: 'Virat', sport: 'Cricket', Country: 'India' , };

console.log(player.name);

// working with JSON
 

let requestURL = 'https://randomuser.me/api';

let data = JSON.stringify(requestURL)

console.log(data)