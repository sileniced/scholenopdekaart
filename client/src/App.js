import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchResultContainer from "./components/search-result/SearchResultContainer";
import FilterSelectionContainer from "./components/filter/FilterSelectionContainer";
import HeaderContainer from "./components/layout/HeaderContainer";
import TopBar from "./components/layout/TopBar";
import ContactDetailsContainer from './components/contactDetails/ContactDetailsContainer'
import AantalLeerlingenContainer from './components/charts/AantalLeerlingenChartContainer'
import { withStyles } from "@material-ui/core/styles";
import Footer from "./components/layout/Footer";
import ComparisonContainer from "./components/comparisonComponents/ComparisonContainer"

const styles = theme => ({
 app: {
   display:"flex",
   flexDirection: "column",
   alignItems:"center"
 }
});




class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Router>
        <div className={classes.app}>
          <header>
            <TopBar/>
          </header>
          <main>
            <HeaderContainer/>
            <AantalLeerlingenContainer />
            <Route exact path="/search-result" component={SearchResultContainer}/>
            <Route exact path="/search-result/:city" component={SearchResultContainer}/>
            <Route exact path="/vergelijken" component={ComparisonContainer} />
            <FilterSelectionContainer/>
            <ContactDetailsContainer />
            <Footer />
          </main>
        </div>
      </Router>
    )
  }
}

export default withStyles(styles)(App);
