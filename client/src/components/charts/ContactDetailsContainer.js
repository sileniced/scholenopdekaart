import * as React from "react";
import { connect } from "react-redux";
import { filters } from "../../constants";


class ContactDetailsContainer extends React.PureComponent {


  render() {
    return (
      <div>
        <ContactDetails />
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
  mapStateToProps
)(ContactDetailsContainer);
