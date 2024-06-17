if (document.querySelector("body").classList.contains("home")) {
  fetch(`${window.location.origin}/blog`)
    .then(res => res.text())
    .then((html) => new DOMParser().parseFromString(html, 'text/html').querySelector(".blog-posts").children)
    .then((blogPosts) => blogPosts[Math.floor(Math.random() * blogPosts.length)])
    .then((randomBlogPost) => {
      document.querySelector('#random-post').innerHTML = `Random post: <a href='${randomBlogPost.children[1].href}'>${randomBlogPost.children[1].text}</a>`;
      document.querySelector('#random-post').classList.remove("blurred");
    });
}