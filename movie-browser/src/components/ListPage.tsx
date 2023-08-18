import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { fetchUpcomingMovies } from '../api'; 
import { Movie } from '../types';

const ListPage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchUpcomingMovies().then(data => setMovies(data.results));
  }, []);

  return (
    <div className="list-page">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default ListPage;
