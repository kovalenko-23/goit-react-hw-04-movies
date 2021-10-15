import { NavLink } from 'react-router-dom';

export default function MoviesList({ movies, location }) {
  return (
    <>
      <ul>
        {movies.results.map(movie => (
          <li key={movie.id}>
            <NavLink
              to={{
                pathname: `movies/${movie.id}`,
                state: { from: location },
              }}
            >
              {movie.title ?? movie.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
