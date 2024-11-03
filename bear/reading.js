if (document.querySelector("body").classList.contains("home")) {
  fetch('https://bear-plugins.netlify.app/.netlify/functions/reading')
    .then(res => res.json())
    .then(books => books[Math.floor(Math.random() * books.length)])
    .then((book) => {
      document.querySelector('#reading')
        .innerHTML = `<a href='https://hardcover.app/books/${book.slug}' target='_blank'><img src="${book.url}" alt="${book.title} (${book.author})" height="150"><p>${book.title} (${book.author})</p></a>`;
      document.querySelector('#reading')
        .classList.remove("blurred");
    });
}