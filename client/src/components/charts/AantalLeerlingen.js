import React, { Component } from 'react'
import { connect } from 'react-redux'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

class aantalLeerlingen extends Component {

  constructor(props) {
    super(props)
    this.props = props
    this.shownYears = props.multi ? ['2015-2016', '2016-2017', '2017-2018'] : ['2017-2018']
  }

  render() {
    const schools = this.props.selectedSchools.map(school => school.leerlingen.rapport.versie1.datasetAantalLeerlingenTrend.rij)

    const options = {
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Aantal Leerlingen',
      },
      subtitle: {
        text: this.props.multi ? 'laatste drie jaren' : 'dit jaar',
      },
      xAxis: {
        categories: this.props.selectedSchools.map(school => school.school.N),
      },
      series: this.shownYears.map(year => ({
        name: year,
        data: schools.map(school => {
          const found = school.find(schoolYear => schoolYear.schooljaar === year)
          return found ? found.aantalLeerlingen : 0
        }),
      })),
    }

    return <HighchartsReact highcharts={Highcharts} options={options}/>
  }
}

const mapStateToProps = ({ selectedSchools }) => ({ selectedSchools })

export default connect(mapStateToProps)(aantalLeerlingen)