async function fetchBooks() {
  const url = "http://localhost:3000/books";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  const bookListEl = document.querySelector("#book-list");
  const showList = data
    .map((book) => {
      const html = `<li class="p-2 border rounded"><strong>${book.title}</strong> by ${book.author}</li>`;
      return html;
    })
    .join("");

  bookListEl.innerHTML = showList;
}
fetchBooks();
