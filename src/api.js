
import axios from 'axios';

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID sro8BtA0Kc5RR1qNkbFfaedSczmqh0arOJ5hMj2Tjw4', // Ganti dengan Access Key Anda
  },
});

export const searchPhotos = async (query) => {
  try {
    const response = await unsplash.get('/search/photos', {
      params: { query },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching photos:', error);
    return [];
  }
};
