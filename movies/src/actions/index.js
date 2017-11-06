import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';

const url = 'http://localhost:5000/movies';

export const getMovies = () => {
  // console.log('running getMovies');
  const endpoint = url;
  const movies = axios.get(endpoint);
  return {
    type: GET_MOVIES,
    payload: movies,
  }
}
export const getMovie = (id) => {
  const endpoint = url + `/${id}`;
  const movie = axios.get(endpoint);
  return {
    type: GET_MOVIE,
    payload: movie,
  }
}