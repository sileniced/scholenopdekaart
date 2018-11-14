import React, { Component } from 'react'
import { connect } from 'react-redux'
import VerdelingComponent from './VerdelingComponent'

class VerdelingLestijdenContainer extends Component {
  render() {
    return <VerdelingComponent />
  }
}

const mapStateToProps = ({}) => ({})
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(VerdelingLestijdenContainer)