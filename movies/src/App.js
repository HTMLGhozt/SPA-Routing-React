import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import MovieList from './components/MoviesContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/movies' component={MovieList} />
        <Route path={`/movies/:id`} component={MovieList} />
      </div>
    );
  }
}

export default App;
