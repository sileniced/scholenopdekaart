import * as React from "react";
import { connect } from "react-redux";
import { filters, maxSchools } from "../../constants";
import { toggleFilter, resetFilters } from "../../actions/filters";
import FilterSelectionExpansionPanel from "./FilterSelectionExpansionPanel";
import SchoolsInComparison from './SchoolsInComparison'

class FilterSelectionContainer extends React.PureComponent {
  handleToggle = filter => {
    this.props.toggleFilter(filter);
  };

  handleResetFilters = () => {
    this.props.resetFilters();
  };

  render() {
    return (
      <div>
        <SchoolsInComparison maxSchools={maxSchools} selectedSchools={this.props.selectedSchools} />
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
  selectedSchools: state.selectedSchools,
  selectedFilters: state.selectedFilters
});

export default connect(
  mapStateToProps,
  { toggleFilter, resetFilters }
)(FilterSelectionContainer);
