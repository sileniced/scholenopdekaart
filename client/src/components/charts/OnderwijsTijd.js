import React, { Component } from 'react'
import { connect } from 'react-redux'

import { checkPoindAvailability } from '../../utilities'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

class OnderwijsTijd extends Component {

  // constructor(props) {
  //   super(props)
  //   this.props = props
  //
  // }

  render() {

    const { available, unavailable } = checkPoindAvailability(this.props.selectedSchools, 'onderwijstijd')
    const schools = available.map(school => school.onderwijstijd.rapport)

    console.log('available = ', available)
    
    const options = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: ''
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} uren',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: schools[0]
      }]
    }

    return <HighchartsReact highcharts={Highcharts} options={options}/>
  }
}

const mapStateToProps = ({ selectedSchools }) => ({ selectedSchools })

export default connect(mapStateToProps)(OnderwijsTijd)