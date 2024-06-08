// This plugin only works for myself at this moment.
fetch('https://froodooo.pythonanywhere.com/last-played')
  .then(res => res.text())
  .then((textResponse) => {
    document.querySelector('#last-played').innerHTML=`My last played song is ${textResponse} (checked using <a href='https://www.last.fm/user/Froodooo' target='_blank'>Last.fm</a>).`;
  });
