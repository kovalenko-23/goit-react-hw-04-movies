import { NavLink } from 'react-router-dom';

export default function MoviesList({ movies }) {
  return (
    <>
      <ul>
        {movies.results.map(movie => (
          <li key={movie.id}>
            <NavLink to={`movies/${movie.id}`}>
              {movie.title ?? movie.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
