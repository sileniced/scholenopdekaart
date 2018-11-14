import React, { Component } from 'react'
import { connect } from 'react-redux'

import Title from './TitleComponent'

class TitleContainer extends Component {
  render() {
    return <Title />
  }
}

const mapStateToProps = ({}) => ({})
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TitleContainer)