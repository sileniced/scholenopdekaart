import React, { Component } from 'react'
import { connect } from 'react-redux'

import Profiel from './ProfielComponent'

class ProfielContainer extends Component {
  render() {
    return <Profiel />
  }
}

const mapStateToProps = ({}) => ({})
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProfielContainer)