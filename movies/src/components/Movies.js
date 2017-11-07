import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Movies extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    return (
      <div className="movie_list">
        <h1>Movie List</h1>
        {this.props.movies.map((movie, i) => {
          return (
            <Link to={`/movies/${movie.id}`} >{movie.title}</Link>
          );
        })}
      </div>
    );
  }
}

export default Movies;