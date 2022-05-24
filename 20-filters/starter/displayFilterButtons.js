export default (products) => {
  const uniqueCompaniesSet = new Set();

  products.map((product) => {
    const { company } = product;
    uniqueCompaniesSet.add(company);
  });

  const uniqueCompanies = ["all", ...uniqueCompaniesSet];

  return uniqueCompanies
    .map((company) => {
      return `<button type="button" class="company-btn">${company}</button>`;
    })
    .join("");
};
