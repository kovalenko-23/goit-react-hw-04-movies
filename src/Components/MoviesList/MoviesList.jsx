import { NavLink } from 'react-router-dom';

export default function MoviesList({ movies, location, query }) {
  const showMovieList = movies && movies.results.length !== 0;
  return (
    <>
      <ul>
        {showMovieList ? (
          movies.results.map(movie => (
            <li key={movie.id}>
              <NavLink
                to={{
                  pathname: `movies/${movie.id}`,
                  state: { from: { location, query: query } },
                }}
              >
                {movie.title ?? movie.name}
              </NavLink>
            </li>
          ))
        ) : (
          <p>Nothing have found by query</p>
        )}
      </ul>
    </>
  );
}
