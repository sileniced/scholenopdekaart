import React, { Component } from 'react'
import { connect } from 'react-redux'

import Eindtoets from './EindtoetsComponent'

class EindtoetsContainer extends Component {
  render() {
    return <Eindtoets/>
  }
}

const mapStateToProps = ({ selectedSchools }) => ({ selectedSchools })
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(EindtoetsContainer)