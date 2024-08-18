if (document.querySelector("body").classList.contains("home")) {
  const randomBlogPost = document
    .querySelector("#random-post-all > .blog-posts")
    .children[Math.floor(Math.random() * document.querySelector("#random-post-all > .blog-posts").children.length)];
  document.querySelector('#random-post-all').remove();
  document.querySelector('#random-post').innerHTML = `${document.currentScript.getAttribute("data-prefix") ?? ""}<a href='${randomBlogPost.children[1].href}'>${document.currentScript.getAttribute("data-text") ?? randomBlogPost.children[1].text}</a>`;
  document.querySelector('#random-post').classList.remove("blurred");
}