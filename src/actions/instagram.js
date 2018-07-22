import { INSTAGRAM } from './types';
import axios from 'axios';
// ACTION GENERATOR

// SET_IMAGES
export const setImages = (instagramData = []) => ({
  type: INSTAGRAM.SET_IMAGES,
  instagramData
});