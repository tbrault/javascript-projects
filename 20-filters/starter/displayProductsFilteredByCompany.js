import displayProducts from "./displayProducts.js";

const filterProductsByCompany = (products, filterButtonValue) => {
  return products.filter((product) => {
    const { company } = product;
    return company === filterButtonValue;
  });
};

export default (products, filterButton) => {
  const productsFilteredByCompany = filterProductsByCompany(
    products,
    filterButton.textContent
  );
  if (filterButton.textContent === "all") {
    return displayProducts(products);
  } else {
    return displayProducts(productsFilteredByCompany);
  }
};
