import { products } from "./products.js";
import displayProducts from "./displayProducts.js";
import displayFilterButtons from "./displayFilterButtons.js";
import displayProductsFilteredByCompany from "./displayProductsFilteredByCompany.js";
import get from "./getElement.js";

//*****Display Products and Filter Buttons *****/
const productContainer = get(".products-container");
const companies = get(".companies");

productContainer.innerHTML = displayProducts(products);
companies.innerHTML = displayFilterButtons(products);

//***** Filter Buttons *****/
const filterButtons = document.querySelectorAll(".company-btn");

filterButtons.forEach((filterButton) => {
  filterButton.addEventListener("click", (event) => {
    productContainer.innerHTML = displayProductsFilteredByCompany(
      products,
      event.target
    );
  });
});

//*****Input-search filter *****/
const inputSearchFilter = get(".search-input");
const inputForm = get(".input-form");

inputForm.addEventListener("keyup", () => {
  const inputValue = inputSearchFilter.value;
  const productsFilteredBySearchInput = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  if (productsFilteredBySearchInput.length > 0) {
    productContainer.innerHTML = displayProducts(productsFilteredBySearchInput);
  } else {
    productContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
  }
});
