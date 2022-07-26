const BASE_URL = 'https://fakestoreapi.com/';

// eslint-disable-next-line import/prefer-default-export
export async function getProducts() {
  const response = await fetch(`${BASE_URL}products`);
  const json = await response.json();
  return json;
}
