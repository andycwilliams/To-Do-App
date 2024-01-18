const clearBtn = document.querySelector("#clearBtn");
const todoBtn = document.querySelector("#todoBtn");
const todoCount = document.querySelector("#todoCount");
// const todoListEl = document.querySelector("#todoListEl");
// const todoOutput = document.querySelector("#todoOutput");
const todoTable = document.querySelector("#todoTable");

let todoList = [];
let todoCounter = 0;

// Initialize

const init = () => {
  todoList.innerHTML = "";
  // const storedTodos = JSON.parse(localStorage.getItem("todoStorage"));

  // if (storedTodos !== null) {
  //   todoList = storedTodos;
  // }

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
  init();
});

// Add todo to LocalStorage

const addTodo = (value) => {
  const order = JSON.parse(localStorage.getItem("todoOrder")) || [];
  const key = `todo_${new Date().getTime()}`;

  order.push(key);

  localStorage.setItem("todoOrder", JSON.stringify(order));
  localStorage.setItem(key, JSON.stringify(value));

  // localStorageLog();
};

// Log everything currently stored in localStorage

const localStorageLog = () => {
  console.log("Currently in localStorage...");
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key));
      console.log(`Key: ${key} \n Value: `, value);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

// Get placeholders todos to pre-populate list

const placeholderTodos = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    const todos = await response.json();

    for (let i = 0; i < 5; i++) {
      const todo = todos[i];

      const tableRow = document.createElement("tr");

      const todoItem = document.createElement("td");
      todoItem.textContent = todo.title;

      const todoDelete = document.createElement("td");
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "X";
      deleteBtn.classList.add("deleteBtn");
      deleteBtn.addEventListener("click", () => removeTodo(todo));

      todoDelete.appendChild(deleteBtn);

      tableRow.appendChild(todoItem);
      tableRow.appendChild(todoDelete);

      todoTable.appendChild(tableRow);
    }
  } catch (error) {
    console.error("Error retrieving data: ", error);
  }
};

// Populate todos in DOM

const populateTodos = async () => {
  todoList.innerHTML = "";
  todoCount.textContent = localStorage.length;

  try {
    const order = JSON.parse(localStorage.getItem("todoOrder")) || [];

    for (const key of order) {
      const value = JSON.parse(localStorage.getItem(key));

      const tableRow = document.createElement("tr");

      const todoItem = document.createElement("td");
      todoItem.textContent = value;

      const todoDelete = document.createElement("td");
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "X";
      deleteBtn.classList.add("deleteBtn");
      deleteBtn.addEventListener("click", () => removeTodo(key));

      todoDelete.appendChild(deleteBtn);

      tableRow.appendChild(todoItem);
      tableRow.appendChild(todoDelete);

      todoTable.appendChild(tableRow);
    }
  } catch (error) {
    console.error("Error: ", error);
  }
};

// Remove todo from table and LocalStorage

const removeTodo = (key) => {
  const removeRow = Array.from(todoTable.rows).find(
    (row) => row.cells[0].textContent === key
  );

  if (removeRow) {
    todoTable.removeChild(removeRow);
    // localStorage.removeItem(key);
  }

  localStorage.removeItem(key);

  const order = JSON.parse(localStorage.getItem("todoOrder")) || [];
  const index = order.indexOf(key);
  if (index !== -1) {
    order.splice(index, 1);
    localStorage.setItem("todoOrder", JSON.stringify(order));
  }

  // console.log(`Todo "${key}" removed!`);
};

// Remove all todos from table and localStorage

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
