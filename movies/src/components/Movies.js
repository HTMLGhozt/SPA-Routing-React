import React, { Component } from 'react';

import Movie from './Movie.js';

class Movies extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getMovies();
    console.log(this.props);
  }

  render() {
    return (
      <div className="movie_list">
        <h1>Movie List</h1>
        {this.props.movies && this.props.movies.map((movie, i) => {
          return (
            <div>
              <h2 onClick={() => this.props.getMovie(movie.id)} key={movie.id} >{movie.title}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Movies;