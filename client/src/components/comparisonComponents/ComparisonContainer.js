import React, { Component } from 'react'
import { connect } from 'react-redux'

class ComparisonContainer extends Component {
  render() {
    const {selectedFilters: sf } = this.props
    return (
      <div>
        {sf.naw && <NawContainer /> }
        {sf.profiel && <ProfielContainer />}
        {sf.leerlingen && <LeerlingenContainer />}
        {sf.verdelingLestijden && <VerdelingLestijdenContainer />}
        {sf.specialisten && <SpecialistenContainer />}
        {sf.tijden && <TijdenContainer />}
        {sf.eindtoets && <EindtoetsContainer />}
        {sf.tevredenheid && <TevredenheidContainer />}
      </div>
    )
  }
}

const maps2p = ({ selectedSchools, selectedFilters }) => ({ selectedSchools, selectedFilters })

export default connect(maps2p)(ComparisonContainer)