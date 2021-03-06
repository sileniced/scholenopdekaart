import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import { checkPoindAvailability } from '../../utilities'

import Highcharts from 'highcharts/'
import HighchartsReact from 'highcharts-react-official'
import xrange from 'highcharts/modules/xrange-series'
import { comparisonColors } from '../../theme'

xrange(Highcharts)

const categories = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag']
const showCategories = ['MA', 'DI', 'WO', 'DO', 'VR']
const parts = ['opvangVan', 'ochtendVan', 'ochtendTot', 'middagVan', 'middagTot', 'opvangTot']
const parseTime = time => moment(time, 'HH:mm').add(1, 'hour').valueOf()

const inputMapped = input => input.map(day => {
  const y = categories.indexOf(day['dag'])
  let partialFill = 1

  return parts.map((part, i) => {
    partialFill = partialFill ? 0 : 1
    for (let ii = i + 1; ii < parts.length; ii++) {
      if (day[part] && parts[ii] && day[parts[ii]]) {
        return {
          x: parseTime(day[part]),
          x2: parseTime(day[parts[ii]]),
          y,
          partialFill,
        }
      }
    }
    return false

  }).filter(part => part)

}).reduce((output, day) => output.concat(day), [])

class TijdenChart extends Component {

  render() {

    const { available, unavailable } = checkPoindAvailability(this.props.selectedSchools, 'tijden')

    // console.log('available =', available)
    // console.log('unavailable =', unavailable)
    // console.log(available[0] && JSON.stringify(inputMapped(available[0].tijden.rapport.versie1.datasetSchooltijden.rij)))

    const dataset = available.map((school, i) => {
        return {
          C: school.C,
          options: {
            chart: {
              type: 'xrange',
            },
            title: {
              text: '',
            },
            xAxis: {
              type: 'datetime',
            },
            yAxis: {
              title: {
                text: '',
              },
              categories: showCategories,
              reversed: true,
            },
            series: [
              {
                color: comparisonColors[i][500],
                name: school.school.N,
                data: inputMapped(school.tijden.rapport.versie1.datasetSchooltijden.rij),
              },
            ],
          },
        }
      },
    )

    return (
      <div>
        {dataset.map(data => <HighchartsReact key={data.C} highcharts={Highcharts} options={data.options}/>)}
      </div>
    )
  }
}

const mapStateToProps = ({ selectedSchools }) => ({ selectedSchools })

export default connect(mapStateToProps)(TijdenChart)
