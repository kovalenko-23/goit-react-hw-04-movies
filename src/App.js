import './App.css';
import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router';
import Header from './Components/Header/Header';

const HomeView = lazy(() =>
  import('./Views/HomeView/HomeView' /*webpackChunkName: "home-view"*/),
);
const MovieView = lazy(() =>
  import('./Views/MoviesView/MoviesView' /*webpackChunkName: "movies-view"*/),
);
const MovieDetailsView = lazy(() =>
  import(
    './Views/MovieDeatilsView/MovieDetailsView' /*webpackChunkName: "movie-details-view"*/
  ),
);

const NotFoundView = lazy(() =>
  import(
    './Views/NotFoundView/NotFoundVies' /*webpackChunkName: "not-found-view"*/
  ),
);

function App() {
  return (
    <div>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies" exact>
            <MovieView />
          </Route>

          <Route path="/movies/:movieID">
            <MovieDetailsView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
