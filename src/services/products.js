const BASE_URL = 'https://fakestoreapi.com/';

// eslint-disable-next-line import/prefer-default-export
export async function getProducts() {
  try {
    const response = await fetch(`${BASE_URL}products`);
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getProduct(id) {
  try {
    const response = await fetch(`${BASE_URL}products/${id}`);
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error(error);
  }
}
