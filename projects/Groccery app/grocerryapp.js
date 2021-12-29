let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

// form submit event
form.addEventListener("submit", addItem);

//Delete event

itemList.addEventListener("click", removeItem);

//Filter event

filter.addEventListener("keyup", filterItems);

//Add item
function addItem(e) {
  e.preventDefault();

  //Get input value

  let newItem = document.getElementById("item").value;
  // let newItem = document.getElementById("item1").value;

  if (newItem.trim() == "") {
    const alertDiv = document.getElementById("alert-box");
    alertDiv.classList.remove("d-none");
    document.getElementById("item").value = "";
    setTimeout(() => alertDiv.classList.add("d-none"), 3000);

    return;
  }
  //Create new li element
  let li = document.createElement("li");

  //Add class
  li.className = "list-group-item";

  //Ad text node with input value

  li.appendChild(document.createTextNode(newItem.trim()));

  //Create del button element
  let deleteBtn = document.createElement("button");

  //Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  //Append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  li.appendChild(deleteBtn);

  itemList.appendChild(li);
  document.getElementById("item").value = "";
}

// Remove Item

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items

function filterItems(e) {
  // convert text to lowercase
  let text = e.target.value.toLowerCase();

  // Get lis
  let items = itemList.getElementsByTagName("li");
  console.log(items);
  // Convert to an array

  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
