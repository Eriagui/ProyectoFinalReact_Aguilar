import axios from "axios";

export async function getAllProducts() {
  /*return await axios.get("https://dummyjson.com/products");*/
  return await axios.get("https://fakestoreapi.in/api/products?limit=150");
}

export async function getProductById(id) {
  return await axios.get(`https://dummyjson.com/product/${id}`);
}

export async function getProductsByCategory(id) {
  return await axios.get(`https://dummyjson.com/products/category/${id}`);
}
