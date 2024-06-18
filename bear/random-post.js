if (document.querySelector("body").classList.contains("home")) {
  const randomBlogPost = document
    .querySelector(".blog-posts")
    .children[Math.floor(Math.random() * document.querySelector(".blog-posts").children.length)];
  document.querySelector('#random-post-all').remove();
  document.querySelector('#random-post').innerHTML = `Random post: <a href='${randomBlogPost.children[1].href}'>${randomBlogPost.children[1].text}</a>`;
  document.querySelector('#random-post').classList.remove("blurred");
}