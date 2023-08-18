import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const fetchUpcomingMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchMovieDetails = async (movieId: string) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  return response.data;
};
