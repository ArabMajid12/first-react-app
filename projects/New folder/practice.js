let aTag = document.createElement("a");
let div = document.createElement("div");
let para = document.createElement("p");

document.body.appendChild(aTag);
document.body.appendChild(div);
document.body.appendChild(para);

aTag.classList.add("anchor-btn");
aTag.innerText = "Create Element";
para.innerText = "This is paragraph";
aTag.style.fontSize = "20px";

async function func() {
  const inside = await fetch("https://api.github.com/users");
  console.log(inside);
  console.log("You don't know");
}

console.log("I don't Know");
let anchorfunc = func();
console.log(anchorfunc);
