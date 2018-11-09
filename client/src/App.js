import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchResultContainer from "./components/search-result/SearchResultContainer";
import SearchBarContainer from "./components/search/SearchBarContainer";
import FilterSelectionContainer from "./components/filter/FilterSelectionContainer";
import Tijden from './components/charts/Tijden'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Tijden />
          <SearchBarContainer />
          <SearchResultContainer />
          <FilterSelectionContainer />
        </div>
      </Router>
    );
  }
}

export default App;
