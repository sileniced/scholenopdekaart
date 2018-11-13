import React, { Component } from 'react'
import { connect } from 'react-redux'

import { checkPoindAvailability } from '../../utilities'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartsMore from 'highcharts/highcharts-more'

HighchartsMore(Highcharts)

class Eindtoets extends Component {

  // constructor(props) {
  //   super(props)
  //   this.props = props
  //
  // }

  render() {

    const { available, unavailable } = checkPoindAvailability(this.props.selectedSchools, 'eindtoets')
    const schools = available.map(school => school.eindtoets.rapport.versie1.rij)

    const options = {
      chart: {
        zoomType: 'xy'
      },
      xAxis: [{
        categories: schools.map(school => school.school.N)
      }],
      yAxis: [{ // Primary yAxis
        labels: {
          format: '{value} °C',
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        },
        title: {
          text: 'Temperature',
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        }
      }, { // Secondary yAxis
        title: {
          text: 'Rainfall',
          style: {
            color: Highcharts.getOptions().colors[0]
          }
        },
        labels: {
          format: '{value} mm',
          style: {
            color: Highcharts.getOptions().colors[0]
          }
        },
        opposite: true
      }],

      tooltip: {
        shared: true
      },

      series: [{
        name: 'Rainfall',
        type: 'column',
        yAxis: 1,
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        tooltip: {
          pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f} mm</b> '
        }
      }, {
        name: 'Rainfall error',
        type: 'errorbar',
        yAxis: 1,
        data: [[48, 51], [68, 73], [92, 110], [128, 136], [140, 150], [171, 179], [135, 143], [142, 149], [204, 220], [189, 199], [95, 110], [52, 56]],
        tooltip: {
          pointFormat: '(error range: {point.low}-{point.high} mm)<br/>'
        }
      }, {
        name: 'Temperature',
        type: 'spline',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
        tooltip: {
          pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f}°C</b> '
        }
      }, {
        name: 'Temperature error',
        type: 'errorbar',
        data: [[6, 8], [5.9, 7.6], [9.4, 10.4], [14.1, 15.9], [18.0, 20.1], [21.0, 24.0], [23.2, 25.3], [26.1, 27.8], [23.2, 23.9], [18.0, 21.1], [12.9, 14.0], [7.6, 10.0]],
        tooltip: {
          pointFormat: '(error range: {point.low}-{point.high}°C)<br/>'
        }
      }]
    }

    return <HighchartsReact highcharts={Highcharts} options={options}/>
  }
}

const mapStateToProps = ({ selectedSchools }) => ({ selectedSchools })

export default connect(mapStateToProps)(Eindtoets)