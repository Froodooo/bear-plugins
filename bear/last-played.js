if (document.querySelector("body").classList.contains("home")) {
  fetch('https://bear-plugins.netlify.app/.netlify/functions/last-played')
    .then(res => res.json())
    .then((track) => {
      document.querySelector('#last-played')
        .innerHTML = `${document.currentScript.getAttribute("data-prefix") ?? ""}<a href='${track.url}' target='_blank'>${track.title} (${track.artist})</a>`;
      document.querySelector('#last-played')
        .classList.remove("blurred");
    });
}