const name_input = document.getElementById("name_input");
const author_input = document.getElementById("author_input");
const genre_input = document.getElementById("genre_input");
const form = document.getElementById("addform");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  name_input;
  const data = {
    id: Math.random(),
    name: name_input.value,
    author: author_input.value,
    genre: genre_input.value,
  };
  console.log(data);
});
