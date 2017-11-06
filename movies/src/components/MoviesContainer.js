import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovies, getMovie, } from '../actions';
import Movies from './Movies.js';

const mapStateToProps = (state) => {
  return {
    movies: state,
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getMovies, getMovie
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);