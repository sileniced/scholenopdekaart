import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchResultContainer from "./components/search-result/SearchResultContainer";
import FilterSelectionContainer from "./components/filter/FilterSelectionContainer";
import HeaderContainer from "./components/layout/HeaderContainer";
import TopBar from "./components/layout/TopBar";
import ContactDetailsContainer from "./components/charts/ContactDetailsContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <TopBar />
          </header>
          <main>
            <HeaderContainer />
            <Route exact path="/search-result" component={SearchResultContainer} />
            <FilterSelectionContainer />
            <ContactDetailsContainer />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
