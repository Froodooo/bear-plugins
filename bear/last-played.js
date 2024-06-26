if (document.querySelector("body").classList.contains("home")) {
  fetch('https://bear-plugins.netlify.app/.netlify/functions/last-played')
    .then(res => res.json())
    .then((track) => {
      document.querySelector('#last-played')
        .innerHTML = `<a href='${track.url}' target='_blank'>${track.title} (${track.artist})</a>`;
      document.querySelector('#last-played')
        .classList.remove("blurred");
    });
}