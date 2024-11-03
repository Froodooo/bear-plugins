if (document.querySelector("body").classList.contains("home")) {
  fetch('https://bear-plugins.netlify.app/.netlify/functions/reading')
    .then(res => res.json())
    .then(books => books[Math.floor(Math.random() * books.length)])
    .then((book) => {
      document.querySelector('#reading')
        .innerHTML = `<a href='https://hardcover.app/books/${book.slug}' target='_blank'>${book.title} (${book.author})</a>`;
      document.querySelector('#reading')
        .classList.remove("blurred");
    });
}