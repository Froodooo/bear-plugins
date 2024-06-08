// This plugin only works for myself at this moment.
fetch('https://froodooo.pythonanywhere.com/last-played')
  .then(res => res.text())
  .then((track) => {
    document.querySelector('#last-played').innerHTML=`My last played song is ${track.title} by ${track.artist} (checked using <a href='https://www.last.fm/user/Froodooo' target='_blank'>Last.fm</a>).`;
  });
