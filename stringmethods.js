const name = "Arsalan33";
let age = 33;
let email = "arsalanmhussain32@gmail.com";
const male = true;

console.log("My name is " + name + " and i am " + age + "old");
console.log(`My name is ${name} and i am ${age} old`);

console.log(name.length);

console.log(name[2]);
console.log(name.indexOf("t"));
console.log(name.lastIndexOf("a"));

let $aa = "ss";

console.log($aa);

let str = "count even numbers in str";

str.split(" ");

console.log(str.search("even"));

console.log(name.charAt(2));

console.log(name.toUpperCase());
console.log(name.toLowerCase());

let namewithoutnumber = name.slice(0, 7);
let namewithoutstring = name.slice(7);

console.log(namewithoutnumber);
console.log(namewithoutstring);

let fruits = "Apple,Banana,Mango,melon,lemon,grapes,pineapple";
console.log(fruits);
const fruitsArr = fruits.split(",");
fruitsArr.forEach((fruit) => console.log(fruit));
