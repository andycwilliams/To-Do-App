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
