if (document.querySelector("body").classList.contains("post")) {
  function setContent(child) {
    switch (child["wm-property"]) {
      case "in-reply-to":
        return child.content?.text;
      case "like-of":
        return "liked this";
      case "repost-of":
        return "reposted this";
      default:
        return "interacted with this post in an unknown way";
    }
  }

  async function fetchInteractions(headerTitle) {
    const response = await fetch("https://webmention.io/api/mentions.jf2?target=" + document.URL);
    const data = await response.json();
    if (data && data.children.length > 0) {

      const interactions = document.createElement("div");
      interactions.id = "interactions";
      interactions.innerHTML = `<h3>${headerTitle ?? "Interactions"}</h3>`;

      for (const child of data.children) {
        const interaction = document.createElement("div");

        interaction.innerHTML = `
              <p>
                  <strong><a href="${child.author.url}" target="_blank">${child.author.name}</a></strong>
                  <small> - ${new Date(child["wm-received"]).toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}</small>
              </p>
              <blockquote>${setContent(child)}</blockquote>
          `;

        interactions.appendChild(interaction);
      }

      const upvoteForm = document.getElementById("upvote-form");
      upvoteForm.parentNode.insertBefore(interactions, upvoteForm.nextSibling);
    }
  }

  fetchInteractions(document.currentScript.getAttribute("data-interactions"));
}