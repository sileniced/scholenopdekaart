import React, { Component } from 'react'
import { connect } from 'react-redux'

import { checkPoindAvailability } from '../../utilities'

import AantalLeerlingenChart from './AantalLeerlingenChart'
import AantalLeerlingenTable from './tables/AantalLeerlingenTable'

class aantalLeerlingenContainer extends Component {

  constructor(props) {
    super(props)
    this.props = props
    this.shownYears = props.multi ? ['2015-2016', '2016-2017', '2017-2018'] : ['2017-2018']
  }

  render() {

    const { available, unavailable } = checkPoindAvailability(this.props.selectedSchools, 'leerlingen')
    const schools = available.map(school => school.leerlingen.rapport.versie1.datasetAantalLeerlingenTrend.rij)

    return (
      <div>
        <AantalLeerlingenTable schools={schools}/>
        <AantalLeerlingenChart schools={schools}/>
      </div>
    )
  }
}

const mapStateToProps = ({ selectedSchools }) => ({ selectedSchools })

export default connect(mapStateToProps)(aantalLeerlingenContainer)