if (document.querySelector("body").classList.contains("home")) {
  fetch('https://bear-plugins.netlify.app/.netlify/functions/last-played')
    .then(res => res.json())
    .then((track) => {
      document.querySelector('#last-played')
        .innerHTML = `<a href='${track.url}' target='_blank'><img src="${track.image}" alt="${track.title} (${track.artist})" height="150"><p>${track.title} (${track.artist})</p></a>`;
      document.querySelector('#last-played')
        .classList.remove("blurred");
    });
}