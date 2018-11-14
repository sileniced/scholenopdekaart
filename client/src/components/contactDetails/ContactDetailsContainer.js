import * as React from "react";
import { connect } from "react-redux";
import { denominatie, typeOnderwijs, schoolColors } from "../../constants";
import ContactDetails from "./ContactDetails"


class ContactDetailsContainer extends React.PureComponent {

  render() {
    return (
      <div>
        <ContactDetails selectedSchools={this.props.selectedSchools} denominatie={denominatie} typeOnderwijs={typeOnderwijs} schoolColors={schoolColors}/>
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
