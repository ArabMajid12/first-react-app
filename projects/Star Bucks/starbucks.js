const about = document.getElementById("about-footer");
const career = document.getElementById("career-footer");
const social = document.getElementById("social-footer");
const business = document.getElementById("business-footer");
const order = document.getElementById("order-footer");

const toogle_bar = document.querySelectorAll("toogle-footer");
const dropdown = document.querySelectorAll("footer-head");
const ul_list = document.querySelector("toggle-ul");

function toggleList() {
  const ul = this.nextElementSibling;

  ul.classList.toggle("toggle-ul");
}
about.addEventListener("click", toggleList);
career.addEventListener("click", toggleList);
social.addEventListener("click", toggleList);
business.addEventListener("click", toggleList);
order.addEventListener("click", toggleList);
