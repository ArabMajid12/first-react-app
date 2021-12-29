const name_input = document.getElementById("name_input");
const author_input = document.getElementById("author_input");
const genre_input = document.getElementById("genre_input");
const form = document.getElementById("addForm");

let books = [];

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
  books.push(data);
  console.log(books);
  updateTable(data);
});

function updateTable() {
  const table = document.querySelector("table tbody");
  table.innerHTML = "";

  books.forEach((book, index) => {
    table.insertAdjacentHTML(
      "beforeend",
      `
    <tr id=${book.id}>
    <th scope="row">${index + 1}</th>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.genre}</td>
    <td>
      <button>save</button><button onclick="deleteBook(${
        book.id
      })">delete</button>
    </td>
  </tr>
    `
    );
  });
}

function deleteBook(id) {
  books = books.filter((book) => book.id !== id);
  console.log(books);
  updateTable();
}
