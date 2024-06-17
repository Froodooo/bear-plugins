const allBlogPosts = new DOMParser()
  .parseFromString(await(await fetch(document.currentScript.getAttribute("data-blog"))).text(), 'text/html').querySelector(".blog-posts").children;

const randomBlogPost = allBlogPosts[Math.floor(Math.random() * allBlogPosts.length)];

document.querySelector('#random-post').innerHTML = `Random post: <a href='${randomBlogPost.children[1].href}'>${randomBlogPost.children[1].text}</a>`;
document.querySelector('#random-post').classList.remove("blurred");