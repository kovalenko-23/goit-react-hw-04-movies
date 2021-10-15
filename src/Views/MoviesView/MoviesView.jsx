import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router';
import { fetchMoviesByQuery } from '../../Services/API';
import SearchInput from '../../Components/SearchInput/SearchInput';
import MoviesList from '../../Components/MoviesList/MoviesList';

export default function MovieView() {
  const [searchInput, setSearchInput] = useState('');
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const history = useHistory();
  const locationQuerySearch = new URLSearchParams(location.search).get('query');

  const onInputSubmit = value => {
    setSearchInput(value);
    history.push({
      ...location,
      search: `query=${value}`,
    });
  };

  useEffect(() => {
    if (!searchInput) {
      return;
    }
    fetchMoviesByQuery(searchInput).then(setMovies);
  }, [searchInput]);

  useEffect(() => {
    if (!locationQuerySearch) {
      return;
    }

    fetchMoviesByQuery(locationQuerySearch).then(setMovies);
  }, [locationQuerySearch]);

  return (
    <>
      <SearchInput onSubmit={onInputSubmit} />

      {movies && (
        <MoviesList
          movies={movies}
          location={location}
          query={locationQuerySearch}
        />
      )}
    </>
  );
}
