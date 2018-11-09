import * as React from "react";
import { connect } from "react-redux";
import { maxSchools } from "../../constants";
import FilterSelection from "./FilterSelection";
import { filters } from "../../constants";
import { toggleFilter } from "../../actions/filters";
import FilterSelectionButtons from './FilterSelectionButtons';

class FilterSelectionContainer extends React.PureComponent {
  handleToggle = filter => {
    this.props.toggleFilter(filter)
  };
    
  render() {
    return (
      <div>
        <FilterSelection filters={filters} handleToggle={this.handleToggle} />
        <FilterSelectionButtons />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedSchools: state.selectedSchools
});

export default connect(
  mapStateToProps,
  {toggleFilter}
)(FilterSelectionContainer);
