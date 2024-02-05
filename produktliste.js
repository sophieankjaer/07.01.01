fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  products.forEach(showProducts);
}

function showProduct(product) {
  console.log(product);
  const template = document.querySelector("#smallProductTemplate").content;
  const copy = template.cloneNode(true);

  copy.querySelector("h2").textContent = product.productdisplayname;
  if (product.soldout) {
    copy.querySelector("article").classlist.add("soldOut");
  }

  document.querySelector("main").appendChild(copy);
}
