if (document.querySelector("body").classList.contains("home")) {
  fetch('https://bear-plugins.netlify.app/.netlify/functions/reading')
    .then(res => res.json())
    .then((book) => {
      document.querySelector('#reading').innerHTML = `Currently reading: <a href='https://hardcover.app/books/${book.slug}' target='_blank'>${book.title} (${book.author})</a>`;
      document.querySelector('#reading').classList.remove("blurred");
    });
}