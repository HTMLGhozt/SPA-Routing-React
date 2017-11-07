import React, { Component } from 'react';

class Movie extends Component{
  componentDidMount() {
    let id = this.props.location.pathname;
    id = id[id.length-1];
    this.props.getMovie(id);
  }
  render() {
    let movie = this.props.movies;
    return (
      <div>
        <h1>{movie.title}</h1>
        <p>{movie.director}</p>
        <p>{movie.metascore}</p>
        {movie.stars && movie.stars.map((star, i) => <p key={i}>{star}</p>)}
      </div>
    );
  }
}
export default Movie;