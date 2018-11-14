import React, { Component } from 'react'
import { connect } from 'react-redux'
import { allSpecialisten } from '../../constants'
import SpecialistenComponent from './SpecialistenComponent'

class Specialisten extends Component {


  render() {

    const available = this.props.selectedSchools.filter(school => school.specialist.length)
    const unavailable = this.props.selectedSchools.filter(school => !school.specialist.length)

    const schools = available.map(school => ({ specialisten: school.specialisten, name: school.school.N }) )
    const specialisten = Object.keys(allSpecialisten())
    
    return <SpecialistenComponent specialisten={specialisten} schools={schools} />
  }
}

const mapStateToProps = ({ selectedSchools }) => ({ selectedSchools })

export default connect(mapStateToProps)(Specialisten)