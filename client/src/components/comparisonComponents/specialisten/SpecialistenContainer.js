import React, { Component } from 'react'
import { connect } from 'react-redux'

import Specialisten from './SpecialistenComponent'

class SpecialistenContainer extends Component {
  render() {
    return <Specialisten />
  }
}

const mapStateToProps = ({}) => ({})
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SpecialistenContainer)