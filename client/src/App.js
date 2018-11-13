import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SearchResultContainer from './components/search-result/SearchResultContainer'
import SearchBarContainer from './components/search/SearchBarContainer'
import FilterSelectionContainer from './components/filter/FilterSelectionContainer'
import HeaderContainer from './components/layout/HeaderContainer'
import TopBar from './components/layout/TopBar'

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
            <SearchResultContainer/>
            <FilterSelectionContainer/>
          </main>
        </div>
      </Router>
    )
  }
}

export default App
