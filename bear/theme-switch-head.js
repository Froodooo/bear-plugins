const storedScheme = localStorage.getItem("color-scheme");
const preferredScheme = storedScheme ? storedScheme : window && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? "light" : "dark";
localStorage.setItem("color-scheme", preferredScheme);

document.querySelector(':root').style.setProperty("color-scheme", preferredScheme);