const forInput = document.querySelectorAll('input[name="for"]');
const Coaching = document.getElementById("coaching");
const Computer = document.getElementById("computer");
const Language = document.getElementById("language");
const form = document.querySelector("form");

// forInput.addEventListener("change", () => {
//   if (forInput.value == "coaching") {
//     Coaching.classList.remove("d-none");
//     computer.classList.add("d-none");
//   } else if (forInput.value == "computer") {
//     console.log("computer");
//     computer.classList.remove("d-none");
//     Coaching.classList.add("d-none");
//   }
// });

forInput.forEach((input) => {
  input.addEventListener("change", () => {
    if (input.value == "coaching") {
      console.log("coaching");
      Coaching.classList.add("animate__animated", "animate__fadeIn");

      Coaching.classList.remove("d-none");
      Computer.classList.add("d-none");
      Language.classList.add("d-none");
    } else if (input.value == "computer") {
      console.log("computer");
      Computer.classList.add("animate__animated", "animate__fadeIn");

      Computer.classList.remove("d-none");
      Coaching.classList.add("d-none");
      Language.classList.add("d-none");
    } else if (input.value == "language") {
      console.log("language");
      Language.classList.add("animate__animated", "animate__fadeIn");

      Language.classList.remove("d-none");
      Computer.classList.add("d-none");
      Coaching.classList.add("d-none");
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const firstName = formData.get("firstname");
  console.log(firstName);

  const lastName = formData.get("lastname");
  console.log(lastName);

  const fatherName = formData.get("fathername");
  console.log(fatherName);

  const phoneNum = formData.get("phone");
  console.log(phoneNum);

  const birthday = formData.get("birthday");
  console.log(birthday);

  const Class = formData.get("class");
  console.log(Class);

  const Time = formData.get("timing");
  console.log(Time);
  const courses = formData.get("courses");
  console.log(courses);
});

// CIT.addEventListener("change", (e) => {
//   if (e.target.value == "CIT") {
//     console.log("C.I.T");
//   }
// });
// Web.addEventListener("change", () => {
//   if (input.value == "Web Designing") {
//     console.log("Web Designing");
//   }
// });

function showPreview(event) {
  if (event.target.files.length > 0) {
    let src = URL.createObjectURL(event.target.files[0]);
    let preview = document.getElementById("file-ip-1-preview");
    preview.src = src;
  }
}
