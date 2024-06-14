import axios from "axios";

// Simulated API URL
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// Fetch products
export const fetchProducts = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};

// Update product
export const updateProduct = async (product) => {
  const { data } = await axios.put(`${BASE_URL}/${product.id}`, product);
  return data;
};

// Add product
export const addProduct = async (product) => {
  const { data } = await axios.post(BASE_URL, product);
  return data;
};
