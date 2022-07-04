const todoBtn = document.querySelector(".todoBtn");
const todoContainer = document.querySelector(".todoContainer");
const todoCount = document.querySelector(".todoCount");
const todoForm = document.querySelector(".todoForm");
const todoInput = document.querySelector(".todoInput");
const todoOutput = document.querySelector(".todoOutput");

let todoList = [];

const init = () => {
  const storedTodos = JSON.parse(localStorage.getItem("todoStorage"));
  if (storedTodos !== null) {
    todoList = storedTodos;
  }

  populateTodos();
};

const populateTodos = () => {
  // for (let i = 1; i < 6; i++) {
  //   fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }

  todoList.innerHTML = "";
  todoCount.textContent = todoList.length;

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];

    let p = document.createElement("p");
    p.textContent = todo;
    p.setAttribute("data-index", i);
    p.classList.add("todoLi");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("deleteBtn");

    p.appendChild(deleteBtn);
    todoOutput.appendChild(p);
  }
};

const storeTodos = () => {
  localStorage.setItem("todoStorage", JSON.stringify(todoList));
};

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoText = todoInput.value.trim();
  if (todoText === "") {
    return;
  }
  todoList.push(todoText);
  todoInput.value = "";

  storeTodos();
  populateTodos();
});

todoOutput.addEventListener("click", (e) => {
  const todoOutputEl = e.target;
  if (todoOutputEl.matches("button") === true) {
    const index = todoOutputEl.parentElement.getAttribute("data-index");
    todoList.splice(index, 1);

    storeTodos();
    populateTodos();
  }
});

init();
