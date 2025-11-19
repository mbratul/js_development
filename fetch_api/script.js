// fetch api workflow in js

async function doSomething(params) {
  /* fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {
      const result = document.querySelector("#result");
      result.innerHTML = `
        <h2 class="text-2xl">${data.title}</h2>
        <p>${data.body}</p>
      `;
    }); */
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  const result = document.querySelector("#result");
  result.innerHTML = `
        <h2 class="text-2xl">${data.title}</h2>
        <p>${data.body}</p>
      `;
}

async function showDogs() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  const result = document.querySelector("#result");
  result.innerHTML = `   
        <h2 class="text-2xl">${data.message}</h2>     
        <img src="${data.message}" width="200" height="200" alt="">
      `;
}
