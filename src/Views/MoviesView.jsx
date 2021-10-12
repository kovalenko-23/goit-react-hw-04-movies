import { useState, useEffect } from 'react';
import { fetchMoviesByQuery } from '../Services/API';
import SearchInput from '../Components/SearchInput/SearchInput';
import MoviesList from '../Components/MoviesList/MoviesList';

export default function MovieView() {
  const [searchInput, setSearchInput] = useState('');
  const [movies, setMovies] = useState(null);

  const onInputSubmit = value => {
    setSearchInput(value);
  };

  useEffect(() => {
    if (!searchInput) {
      return;
    }
    fetchMoviesByQuery(searchInput).then(setMovies);
  }, [searchInput]);

  return (
    <>
      <SearchInput onSubmit={onInputSubmit} />

      {movies && <MoviesList movies={movies} />}
    </>
  );
}
