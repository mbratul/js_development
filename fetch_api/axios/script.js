// axios get data from server
const url = "https://jsonplaceholder.typicode.com/posts/1";
async function doSomething() {
  const response = await axios.get(url);
  const data = response.data;
  //   console.log(data);
  const result = document.querySelector("#result");
  result.innerHTML = `
        <h2 class="text-2xl">${data.title}</h2>
        <p>${data.body}</p>
      `;
}

doSomething();
