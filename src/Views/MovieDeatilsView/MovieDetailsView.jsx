import { useState, useEffect, lazy, Suspense } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Route } from 'react-router';
import {
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router';
import { NavLink } from 'react-router-dom';
import style from './MovieDetailsView.module.css';
import { fetchMovieById } from '../../Services/API';
import image from '../../images/no-image.png';

const CastView = lazy(() =>
  import('../CastView/CastView' /*webpackChunkName: "cast-view"*/),
);
const ReviewView = lazy(() =>
  import('../ReviewsView/ReviewsView' /*webpackChunkName: "review-view"*/),
);

export default function MovieDetailsView() {
  const { movieID } = useParams();
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieById(movieID)
      .then(setMovie)
      .catch(error => {
        toast.error(error.message);
      });
  }, [movieID]);

  const onGoBack = () => {
    history.replace(location.state?.from ? location.state.from : '/');
  };

  return (
    <>
      <Toaster />
      {movie && (
        <div className={style.box}>
          <button className={style.button} type="button" onClick={onGoBack}>
            Go back
          </button>
          <div className={style.thumb}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              onError={e => {
                e.target.onerror = null;
                e.target.src = image;
              }}
              width={200}
              height={250}
              alt={movie.original_title}
              loading="lazy"
            />

            <div className={style.about}>
              <div className={style.about__name}>
                <p className={style.name}>Name:</p> {movie.title ?? movie.name}
              </div>
              <div className={style.about__release_date}>
                <p className={style.release_date}>Release date:</p>{' '}
                {movie.release_date}
              </div>
              <div className={style.about__overview}>
                <p className={style.overview}>Overview: </p>
                {movie.overview}
              </div>
            </div>
          </div>
        </div>
      )}
      {movie && (
        <div className={style.additioanl_information}>
          <p className={style.additional}>Additional information</p>
          <div className={style.links}>
            <NavLink
              className={style.link}
              activeClassName={style.active__link}
              to={{
                ...location,
                pathname: `${url}/cast`,
              }}
            >
              CAST
            </NavLink>

            <NavLink
              className={style.link}
              activeClassName={style.active__link}
              to={{ ...location, pathname: `${url}/review` }}
            >
              REVIEW
            </NavLink>
          </div>
        </div>
      )}

      <Suspense fallback={<p>Loading...</p>}>
        <Route path={`${path}/cast`}>
          <CastView />
        </Route>

        <Route path={`${path}/review`}>
          <ReviewView />
        </Route>
      </Suspense>
    </>
  );
}
