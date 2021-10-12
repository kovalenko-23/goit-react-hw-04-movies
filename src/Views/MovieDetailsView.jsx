import { useState, useEffect } from 'react';
import { fetchMovieById } from '../Services/API';
import { Route } from 'react-router';
import CastView from './CastView';
import ReviewView from './ReviewsView';
import { useParams, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

export default function MovieDetailsView() {
  const { movieID } = useParams();
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  console.log(url);

  useEffect(() => {
    fetchMovieById(movieID).then(setMovie);
  }, [movieID]);

  return (
    <>
      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            width={200}
            height={250}
            alt={movie.original_title}
            loading="lazy"
          />

          <p>{movie.title ?? movie.name}</p>
          <p>Overview</p>
          <p>{movie.overview}</p>
        </div>
      )}
      <div className="additioanl_information">
        <h2>Additional information</h2>
        <Link exact to={`${url}/cast`}>
          CAST
        </Link>

        <Link exac to={`${url}/review`}>
          REVIEW
        </Link>
      </div>

      <Route path={`${path}/cast`}>
        <CastView />
      </Route>

      <Route path={`${path}/review`}>
        <ReviewView />
      </Route>
    </>
  );
}
