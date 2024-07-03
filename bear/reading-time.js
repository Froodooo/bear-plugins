if (document.querySelector("body").classList.contains("post")) {
  const readingTime = Math.ceil(document.querySelector("main").innerText.trim().split(/\s+/).length / parseInt(document.currentScript.getAttribute("data-wpm") ?? 255));
  document
    .querySelector("main")
    .insertBefore(
      document.body.appendChild(
        Object.assign(
          document.createElement("p"), {
          className: "reading-time",
          innerHTML: `Reading time: ${readingTime} minute${readingTime > 1 ? "s" : ""}`
        })),
      document.querySelector("main").childNodes[parseInt(document.currentScript.getAttribute("data-before-child") ?? 4)]);
}