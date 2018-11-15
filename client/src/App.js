import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchResultContainer from "./components/search-result/SearchResultContainer";
import FilterSelectionContainer from "./components/filter/FilterSelectionContainer";
import HeaderContainer from "./components/layout/HeaderContainer";
import TopBar from "./components/layout/TopBar";
import { withStyles } from "@material-ui/core/styles";
import Footer from "./components/layout/Footer";
<<<<<<< HEAD
import ComparisonContainer from "./components/comparisonComponents/ComparisonContainer"
import LeerlingenContainer from "./components/comparisonComponents/leerlingen/LeerlingenContainer";
=======
import ComparisonContainer from "./components/comparisonComponents/ComparisonContainer";
>>>>>>> cbf7f5b4683e3e88a9f6396ca170711023faaa9b

const styles = theme => ({

  mainClass: {
    backgroundColor: "white"
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Router>
        <div className={classes.app}>
          <header>
            <TopBar />
          </header>
<<<<<<< HEAD
          <main>
            <HeaderContainer/>
            <LeerlingenContainer />
            <Route exact path="/search-result" component={SearchResultContainer}/>
            <Route exact path="/search-result/:city" component={SearchResultContainer}/>
=======
          <main className={classes.mainClass}>
            <HeaderContainer />
            <Route
              exact
              path="/search-result"
              component={SearchResultContainer}
            />
            <Route
              exact
              path="/search-result/:city"
              component={SearchResultContainer}
            />

            <FilterSelectionContainer />
>>>>>>> cbf7f5b4683e3e88a9f6396ca170711023faaa9b
            <Route exact path="/vergelijken" component={ComparisonContainer} />
            <Footer />
          </main>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
