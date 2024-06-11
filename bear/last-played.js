const body = document.querySelector("body");

if (body.classList.contains("home")) {
  fetch('https://bear-plugins.netlify.app/.netlify/functions/last-played')
    .then(res => res.json())
    .then((track) => {
      let lastPlayed = document.querySelector('#last-played');
      lastPlayed.innerHTML = `Last played: <a href='${track.url}' target='_blank'>${track.title} (${track.artist})</a>`;
      lastPlayed.classList.remove("blurred");
    });
}