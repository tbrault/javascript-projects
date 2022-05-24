export default (products) => {
  return products
    .map((product) => {
      const { title, image, price } = product;
      return `<article class="product">
          <img
            src=${image}
            alt=""
            class="product-img img"
          />
          <footer>
            <p class="product-name">${title}</p>
            <p class="product-price">${price}</p>
          </footer>
        </article>`;
    })
    .join("");
};
