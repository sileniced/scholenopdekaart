import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchResultContainer from "./components/search-result/SearchResultContainer";
import FilterSelectionContainer from "./components/filter/FilterSelectionContainer";
import HeaderContainer from "./components/layout/HeaderContainer";
import TopBar from "./components/layout/TopBar";
import ContactDetailsContainer from './components/contactDetails/ContactDetailsContainer'
import Footer from './components/layout/Footer'
import AantalLeerlingenContainer from './components/charts/AantalLeerlingenContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <TopBar/>
          </header>
          <main>
            <HeaderContainer/>
            <AantalLeerlingenContainer />
            <Route exact path="/search-result" component={SearchResultContainer}/>
            <Route exact path="/search-result/:city" component={SearchResultContainer}/>
            <Route exact path="/vergelijken" component={} />
            <FilterSelectionContainer/>
            <ContactDetailsContainer />
            <Footer />
          </main>
        </div>
      </Router>
    )
  }
}

export default App
