import * as React from "react";
import { connect } from "react-redux";
import { maxSchools } from "../../constants";
import FilterSelection from './FilterSelection'

class FilterSelectionContainer extends React.PureComponent {
 
    filters = {
        liggingContactgegevens: "Ligging en contactgegevens",
        profielSchool: "Profiel van de school",
        aantalLeerlingen: "Aantal leerlingen",
        verdelingLestijden: "Verdeling van de lestijden",
        ondersteuningSpecialisten: "Ondersteuning van specialisten",
        schooltijdenOpvang: "Schooltijden en opvang",
        resultatenEindtoets: "Resultaten eindtoets",
        waarderingOudersEnLeerlingen: "Waardering van de ouders en leerlingen"
    }

    // handleToggle = event => {
        
    //   };
    

  render() {
    return (
      <div>
        <FilterSelection filters={this.filters}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedSchools: state.selectedSchools
});

export default connect(
  mapStateToProps,
  {}
)(FilterSelectionContainer);
