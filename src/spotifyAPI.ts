// src/spotifyAPI.ts
import axios from 'axios';

const BASE_URL = 'https://api.spotify.com/v1';

export const getNewReleases = async () => {
  const response = await axios.get(`${BASE_URL}/browse/new-releases`);
  return response.data;
};

export const getFeaturedPlaylists = async () => {
  const response = await axios.get(`${BASE_URL}/browse/featured-playlists`);
  return response.data;
};

export const getGenres = async () => {
  const response = await axios.get(`${BASE_URL}/browse/categories`);
  return response.data;
};