import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import { fetchMoviesByQuery } from '../../Services/API';
import SearchInput from '../../Components/SearchInput/SearchInput';
import MoviesList from '../../Components/MoviesList/MoviesList';

export default function MovieView() {
  const [searchInput, setSearchInput] = useState('');
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const history = useHistory();

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
    fetchMoviesByQuery(searchInput).then(movies => {
      if (movies.results.length === 0) {
        toast.error('Nothing found');
        return;
      }
      setMovies(movies);
    });
  }, [searchInput]);

  return (
    <>
      <Toaster />
      <SearchInput onSubmit={onInputSubmit} />

      {movies && (
        <MoviesList
          movies={movies}
          location={location}
          // query={locationQuerySearch}
        />
      )}
    </>
  );
}
