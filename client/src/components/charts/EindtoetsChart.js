import React, { Component } from 'react'
import { connect } from 'react-redux'

import { checkPoindAvailability } from '../../utilities'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartsMore from 'highcharts/highcharts-more'

HighchartsMore(Highcharts)

class EindtoetsChart extends Component {

  // constructor(props) {
  //   super(props)
  //   this.props = props
  //
  // }

  render() {

    const getData = school => {
      const toetsen = ['Amn', 'Cecan', 'Dia', 'Eindtoets', 'Route8', 'Iep']
      for (const toets of toetsen) {
        if (school[`dataset${toets}`]) {
          return school[`dataset${toets}`].rij
        }
      }
      return false
    }

    const { available, unavailable } = checkPoindAvailability(this.props.selectedSchools, 'eindtoets')
    // console.log({ available, unavailable })
    const schools = available.map(school => getData(school.eindtoets.rapport.versie1)).filter(school => school)
    
    const options = {
      chart: {
        zoomType: 'xy',
      },
      xAxis: [{
        categories: available.map(school => school.school.N),
      }],
      yAxis: [{ // Primary yAxis
        labels: {
          format: '{value}',
          style: {
            color: Highcharts.getOptions().colors[1],
          },
        },
        title: {
          text: 'Eindtoets',
          style: {
            color: Highcharts.getOptions().colors[1],
          },
        },
      }],

      tooltip: {
        shared: true,
      },

      series: [{
        name: 'eindtoets',
        type: 'line',
        lineWidth: 0,
        data: schools.map(school => school.score),
        tooltip: {
          pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f}°C</b> ',
        },
      }, {
        name: 'ondergrens',
        type: 'errorbar',
        data: schools.map(school => [school.ondergrensVergelijking, school.ondergrensVergelijking]),
        tooltip: {
          pointFormat: '(error range: {point.low}-{point.high}°C)<br/>',
        },
      }],
    }

    return <HighchartsReact highcharts={Highcharts} options={options}/>
  }
}

const mapStateToProps = ({ selectedSchools }) => ({ selectedSchools })

export default connect(mapStateToProps)(EindtoetsChart)