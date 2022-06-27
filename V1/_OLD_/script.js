const todoForm = document.querySelector(".toDoForm");
const todoInput = document.querySelector(".todoInput");
const todoOutput = document.querySelector(".todoOutput");
const toDoBtn = document.querySelector(".toDoBtn");

const todoList = [];

const init = () => {
  const storedTodos = JSON.parse(localStorage.getItem("todos"));

  if (!storedTodos) {
    return;
  } else {
    todoList = storedTodos;
  }
  todoOutput.textContent = storedTodos;
  generateToDo();
};

const generateToDo = () => {
  console.log("Generating to-do...");

  localStorage.setItem("todos", JSON.stringify(todos));
};

toDoBtn.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(todoInput.value);

  //   const currentToDo = document.querySelector(".")

  const todoText = todoInput.value.trim();
  if (todoText === "") {
    console.log("It's blank. Add a to-do!");
    return;
  }

  localStorage.setItem("todos", todos);

  todoList.push(todoText);
  todoInput.value = "";
});

init();

// ----------------------------------------------------------------

// signUpButton.addEventListener("click", function(event) {
//     event.preventDefault();

//     var email = document.querySelector("#email").value;
//     var password = document.querySelector("#password").value;

//     if (email === "") {
//       displayMessage("error", "Email cannot be blank");
//     } else if (password === "") {
//       displayMessage("error", "Password cannot be blank");
//     } else {
//       displayMessage("success", "Registered successfully");

//       localStorage.setItem("email", email);
//       localStorage.setItem("password", password);
//       renderLastRegistered();
//     }
//   });

// ----------------------------------------------------------------

// function generateToDo() {
//   todoOutput.innerHTML = "";

//   for (let i = 0; i < todos.length; i++) {
//     const todo = todos[i];

//     const li = document.createElement("li");
//     li.textContent = todo;
//     li.setAttribute("data-index", i);

//     const button = document.createElement("button");
//     button.textContent = "Completed";

//     li.appendChild(button);
//     todoOutput.appendChild(li);
//   }
// }

// function init() {
//   const storedTodos = JSON.parse(localStorage.getItem("todos"));
//   if (storedTodos !== null) {
//     todos = storedTodos;
//   }
//   generateToDo();
// }

// function storeTodos() {
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// todoForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const todoText = todoInput.value.trim();
//   if (todoText === "") {
//     return;
//   }
//   todos.push(todoText);
//   todoInput.value = "";

//   storeTodos();
//   generateToDo();
// });

// todoOutput.addEventListener("click", function (e) {
//   const element = e.target;
//   if (element.matches("button") === true) {
//     const index = element.parentElement.getAttribute("data-index");
//     todos.splice(index, 1);
//     storeTodos();
//     generateToDo();
//   }
// });

// init();
