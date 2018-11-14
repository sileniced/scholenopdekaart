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
import { maxSchools, typeOnderwijs, denominatie } from "../../constants";
import SearchFilters from "./SearchFilters";

class SearchResultContainer extends React.PureComponent {
  compareSchool = schoolId => {
    const school = this.props.schools.find(school => school.I === schoolId);
    if (this.props.selectedSchools.length < maxSchools || school.selected)
      this.props.setSchoolToCompare(school);
  };

  startComparison = () => {
    console.log("Let's start the comparison");
  };

  handleToggleOnderwijstype = type => {
    const payload = { typeOnderwijs: type };
    this.props.toggleSearchFilter(payload);
  };

  handleToggleDenominatie = type => {
    const payload = { denominatie: type };
    this.props.toggleSearchFilter(payload);
  };

  filterTypeOnderwijs = () => {};

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

  render() {
    if (!this.props.schools.length && this.props.match.params.city)
      this.props.getSearchResults(this.props.match.params.city);

    return (
      <div>
        <StartComparisonButton
          handleClick={this.startComparison}
          selectedSchools={this.props.selectedSchools}
          maxSchools={maxSchools}
        />
        <SearchResultTable
          schools={this.props.schools}
          setSchoolToCompare={this.compareSchool}
          selectedSchools={this.props.selectedSchools}
          maxSchools={maxSchools}
          activeSearchFilters={this.props.searchFilters}
          filterDenominatie={this.filterDenominatie}
        />
        <SearchFilters
          typeOnderwijs={typeOnderwijs}
          denominatie={denominatie}
          handleToggleOnderwijstype={this.handleToggleOnderwijstype}
          handleToggleDenominatie={this.handleToggleDenominatie}
          activeSearchFilters={this.props.searchFilters}
        />
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
)(SearchResultContainer);
