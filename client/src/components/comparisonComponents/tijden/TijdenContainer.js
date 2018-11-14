import React, { Component } from 'react'
import { connect } from 'react-redux'

import Tijden from './TijdenComponent'

class TijdenContainer extends Component {
  render() {
    return <Tijden />
  }
}

const mapStateToProps = ({}) => ({})
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TijdenContainer)