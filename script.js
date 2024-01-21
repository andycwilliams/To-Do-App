const clearBtn = document.querySelector("#clearBtn");
const todoBtn = document.querySelector("#todoBtn");
const todoCount = document.querySelector("#todoCount");
const todoTable = document.querySelector("#todoTable");
const currentYear = new Date().getFullYear();

let todoList = [];
let todoCounter = 0;

document.getElementById("currentYear").textContent = currentYear;

// Initialize app

const init = () => {
  todoList.innerHTML = "";

  populateTodos();
};

// Add listener to submit button and retrieve input

todoBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const todoValue = document.querySelector("#todoInput").value;
  console.log(todoValue);

  if (todoValue == "") {
    alert("Please enter a todo!");
    return false;
  }

  addTodo(todoValue);
  // init();
  // populateTodos();
});

// Add to-do to LocalStorage

const addTodo = (value) => {
  const order = JSON.parse(localStorage.getItem("todoOrder")) || [];
  const key = `todo_${new Date().getTime()}`;

  order.push(key);

  localStorage.setItem("todoOrder", JSON.stringify(order));
  localStorage.setItem(key, JSON.stringify(value));

  populateTodos();
};

// Get placeholders to-dos to pre-populate list

const placeholderTodos = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    const todos = await response.json();

    for (let i = 0; i < 5; i++) {
      const { title, id } = todos[i];

      const tableRow = document.createElement("tr");

      const todoItem = document.createElement("td");
      todoItem.textContent = title;

      const todoDelete = document.createElement("td");
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "X";
      deleteBtn.classList.add("buttons");
      deleteBtn.addEventListener("click", () => removeTodo(id));

      todoDelete.appendChild(deleteBtn);

      tableRow.appendChild(todoItem);
      tableRow.appendChild(todoDelete);

      todoTable.appendChild(tableRow);
    }
  } catch (error) {
    console.error("Error retrieving data: ", error);
  }
};

// Populate to-dos in the DOM

const populateTodos = () => {
  try {
    const order = JSON.parse(localStorage.getItem("todoOrder")) || [];

    todoList.innerHTML = "";
    todoCount.textContent = order.length;

    order.forEach((key) => {
      const value = JSON.parse(localStorage.getItem(key));

      const tableRow = document.createElement("tr");

      const todoItem = document.createElement("td");
      todoItem.textContent = value;

      const todoDelete = document.createElement("td");
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "X";
      deleteBtn.classList.add("tableButtons");
      deleteBtn.addEventListener("click", () => removeTodo(key));
      todoDelete.style.height = "30px";
      todoDelete.appendChild(deleteBtn);

      tableRow.appendChild(todoItem);
      tableRow.appendChild(todoDelete);

      todoTable.appendChild(tableRow);
    });
  } catch (error) {
    console.error("Error in populateTodos: ", error);
  }

  // console.log(JSON.parse(localStorage.getItem("todoOrder")));
  // console.log(localStorage);
};

// Remove to-do from table and LocalStorage

const removeTodo = (key) => {
  const removeRow = Array.from(todoTable.rows).find(
    (row) => row.cells[0].textContent === key
  );

  if (removeRow) {
    todoTable.removeChild(removeRow);
  }

  localStorage.removeItem(key);

  const order = JSON.parse(localStorage.getItem("todoOrder")) || [];
  const index = order.indexOf(key);
  if (index !== -1) {
    order.splice(index, 1);
    localStorage.setItem("todoOrder", JSON.stringify(order));
  }
};

// Remove all to-dos from table and localStorage

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();

  try {
    localStorage.clear();
    console.log("All todos removed!");
  } catch (error) {
    console.error("Error removing all todos:", error);
  }
});

init();
