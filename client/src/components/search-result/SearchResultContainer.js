import * as React from "react";
import { connect } from "react-redux";
import SearchResultTable from "./SearchResultTable";
import StartComparisonButton from "./StartComparisonButton";
import { toggleSearchFilter } from "../../actions/searchFilters";
import {
  getSchools,
  setSchoolToCompare,
  getSearchResults
} from "../../actions/schools";
import {
  maxSchools,
  typeOnderwijs,
  denominatie,
  conceptOnderwijs
} from "../../constants";
import SearchFilters from "./SearchFilters";
import { withStyles } from "@material-ui/core/styles";
import FormatListBulletedIcon from "mdi-react/FormatListBulletedIcon";
import TuneIcon from "mdi-react/TuneIcon";
import { Redirect } from "react-router-dom";

const styles = theme => ({
  searchResult: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper
  }
});

class SearchResultContainer extends React.PureComponent {
  state = {
    showFilters: false,
    showResults: true,
    redirect: false
  };

  compareSchool = schoolId => {
    const school = this.props.schools.find(school => school.I === schoolId);
    if (this.props.selectedSchools.length < maxSchools || school.selected)
      this.props.setSchoolToCompare(school);
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  startComparison = () => {
    if (this.state.redirect) {
      return <Redirect to="/vergelijken" />;
    }
  };

  handleToggleOnderwijstype = type => {
    const payload = { typeOnderwijs: type };
    this.props.toggleSearchFilter(payload);
  };

  handleToggleDenominatie = denominatie => {
    const payload = { denominatie };
    this.props.toggleSearchFilter(payload);
  };

  handleToggleConceptOnderwijs = concept => {
    const payload = { conceptOnderwijs: concept };
    this.props.toggleSearchFilter(payload);
  };

  filterTypeOnderwijs = setOfSchools => {
    const activeFilters = Object.keys(
      this.props.searchFilters.typeOnderwijs
    ).filter(filter => this.props.searchFilters.typeOnderwijs[filter] === true);
    const filteredSet = setOfSchools.filter(school => {
      if (activeFilters.length === 0) return true;
      if (activeFilters.includes(String(school.O[0]))) return true;
      return false;
    });
    return filteredSet;
  };

  filterDenominatie = setOfSchools => {
    const activeFilters = Object.keys(
      this.props.searchFilters.denominatie
    ).filter(filter => this.props.searchFilters.denominatie[filter] === true);
    const filteredSet = setOfSchools.filter(school => {
      if (activeFilters.length === 0) return true;
      if (activeFilters.includes(String(school.D))) return true;
      return false;
    });
    return filteredSet;
  };

  filterConceptOnderwijs = setOfSchools => {
    const activeFilters = Object.keys(
      this.props.searchFilters.conceptOnderwijs
    ).filter(
      filter => this.props.searchFilters.conceptOnderwijs[filter] === true
    );
    const filteredSet = setOfSchools.filter(school => {
      if (activeFilters.length === 0) return true;
      if (activeFilters.includes(String(school.C[0]))) return true;
      if (school.C[0] === 1) {
        if (activeFilters.includes(String(school.C[0]))) return true;
      }
      return false;
    });
    return filteredSet;
  };

  filterSchools = setOfSchools => {
    return this.filterTypeOnderwijs(
      this.filterDenominatie(this.filterConceptOnderwijs(setOfSchools))
    );
  };

  openResultList = () => {
    this.setState({ showResults: true, showFilters: false });
  };

  openSearchFilters = () => {
    this.setState({ showResults: false, showFilters: true });
  };

  render() {
    if (!this.props.schools.length && this.props.match.params.city)
      this.props.getSearchResults(this.props.match.params.city);

    const { classes } = this.props;

    return (
      <div className={classes.searchResult}>
        <StartComparisonButton
          handleClick={this.setRedirect}
          mustRedirect={this.state.redirect}
          redirect={this.startComparison}
          selectedSchools={this.props.selectedSchools}
          maxSchools={maxSchools}
        />
        <div>
          <FormatListBulletedIcon onClick={() => this.openResultList()} />{" "}
          <TuneIcon onClick={() => this.openSearchFilters()} />
        </div>
        {this.state.showResults ? (
          <SearchResultTable
            schools={this.props.schools}
            setSchoolToCompare={this.compareSchool}
            selectedSchools={this.props.selectedSchools}
            maxSchools={maxSchools}
            activeSearchFilters={this.props.searchFilters}
            filterSchools={this.filterSchools}
          />
        ) : (
          ""
        )}
        {this.state.showFilters ? (
          <SearchFilters
            typeOnderwijs={typeOnderwijs}
            denominatie={denominatie}
            conceptOnderwijs={conceptOnderwijs}
            handleToggleOnderwijstype={this.handleToggleOnderwijstype}
            handleToggleDenominatie={this.handleToggleDenominatie}
            handleToggleConceptOnderwijs={this.handleToggleConceptOnderwijs}
            activeSearchFilters={this.props.searchFilters}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  schools: state.schools,
  selectedSchools: state.selectedSchools,
  searchFilters: state.searchFilters
});

export default connect(
  mapStateToProps,
  { getSchools, setSchoolToCompare, getSearchResults, toggleSearchFilter }
)(withStyles(styles)(SearchResultContainer));
