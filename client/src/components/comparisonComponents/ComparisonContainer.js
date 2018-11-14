import React, { Component } from "react";
import { connect } from "react-redux";
import NawContainer from "./naw/NawContainer";
import ProfielContainer from "./profiel/ProfielContainer";
import LeerlingenContainer from "./leerlingen/LeerlingenContainer";
import VerdelingLestijdenContainer from "./verdelingLestijden/VerdelingLestijdenContainer";
import SpecialistenContainer from "./specialisten/SpecialistenContainer";
import TijdenContainer from "./tijden/TijdenContainer";
import EindtoetsContainer from "./eindtoets/EindtoetsContainer";
import TevredenheidContainer from "./tevredenheid/TevredenheidContainer";

class ComparisonContainer extends Component {
  render() {
    const { selectedFilters: sf } = this.props;
    return (
      <div>
        {sf.naw && <NawContainer />}
        {sf.profiel && <ProfielContainer />}
        {sf.leerlingen && <LeerlingenContainer />}
        {sf.verdelingLestijden && <VerdelingLestijdenContainer />}
        {sf.specialisten && <SpecialistenContainer />}
        {sf.tijden && <TijdenContainer />}
        {sf.eindtoets && <EindtoetsContainer />}
        {sf.tevredenheid && <TevredenheidContainer />}
      </div>
    );
  }
}

const maps2p = ({ selectedSchools, selectedFilters }) => ({
  selectedSchools,
  selectedFilters
});

export default connect(maps2p)(ComparisonContainer);
