"use strict";
{
  /** fetch api */
  //   const response = fetch("https://jsonplaceholder.typicode.com/todos/");
  //   console.log(response);
  fetch("https://jsonplaceholder.typicode.com/todos?limit=10")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data[0]);
    })
    .catch((error) => {
      console.error(error.message);
    });
}
{
  /** todos list */
  const form = document.getElementById("todo_form");
  const todoInp = document.getElementById("todo_input");
  const btnTodo = document.getElementById("btn_todo");
  const ultodoList = document.getElementById("todo_list");

  const url = "http://localhost:3000/todos";

  let todoItems = [];
  function getTodoItems() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        todoItems = data;
        console.log(todoItems);
        todoItems.map((todo) => {
          return generateTodList(todo);
        });
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
  function generateTodList(todo) {
    const li = document.createElement("li");
    li.innerText = todo.title;
    li.setAttribute("class", "todo_item");
    li.setAttribute("id", todo.id);
    ultodoList.appendChild(li);
  }
  window.addEventListener("load", getTodoItems);
}
