const body = document.querySelector("body");

if (body.classList.contains("post")) {
  const mainContainer = document.querySelector("main");
  const text = mainContainer.innerText;
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  
  const readingTime = document.createElement("p");
  readingTime.id = "reading-time";
  const italic = document.createElement("em");
  italic.textContent = `Estimated reading time: ${time} minute${time > 1 ? "s" : ""}`;
  readingTime.appendChild(italic);

  mainContainer.insertBefore(readingTime, mainContainer.childNodes[2]);
}