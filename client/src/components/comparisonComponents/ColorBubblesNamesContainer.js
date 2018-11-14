import React, { Component } from 'react'
import { connect } from 'react-redux'

import ColorBubblesNames from './ColorBubblesNamesComponent'

class ColorBubblesNamesContainer extends Component {
  render() {
    return <ColorBubblesNames schools={this.props.selectedSchools}/>
  }
}

const mapStateToProps = ({selectedSchools}) => ({selectedSchools})
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ColorBubblesNamesContainer)