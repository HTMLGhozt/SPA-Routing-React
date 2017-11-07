import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import { MovieList, MovieInfo } from './components/MoviesContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/movies' component={MovieList} exact />
        <Route path={'/movies/:id'} component={MovieInfo} />
      </div>
    );
  }
}

export default App;
