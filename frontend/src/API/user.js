import axios from 'axios';

export const fetchData = async (condition) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/user/${condition}`);
    return response;
  } catch (error) {
    throw new Error(`Failed to fetch data: \${error.message}`);
  }
};
