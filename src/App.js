import './App.css';
import Header from './Components/Header/Header';
import HomeView from './Views/HomeView';
import { Switch, Route } from 'react-router';
import MovieView from './Views/MoviesView';
import MovieDetailsView from './Views/MovieDetailsView';

function App() {
  return (
    <div>
      <Header />
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
      </Switch>
    </div>
  );
}

export default App;
