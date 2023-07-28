export const getProducts = async (category) => {
  let resp;
  if (category) {
    resp = await fetch(
      `https://fakestoreapi.com/products/category/${category}`,
      {
        cache: "no-store",
      }
    );
  } else {
    resp = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });
  }
  return await resp.json();
};

export const getCategories = async () => {
  const resp = await fetch("https://fakestoreapi.com/products/categories", {
    cache: "no-store",
  });
  return await resp.json();
};
