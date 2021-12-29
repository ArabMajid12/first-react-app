const btnSearch = document.getElementById("search");
const inputVal = document.querySelector("#book-input");

btnSearch.addEventListener("click", async (e) => {
  //e.preventDefault();
  console.log(inputVal.value);
  const api = `https://www.googleapis.com/books/v1/volumes?q=${inputVal}&key=AIzaSyAZrPChoY7M_EkRmvb8MvsaMjaOHDyN3LE`;

  const res = await fetch(api);
  const { items } = await res.json();
  console.log(items);

  items.forEach((item) => {
    console.log(item.volumeInfo.title);
  });

  // let accessInfo = items.0.accessInfo;
});
