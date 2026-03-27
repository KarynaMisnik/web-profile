document.addEventListener("DOMContentLoaded", () => {
  const feedUrl =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@karinamisnik94";

  fetch(feedUrl)
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("articles");

      data.items
        .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
        .forEach((article) => {
          const text = article.content.replace(/<[^>]*>/g, "");
          const excerpt = text.split(" ").slice(0, 35).join(" ") + "...";
          const words = text.split(" ").length;
          const readingTime = Math.ceil(words / 200);

          const articleCard = document.createElement("div");
          articleCard.classList.add("article-card");

          articleCard.innerHTML = `
          <h3>${article.title}</h3>

          <p class="meta">
            ${new Date(article.pubDate).toLocaleDateString()} • ${readingTime} min read
          </p>

          <p class="excerpt">
            ${excerpt}
          </p>

          <a href="${article.link}" target="_blank">
            Read full on Medium →
          </a>
        `;

          container.appendChild(articleCard);
        });
    })
    .catch((error) => console.error(error));
});
