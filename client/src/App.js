import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SearchResultContainer from './components/search-result/SearchResultContainer';
import SearchBarContainer from './components/search/SearchBarContainer'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        <SearchBarContainer />
        <SearchResultContainer />

      </div>
      </Router>
    );
  }
}

export default App;
