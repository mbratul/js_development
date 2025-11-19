//  fetch data from api

const url = "https://jsonplaceholder.typicode.com/posts/1";

/* fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  }); */

/* const response = await fetch(url);
const data = await response.json();
console.log(data); */

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
fetchData();
