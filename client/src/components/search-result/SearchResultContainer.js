import * as React from "react";
import { connect } from "react-redux";
import SearchResultTable from "./SearchResultTable";
import StartComparisonButton from "./StartComparisonButton";
import { getSchools, setSchoolToCompare } from "../../actions/schools";
import { maxSchools } from "../../constants";

class SearchResultContainer extends React.PureComponent {
  componentDidMount() {
    this.props.getSchools();
  }
  compareSchool = schoolId => {
    const school = this.props.schools.find(school => school.I === schoolId);
    if(this.props.selectedSchools.length < maxSchools || (school.selected)) this.props.setSchoolToCompare(school);
  };

  startComparison = () => {
    console.log("Let's start the comparison");
  };

  render() {
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
          // selectedSchools={this.props.selectedSchools}
          // maxSchools={maxSchools}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  schools: state.schools,
  selectedSchools: state.selectedSchools
});

export default connect(
  mapStateToProps,
  { getSchools, setSchoolToCompare }
)(SearchResultContainer);
