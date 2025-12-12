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
  /** @type{HTMLInputElement} */
  const todoInp = document.getElementById("todo_input");
  const btnTodo = document.getElementById("btn_todo");
  const ultodoList = document.getElementById("todo_list");

  let editableTodo = null;
  let editMode = false;
  const url = "http://localhost:3000/todos";

  let todoItems = [];
  function getTodoItems() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        todoItems = data;
        ultodoList.replaceChildren();
        todoInp.value = "";
        // console.log(todoItems);
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
    li.setAttribute("class", "todo_item");
    li.setAttribute("id", todo.id);
    todo.isCompleted === true
      ? li.classList.add("bg_green")
      : li.classList.add("bg_aqua");
    // li.innerText = todo.title;
    const todoPara = document.createElement("p");
    todoPara.innerText = todo.title;
    todoPara.setAttribute("class", "todo_title");
    li.appendChild(todoPara);

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.setAttribute("class", "todo_edit_btn");
    editBtn.addEventListener("click", function (event) {
      edithandler(event, todo);
    });
    li.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.setAttribute("class", "todo_delete");
    deleteBtn.addEventListener("click", function () {
      handleRemoveBtn(todo);
    });
    li.appendChild(deleteBtn);

    li.addEventListener("click", function () {
      changeCompleteUpdateHandler(todo);
    });
    ultodoList.appendChild(li);
  }
  function createTodo(event) {
    if (todoInp.value !== "") {
      event.preventDefault();
      const newTodo = {
        id: Date.now(),
        title: todoInp.value.trim(),
        isCompleted: false,
      };
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      }).then(() => {
        getTodoItems();
      });
    } else {
      alert("Please provide a valid title");
    }
  }

  function handleRemoveBtn(todo) {
    fetch(`${url}/${todo.id}`, {
      method: "DELETE",
    }).then(() => {
      getTodoItems();
    });
  }

  function edithandler(event, todo) {
    event.stopPropagation();
    editableTodo = todo;
    todoInp.value = editableTodo.title;
    editMode = true;
  }
  function updateHandler(event) {
    event.preventDefault();
    if (todoInp.value !== "") {
      const updateTodo = {
        id: editableTodo.id,
        isCompleted: false,
        title: todoInp.value.trim(),
      };
      fetch(`${url}/${editableTodo.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateTodo),
      }).then(() => {
        getTodoItems();
        editMode = false;
        todoInp.value = "";
        editableTodo = null;
      });
    } else {
      alert("Please provide a valid title");
    }
  }
  function changeCompleteUpdateHandler(todo) {
    const item = {
      id: todo.id,
      title: todo.title,
      isCompleted: !todo.isCompleted,
    };
    fetch(`${url}/${todo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    }).then(() => {
      getTodoItems();
    });
  }
  window.addEventListener("load", getTodoItems);
  form.addEventListener("submit", function (event) {
    if (editMode) {
      updateHandler(event);
    } else {
      createTodo(event);
    }
  });
}
