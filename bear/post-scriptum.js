if (document.body.classList.contains("post")) {
  document
    .querySelector(".tags")
    .before(
      Object.assign(
        document.createElement("p"), {
        className: "post-scriptum",
        innerHTML: "If you have any questions or comments, please contact me via <a href='mailto:blog@yordi.me' target='_blank'>email</a> or <a href='https://social.lol/@yordi' target='_blank'>Mastodon</a>."
      }
      )
    );
}