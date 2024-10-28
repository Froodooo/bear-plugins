const storedScheme = localStorage.getItem("color-scheme");
const preferredScheme = storedScheme ? storedScheme : window && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? "light" : "dark";

document.querySelector(':root').style.setProperty("color-scheme", preferredScheme);