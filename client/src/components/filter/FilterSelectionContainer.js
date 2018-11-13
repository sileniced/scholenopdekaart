import * as React from "react";
import { connect } from "react-redux";
import { filters, maxSchools } from "../../constants";
import { toggleFilter, resetFilters } from "../../actions/filters";
import FilterSelectionExpansionPanel from "./FilterSelectionExpansionPanel";
import SchoolsInComparison from "./SchoolsInComparison";
import { setSchoolToCompare } from "../../actions/schools";
import { throws } from "assert";

class FilterSelectionContainer extends React.PureComponent {
  handleToggle = filter => {
    this.props.toggleFilter(filter);
  };

  handleResetFilters = () => {
    this.props.resetFilters();
  };

  removeSchool = school => {
    const schoolToProcess = this.props.schools.find((schoolFromTotal => schoolFromTotal.I === school.I))
    this.props.setSchoolToCompare(schoolToProcess);
  };

  render() {
    return (
      <div>
        <SchoolsInComparison
          maxSchools={maxSchools}
          selectedSchools={this.props.selectedSchools}
          removeSchool={this.removeSchool}
        />
        <FilterSelectionExpansionPanel
          filters={filters}
          handleToggle={this.handleToggle}
          selectedFilters={this.props.selectedFilters}
          handleResetFilters={this.handleResetFilters}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  schools: state.schools,
  selectedSchools: state.selectedSchools,
  selectedFilters: state.selectedFilters
});

export default connect(
  mapStateToProps,
  { toggleFilter, resetFilters, setSchoolToCompare }
)(FilterSelectionContainer);
