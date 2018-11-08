import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SearchResultContainer from './components/search-result/SearchResultContainer';
import SearchBarContainer from './components/search/SearchBarContainer'
// import AantalLeerlingenContainer from './components/charts/AantalLeerlingen'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        {/*<AantalLeerlingenContainer multi />*/}
        <SearchBarContainer />
        <SearchResultContainer />

      </div>
      </Router>
    );
  }
}

export default App;
