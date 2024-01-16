const todoBtn = document.querySelector(".todoBtn");

let todoList = [];

// Initialize

const init = () => {
  const storedTodos = JSON.parse(localStorage.getItem("todoStorage"));
  if (storedTodos !== null) {
    todoList = storedTodos;
  }
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

// Remove todo from LocalStorage

const removeTodo = (key) => {
  try {
    localStorage.removeItem(key);
    console.log(`Todo "${key}" removed!`);
  } catch (error) {
    console.error("Error:", error);
  }
};

init();
