import React, { Component } from 'react'
import { connect } from 'react-redux'

import { checkPoindAvailability } from '../../utilities'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

class VerdelingLestijdenChart extends Component {

  // constructor(props) {
  //   super(props)
  //   this.props = props
  //
  // }

  render() {

    const { available, unavailable } = checkPoindAvailability(this.props.selectedSchools, 'onderwijstijd')
    const schools = available.map(school => school.onderwijstijd.rapport)

    const options = schools.map(school => ({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
      },
      title: {
        text: '',
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} uren',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
            },
          },
          // dataLabels: {
          //   enabled: false
          // },
          showInLegend: true
        },
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: school,
      }],
      "legend": {
        "enabled": false,
        "align": "right",
        "verticalAlign": "middle",
        "floating": false,
        "layout": "vertical"
      }
    }))

    return (
      <div>
        {options.map(option => (
          <HighchartsReact highcharts={Highcharts} options={option}/>
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ selectedSchools }) => ({ selectedSchools })

export default connect(mapStateToProps)(VerdelingLestijdenChart)