const feedUrl =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@karinamisnik94";

fetch(feedUrl)
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("articles-container");

    data.items.forEach((article) => {
      const articleCard = document.createElement("div");

      articleCard.classList.add("article-card");

      articleCard.innerHTML = `
        <h3>${article.title}</h3>
        <p>${new Date(article.pubDate).toLocaleDateString()}</p>
        <a href="${article.link}" target="_blank">
          Read Article
        </a>
      `;

      container.appendChild(articleCard);
    });
  })
  .catch((error) => console.error(error));
