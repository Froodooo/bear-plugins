fetch('https://bear-plugins.netlify.app/.netlify/functions/reading')
  .then(res => res.json())
  .then((book) => {
    let reading = document.querySelector('#reading');
    reading.innerHTML = `Currently reading: <a href='https://hardcover.app/books/${book.slug}' target='_blank'>${book.title} (${book.author})</a>`;
    reading.classList.remove("blurred");
  });