import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SearchResultContainer from './components/search-result/SearchResultContainer';
import SearchBarContainer from './components/search/SearchBarContainer'
// import AantalLeerlingen from './components/charts/AantalLeerlingen'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        {/*<AantalLeerlingen multi />*/}
        <SearchBarContainer />
        <SearchResultContainer />

      </div>
      </Router>
    );
  }
}

export default App;
