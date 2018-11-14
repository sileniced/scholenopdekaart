import React, { Component } from 'react'
import { connect } from 'react-redux'

import Leerlingen from './LeerlingenComponent'

class LeerlingenContainer extends Component {
  render() {
    return <Leerlingen />
  }
}

const mapStateToProps = ({}) => ({})
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(LeerlingenContainer)