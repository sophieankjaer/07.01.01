document.addEventListener("DOMContentLoaded", function () {
  const seasonsList = document.getElementById("seasons-list");
  const seasonsData = [
    {
      name: "Summer",
      image: "https://kea-alt-del.dk/t7/images/webp/640/1541.webp",
    },

    {
      name: "Spring",
      image: "https://kea-alt-del.dk/t7/images/webp/640/1573.webp",
    },
    {
      name: "Fall",
      image: "https://kea-alt-del.dk/t7/images/webp/640/1535.webp",
    },
    {
      name: "Winter",
      image: "https://kea-alt-del.dk/t7/images/webp/640/1530.webp",
    },
  ];

  seasonsData.forEach((season) => {
    const article = document.createElement("article");
    const heading = document.createElement("h1");
    const image = document.createElement("img");

    heading.textContent = season.name;
    image.src = season.image;
    image.alt = season.name;

    article.appendChild(heading);
    article.appendChild(image);
    seasonsList.appendChild(article);
  });
});
