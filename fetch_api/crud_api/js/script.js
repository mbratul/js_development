"use strict";
const API = `http://localhost:3000/todos`;

const todoList = document.getElementById("todo_list");
const todoForm = document.getElementById("todo_form");
/** @type {HTMLInputElement} */
const todoInput = document.getElementById("todo_input");
const btnSubmit = document.getElementById("btnSubmit");

const filterAll = document.getElementById("filterAll");
const filterActive = document.getElementById("filterActive");
const filterCompleted = document.getElementById("filterCompleted");

let currentFilter = "all"; // all | activate | completed

/**
 * load todos with Fetch API with filtering
 */
async function loadTodos() {
  let url = API;
  if (currentFilter === "active") {
    url += "?isCompleted=false";
    // url = `http://localhost:3000/todos??isCompleted=false`
  } else if (currentFilter === "completed") {
    url += "?isCompleted=true";
    // url = `http://localhost:3000/todos??isCompleted=true`
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    rendersTodos(data);
  } catch (error) {
    todoList.innerHTML = `<li class="text-red-600">Failed to load to List</li>`;
  }
}

/**
 * renders todos in the Dom List
 */
function rendersTodos(todos) {
  todoList.innerHTML = "";
  if (todos.length === 0) {
    todoList.innerHTML = `<li class="text-gray-500"> No Todos found in the current filter</li>`;
    return;
  }
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = "flex item-center gap-3";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.isCompleted;
    checkbox.className = "w-5 h-5 cursor-pointer";
    // Todos: add a Event Listener in the checkbox for toggling the isCompleted flag
    checkbox.addEventListener("change", function () {
      toggleIsCompleted(todo.id, checkbox.checked);
    });

    // Title
    const leftDiv = document.createElement("div");
    leftDiv.className = "flex item-center gap-3";
    const title = document.createElement("span");
    title.textContent = todo.title;
    title.className = todo.isCompleted ? "line-through text-gray-400" : "";
    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(title);

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete Todo";
    deleteBtn.className =
      "bg-red-500 text-white px-3 py-1 rounded hover:bg-red-800 cursor-pointer";
    deleteBtn.addEventListener("click", function () {
      deleteTodo(todo.id);
    });
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className =
      "bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-800 cursor-pointer";
    editBtn.addEventListener("click", async function () {
      updateTodo(todo.id, todo.title);
    });
    li.appendChild(leftDiv);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}
async function toggleIsCompleted(id, isCompleted) {
  await fetch(`${API}/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ isCompleted }),
    headers: { "Content-type": "application/json" },
  });
  await loadTodos();
}
async function deleteTodo(id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });

  await loadTodos();
}
async function updateTodo(id, title) {
  todoInput.value = title;
  btnSubmit.innerText = "Update";
  await fetch(`${API}/${id}`, {
    method: "PUT",
    body: JSON.stringify({ id, title }),
  });
  btnSubmit.innerText = "Add";
  await loadTodos();
}

todoForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  const title = todoInput.value.trim();
  if (!title) return;
  await fetch(API, {
    method: "POST",
    body: JSON.stringify({ title, isCompleted: false }),
    headers: { "Content-type": "application/json" },
  });
  todoInput.value = "";
  await loadTodos();
});

filterAll.addEventListener("click", async function () {
  currentFilter = "all";
  setActiveFilterButton();
  await loadTodos();
});

filterActive.addEventListener("click", async function () {
  currentFilter = "active";
  setActiveFilterButton();
  await loadTodos();
});

filterCompleted.addEventListener("click", async function () {
  currentFilter = "completed";
  setActiveFilterButton();
  await loadTodos();
});

function setActiveFilterButton() {
  filterAll.classList.toggle("bg-blue-500", currentFilter === "all");
  filterAll.classList.toggle("bg-gray-300", currentFilter !== "all");

  filterActive.classList.toggle("bg-blue-500", currentFilter === "active");
  filterActive.classList.toggle("bg-gray-300", currentFilter !== "active");

  filterCompleted.classList.toggle(
    "bg-blue-500",
    currentFilter === "completed"
  );
  filterCompleted.classList.toggle(
    "bg-gray-300",
    currentFilter !== "completed"
  );
}
setActiveFilterButton();
loadTodos();
