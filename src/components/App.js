import React from "react";

import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const {store} = this.props;
    store.subscribe(() => {
      this.forceUpdate();
    })
    store.dispatch(addMovies(data));
  }

  render() {
    const movies = this.props.store.getState();

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {movies.map(movie => (
              <MovieCard movie={movie} key={movie.imdbID} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
