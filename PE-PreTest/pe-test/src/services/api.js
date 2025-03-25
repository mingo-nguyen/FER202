import axios from 'axios';

const API_URL = 'http://localhost:5000';

// Authentication API
export const authenticateUser = async (username, password) => {
  try {
    const response = await axios.get(`${API_URL}/UserAccounts?username=${username}`);
    const users = response.data;
    
    if (users.length > 0 && users[0].password === password && users[0].status === 'active') {
      return { success: true, user: users[0] };
    } else {
      return { success: false, message: 'Invalid username or password!' };
    }
  } catch (error) {
    console.error('Authentication error:', error);
    return { success: false, message: 'Server error. Please try again.' };
  }
};

// Products API
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/Products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/Products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    throw error;
  }
};