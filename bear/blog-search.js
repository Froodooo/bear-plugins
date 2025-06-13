  if (document.querySelector(".blog-posts") && document.body.classList.contains("blog")) {
    document.querySelector("main").insertBefore(
      Object.assign(
        document.createElement("input"), {
        type: "text",
        id: "searchInput",
        placeholder: "Search...",
        style: "display: block;",
        oninput: (event) => {
          const monthsToDisplay = new Set();

          document.querySelectorAll(".blog-posts li").forEach((post) => {
            if (post.textContent.toLowerCase().includes(event.target.value.toLowerCase())) {
              post.style.display = "";

              const timeElement = post.querySelector('time');
              const date = new Date(timeElement.getAttribute('datetime'));
              const monthYear = date.toLocaleString('default', { month: 'long', year: 'numeric' });
              monthsToDisplay.add(monthYear);
            } else {
              post.style.display = "none";
            }
          })

          if (event.target.value !== "") {
            document.querySelectorAll(".blog-posts h2").forEach((h2) => {
              h2.style.display = monthsToDisplay.has(h2.textContent) ? "" : "none";
            });
          }
        }
      }),
      document.querySelector(".blog-posts")
    );
  }