import { INSTAGRAM } from './types';
import axios from 'axios';
// ACTION GENERATOR

// SET_IMAGES
export const setImages = (instagramData = []) => ({
  type: INSTAGRAM.SET_IMAGES,
  instagramData
});

export const setImagesAsync = () => {
  return (dispatch, getState) => {
    return axios.post('/api/get-instagram-feed')
    .then(response => {
      const instagramData = [];
      response.data.forEach(image => {
        instagramData.push({...image});
      });
      dispatch(setImages(instagramData));
    })
    .catch(err => {
      console.log(err);
    })
  }
};