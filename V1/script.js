const todoContainer = document.querySelector(".todoContainer");
const todoForm = document.querySelector(".todoForm");
const toDoBtn = document.querySelector(".todoBtn");
const todoList = document.querySelector(".todoList");

const init = () => {
  populateTodos();
};

const populateTodos = () => {
  for (let i = 1; i < 6; i++) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
};

init();
