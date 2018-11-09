import React, { Component } from 'react'
import { connect } from 'react-redux'

import { checkPoindAvailability } from '../../utilities'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

class __TEMPLATE__ extends Component {

  // constructor(props) {
  //   super(props)
  //   this.props = props
  //
  // }

  render() {

    const { available, unavailable } = checkPoindAvailability(this.props.selectedSchools, '__TEMPLATE__')
    const schools = available.map(school => school.__TEMPLATE__)

    const options = {
      chart: {
        // https://www.highcharts.com/docs/chart-and-series-types/chart-types
        type: '__TEMPLATE__',
      },
      title: {
        text: '__TEMPLATE__',
      },
      subtitle: {
        text: '__TEMPLATE__',
      },
      xAxis: {
        categories: ['__TEMPLATE__'],
      },
      series: [
        {
          name: '__TEMPLATE__',
          data: ['__TEMPLATE__']
        },
      ],
    }

    return <HighchartsReact highcharts={Highcharts} options={options}/>
  }
}

const mapStateToProps = ({ selectedSchools }) => ({ selectedSchools })

export default connect(mapStateToProps)(__TEMPLATE__)