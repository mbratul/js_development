/**
 * get data from my own json server
 * @returns {string}
 */
const url = "http://localhost:3000/books";
async function fetchBooks() {
  const response = await fetch(url);
  const data = await response.json();

  const bookListEl = document.querySelector("#book-list");
  const showList = data
    .map((book) => {
      const html = `<li class="p-2 border rounded"><strong>${book.title}</strong> by ${book.author}</li>`;
      return html;
    })
    .join("");

  bookListEl.innerHTML = showList;
}

async function addBook() {
  const title = prompt("Enter book name");
  const author = prompt("Enter author name");
  //   console.log(JSON.stringify({ title, author }));
  await fetch(url, {
    method: "POST",
    body: JSON.stringify({ title, author }),
  });
  fetchBooks();
}

async function updateBook() {
  await fetch(`${url}/1`, {
    method: "PUT",
    body: JSON.stringify({
      title: "Refactoring",
      author: "Martin Fowler",
    }),
  });
  fetchBooks();
}

async function patchBook() {
  await fetch(`${url}/1`, {
    method: "PATCH",
    body: JSON.stringify({
      title: "Refactoring -XYZ",
    }),
  });
  fetchBooks();
}

async function deleteBook() {
  await fetch(`${url}/3d03`, {
    method: "DELETE",
  });
  fetchBooks();
}

fetchBooks();
