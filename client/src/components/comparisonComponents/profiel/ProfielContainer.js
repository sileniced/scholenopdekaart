import React, { Component } from 'react'
import { connect } from 'react-redux'

import Profiel from './ProfielComponent'
import { checkPoindAvailability } from '../../../utilities'


const getProfiel = schools => {
  const { available, unavailable } = checkPoindAvailability(schools, 'profiel')
  return available.map(school => school.profiel.rapport.versie1.datasetProfielVanDeSchool.rij)
}

const getSociale = schools => {
  const { available, unavailable } = checkPoindAvailability(schools, 'sociale')
  return available.map(school => school.sociale.rapport.versie1)
}




class ProfielContainer extends Component {
  render() {
    return <Profiel 
      profiel={getProfiel(this.props.selectedSchools)}
      sociale={getSociale(this.props.selectedSchools)}
    />
  }
}

const mapStateToProps = ({ selectedSchools }) => ({ selectedSchools })
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProfielContainer)