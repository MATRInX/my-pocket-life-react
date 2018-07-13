import { dummyPosts } from '../../fixtures/dummyData';
const axios = require.requireActual('axios');

const obj = {
  post: (url) => {
    return new Promise((resolve, reject) => {
      if (url==='/api/get-all-posts') {
        const data = {
          items: [...dummyPosts]
        };
        resolve({ data });
      } else if (url==='/api/get-all-pages') {
        const data = {
          items: ['No pages']
        };
        resolve({ data });
      } else {
        reject('Wrong url path');
      }
    });
  }
};

export default obj;