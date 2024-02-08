fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then((data) => {
    // Marker det første og sidste produkt som udsolgt
    data[0].soldout = true;
    data[data.length - 1].soldout = true;

    // Tilføj rabat til det sjette produkt
    data[5].discount = 10;

    showProducts(data);
  });

function showProducts(products) {
  const template = document.querySelector("#smallProductTemplate").content;

  console.log(products); // Tilføjet for at kontrollere, om produkterne bliver hentet korrekt

  products.forEach((product) => {
    const copy = template.cloneNode(true);

    copy.querySelector("h1").textContent = product.brandname;
    copy.querySelector("h2").textContent = product.productdisplayname;
    copy.querySelector(
      "img"
    ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    copy.querySelector("img").alt = product.productdisplayname;

    // Beregn rabatprisen, hvis rabatfeltet er tilgængeligt
    const priceElement = copy.querySelector(".price");
    if (product.discount) {
      const discountedPrice = product.price * (1 - product.discount / 100);
      priceElement.textContent = `$${discountedPrice.toFixed(2)} (-${
        product.discount
      }%)`;
    } else {
      priceElement.textContent = `$${product.price}`;
    }

    copy.querySelector(".usagetype").textContent = product.usagetype;
    copy.querySelector(".gender").textContent = product.gender;

    const soldOutButton = copy.querySelector(".sold-out");
    if (product.soldout && soldOutButton) {
      soldOutButton.classList.add("soldOut");
    } else if (soldOutButton) {
      soldOutButton.remove();
    }

    console.log(copy); // Tilføjet for at kontrollere, om det klonede produkt ser korrekt ud

    document.querySelector("main").appendChild(copy);
  });
}
