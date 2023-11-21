import axios from 'axios';

export const getUsersById = async credentials => {
  // console.log('credentials', credentials);

  try {
    const res = await axios.get(`users/user/${credentials}`);
    return res.data;
  } catch (error) {
    return {
      status: error.response.status,
      message: error.response.data.message,
    };
  }
};
