import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { fetchTopMovies } from '../../Services/API';
import MoviesList from '../../Components/MoviesList/MoviesList';

export default function HomeView() {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchTopMovies().then(setMovies);
  }, []);
  return <>{movies && <MoviesList movies={movies} location={location} />}</>;
}
