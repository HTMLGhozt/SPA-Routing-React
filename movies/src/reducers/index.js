import { GET_MOVIES, GET_MOVIE, } from '../actions';
const fakeNews = [{ title:'donald' }, { title:'trump' }];

export default (movies = fakeNews, action) => {
  // console.log('running reducers', movies, action);
  switch (action.type) {
    case GET_MOVIES:
      console.log('>>>>>>>>>', action.payload.data);
      return action.payload.data;
    case GET_MOVIE:
      return action.payload.data;
    default:
      return movies;
  }
}