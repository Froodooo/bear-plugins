// This plugin only works for myself at this moment.
fetch('https://froodooo.pythonanywhere.com/last-played')
  .then(res => res.json())
  .then((track) => {
    document.querySelector('#last-played').innerHTML=`My last played song is <a href='${track.url}' target='_blank'>${track.title} by ${track.artist}</a> (checked using <a href='https://www.last.fm/user/Froodooo' target='_blank'>Last.fm</a>).`;
  });