console.log(document.write("DOM Manupulation!"));

let head = document.createElement("h1");
let span = document.createElement("span");
let input = document.createElement("p");
let btn = document.createElement("button");
let br = document.createElement("br");
let anchor = document.createElement("a");

// span.innerText = "This is headin' in span";

// head.appendChild(span);
// btn.innerText = "Create";
// br.innerText;

// document.body.appendChild(head);
// document.body.appendChild(btn);
// document.body.appendChild(br);
document.body.appendChild(anchor);
// document.body.appendChild(input);
// anchor.onclick = "click";

// function click() {
//   anchor.href = "https://www.youtube.com/";
// }
// console.log("click");
anchor.innerText = "Click Here";
anchor.classList.add("hover");
anchor.style.color = "black";
anchor.style.fontSize = "30px";

// let age = 24;

// console.log(`My age is ${age * 4} `);

// console.log(age);

// const person = {
//   name: "Arsalan",
//   lastname: "Hussain",
//   age: 24,
//   fullname: function () {
//     console.log(`${this.name} ${this.lastname}`);
//   },
//   address: {
//     street: "lohar street",
//     building: "bismillah building",
//     fulladdress: function () {
//       console.log(`${this.street} $`);
//     },
//   },
// };

// person.fullname();

// person.address.fulladdress();

// async function add(a, b) {
//   console.log(1 + 3);
//   const num = await fetch("https://api.github.com/users");
// }

// add(2);

// function displayage(age) {
//   console.log("your age is " + age);
// }

// displayage(55);
