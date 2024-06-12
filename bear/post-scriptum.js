if (document.body.classList.contains("post")) {
  document
    .querySelector(".tags")
    .before(
      Object.assign(
        document.createElement("p"), {
        className: "post-scriptum",
        innerHTML: `If you have any questions or comments, please contact me via ${document.currentScript.getAttribute("data").split(";").map((item) => {
          const [key, value] = item.split(":");
          if (key === "email") {
            return `<a href="mailto:${value}">${key}</a>`;
          } else {
            return `<a href="${value}">${key}</a>`;
          }
        }).join(" or ")
          }.`
      })
    );
}