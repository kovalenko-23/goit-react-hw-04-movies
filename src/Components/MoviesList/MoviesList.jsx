import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MoviesList({ movies, location }) {
  return (
    <>
      <ul>
        {movies.results.map(movie => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `movies/${movie.id}`,
                state: { from: location },
              }}
            >
              {movie.title ?? movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};
