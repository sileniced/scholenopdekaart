import React, { Component } from 'react'
import { connect } from 'react-redux'

import TevredenheidContainer from './TevredenheidComponent'

class TevredenheidContainerContainer extends Component {
  render() {
    return <TevredenheidContainer />
  }
}

const mapStateToProps = ({}) => ({})
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TevredenheidContainerContainer)