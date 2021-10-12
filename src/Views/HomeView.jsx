import { useState, useEffect } from 'react';
import { fetchTopMovies } from '../Services/API';
import MoviesList from '../Components/MoviesList/MoviesList';

export default function HomeView() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchTopMovies().then(setMovies);
  }, []);

  return <>{movies && <MoviesList movies={movies} />}</>;
}
