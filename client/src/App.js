import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import SearchResultContainer from './components/search-result/SearchResultContainer';
// import SearchBarContainer from './components/search/SearchBarContainer';
// import FilterSelectionContainer from './components/filter/FilterSelectionContainer';
// import HeaderContiner from './components/layout/HeaderContainer'
import TopBar from './components/layout/TopBar'
import Eindtoets from './components/charts/Eindtoets'
// import AantalLeerlingen from './components/charts/AantalLeerlingen'
// import Tijden from './components/charts/Tijden'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopBar/>
          {/*<AantalLeerlingen multi />*/}
          {/*<Tijden/>*/}
          <Eindtoets/>
          {/*<HeaderContiner/>*/}
          {/*<SearchResultContainer/>*/}
          {/*<FilterSelectionContainer/>*/}
        </div>
      </Router>
    );
  }
}

export default App;
