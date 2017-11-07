import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovies, getMovie, } from '../actions';
import Movies from './Movies.js';
import Movie from './Movie.js';

const mapStateToProps = (state) => {
  return {
    movies: state,
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getMovies,
    getMovie,
  }, dispatch);
}
let MovieList = connect(mapStateToProps, mapDispatchToProps)(Movies);
const MovieInfo = connect(mapStateToProps, mapDispatchToProps)(Movie);
export { MovieList, MovieInfo, };