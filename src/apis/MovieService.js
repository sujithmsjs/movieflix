// apiService.js
import axios from 'axios';

const baseURL = 'http://localhost:9000/api'; // Your API base URL

const apiService = axios.create({
  baseURL,
  // You can set common headers or interceptors here
});

export const getMovieById = (movieId) => apiService.get(`/movies/${movieId}`);
export const updateMovieById = (movieId, movie) => apiService.put(`/movies/${movieId}`, movie);
export const deleteMovieById = (movieId) => apiService.delete(`/movies/${movieId}`);
export const saveMovie = (movie) => apiService.post(`/movies`, movie);
export const getAllMovies = () => apiService.get('/movies');
// Add more API functions here

