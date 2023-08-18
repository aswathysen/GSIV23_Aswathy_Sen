import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api'; // Implement your API fetching function
import { Movie } from '../types';

const DetailsPage: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>(); // Explicitly specify the type

  const [movieDetails, setMovieDetails] = useState<Movie | null>(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(data => setMovieDetails(data));
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-page">
      <h2>{movieDetails.title}</h2>
      <p>Rating: {movieDetails.vote_average}</p>
      <p>Year of Release: {movieDetails.release_date}</p>
      <p>Length: {movieDetails.runtime} minutes</p>

    </div>
  );
};

export default DetailsPage;
