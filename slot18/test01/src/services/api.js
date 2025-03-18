import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const login = async (username, password) => {
  try {
    const response = await axios.get(`${API_URL}/UserAccounts`);
    const user = response.data.find(
      (user) => user.username === username && user.password === password && user.status === 'active'
    );
    return user;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/Products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/Products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    throw error;
  }
};

export const addProduct = async (product) => {
  try {
    const response = await axios.post(`${API_URL}/Products`, product);
    return response.data;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};