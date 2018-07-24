import { dummyPosts, dummyPages, dummyInstagram } from '../../fixtures/dummyData';
const axios = require.requireActual('axios');

const response = (url) => {
  return new Promise((resolve, reject) => {
    if (url==='/api/get-all-posts') {
      const data = {
        items: [...dummyPosts]
      };
      resolve({ data });
    } else if (url==='/api/get-all-pages') {
      const data = {
        items: [...dummyPages]
      };
      resolve({ data });
    } else if (url==='/api/get-instagram-feed') {
      const data = [...dummyInstagram];
      resolve({ data });
    } else {
      reject('Wrong url path');
    }
  });
}

const obj = {
  post: response,
  get: response
};

export default obj;