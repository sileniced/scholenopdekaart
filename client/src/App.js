import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SearchResultContainer from './components/search-result/SearchResultContainer';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        {/* <Route exact path="/..." /> */}
        <SearchResultContainer />
      </div>
      </Router>
    );
  }
}

export default App;
