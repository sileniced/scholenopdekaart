import * as React from "react";
import { connect } from "react-redux";
import SearchResultTable from "./SearchResultTable";
import { getSchools, setSchoolToCompare } from "../../actions/schools";

class SearchResultContainer extends React.PureComponent {
  componentDidMount() {
    this.props.getSchools();
  }
  compareSchool = (schoolId) => {
    const school = this.props.schools.find(school => school.I === schoolId)
    // console.log(school)
    this.props.setSchoolToCompare(school);
  }

  render() {
    return (
      <SearchResultTable
        schools={this.props.schools}
        setSchoolToCompare={this.compareSchool}
      />
    );
  }
}

const mapStateToProps = state => ({
  schools: state.schools
});

export default connect(
  mapStateToProps,
  { getSchools, setSchoolToCompare }
)(SearchResultContainer);
