document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded event fired");

  const subcategoryList = document.getElementById("subcategory-list");
  const productListSection = document.getElementById("product-list");
  const selectedCategory = localStorage.getItem("selectedCategory");
  console.log("Selected Category:", selectedCategory);

  // Fetch subcategories for selected category
  fetch("https://kea-alt-del.dk/t7/api/products?category=" + selectedCategory)
    .then((res) => res.json())
    .then((data) => {
      console.log("Subcategories:", data);
      showSubcategories(data);
    });

  function showSubcategories(subcategories) {
    console.log("Showing subcategories");
    // Code to show subcategories
  }

  function fetchProducts(category, subcategory) {
    console.log("Fetching products for:", category, subcategory);
    // Code to fetch products
  }

  function showProducts(products) {
    console.log("Showing products");
    // Code to show products
  }
});
