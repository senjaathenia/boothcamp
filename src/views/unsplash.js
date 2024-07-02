import React, { useEffect } from 'react';
import axios from 'axios';

const fetchData = async () => {
  const response = await axios.get('https://api.unsplash.com/photos', {
    headers: {
      Authorization: 'Client-ID 2b98c1afb0aed3b3d94a1866bdc3ac013d21a0c86d236a0fee32355c331c0296',
    },
  });
  console.log('Response from Unsplash API:', response.data);
  return response.data;
};

const Unsplash = () => {
  useEffect(() => {
    fetchData();
  }, []);

};

export default Unsplash;
