const clearBtn = document.querySelector("#clearBtn");
const todoBtn = document.querySelector("#todoBtn");
const todoCount = document.querySelector("#todoCount");
const todoListEl = document.querySelector("#todoListEl");
const todoOutput = document.querySelector("#todoOutput");

let todoList = [];

// Initialize

const init = () => {
  const storedTodos = JSON.parse(localStorage.getItem("todoStorage"));

  if (storedTodos !== null) {
    todoList = storedTodos;
  }

  populateTodos();
};

// Add function to submit button and retrieve input

todoBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const todoValue = document.querySelector("#todoInput").value;
  console.log(todoValue);

  const timestamp = new Date().getTime();
  console.log(timestamp);

  addTodo(`${todoValue}_${timestamp}`, todoValue);
});

// Add todo to LocalStorage

const addTodo = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    console.log(`Todo: "${key}" stored!`);
  } catch (error) {
    console.error("Error:", error);
  }

  localStorageLog();
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
      console.log(`Todo ${i + 1}: `, todo);

      let p = document.createElement("p");
      p.textContent = todo.title;
      p.setAttribute("data-index", i);
      p.classList.add("todoLi");
      todoListEl.appendChild(p);
    }
  } catch (error) {
    console.error("Error retrieving data: ", error);
  }
};

// Populate todos in DOM

const populateTodos = () => {
  placeholderTodos();

  todoList.innerHTML = "";
  todoCount.textContent = todoList.length;

  // for (let i = 0; i < todoList.length; i++) {
  //   const todo = todoList[i];

  //   let p = document.createElement("p");
  //   p.textContent = todo;
  //   p.setAttribute("data-index", i);
  //   p.classList.add("todoLi");

  //   const deleteBtn = document.createElement("button");
  //   deleteBtn.textContent = "X";
  //   deleteBtn.classList.add("deleteBtn");

  //   p.appendChild(deleteBtn);
  //   todoListEl.appendChild(p);
  // }
};

// Remove todo from LocalStorage

const removeTodo = (key) => {
  try {
    localStorage.removeItem(key);
    console.log(`Todo "${key}" removed!`);
  } catch (error) {
    console.error("Error in removing Todo:", error);
  }
};

// Remove all todos from localStorage

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
