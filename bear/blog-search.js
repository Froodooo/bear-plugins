if (document.querySelector(".blog-posts") && document.body.classList.contains("blog")) {
  document.body.appendChild(
    Object.assign(
      document.createElement("input"), {
      type: "text",
      id: "searchInput",
      placeholder: "Search...",
      style: "display: block;",
      oninput: (event) => {
        document.querySelectorAll(".blog-posts li").forEach((post) => {
          post.style.display = post.textContent.toLowerCase().includes(event.target.value.toLowerCase()) ? "" : "none";
        })
      }
    })
  );
}