import React, { Component } from 'react'
import { connect } from 'react-redux'

import Naw from './NawComponent'

class NawContainer extends Component {
  render() {
    return <Naw />
  }
}

const mapStateToProps = ({}) => ({})
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(NawContainer)