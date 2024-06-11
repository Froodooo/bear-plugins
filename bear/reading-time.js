if (document.querySelector("body").classList.contains("post")) {
  const readingTimeTime = Math.ceil(document.querySelector("main").innerText.trim().split(/\s+/).length / 255);
  
  const readingTimeElement = document.createElement("p");
  readingTimeElement.id = "reading-time";

  const readingTimeItalicElement = document.createElement("em");
  readingTimeItalicElement.textContent = `Reading time: ${readingTimeTime} minute${readingTimeTime > 1 ? "s" : ""}`;

  readingTimeElement.appendChild(readingTimeItalicElement);

  document.querySelector("main").insertBefore(readingTimeElement, document.querySelector("main").childNodes[4]);
}