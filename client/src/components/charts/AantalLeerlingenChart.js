import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = schools => ({
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
})

const AantalLeerlingenChart = props => {
  return  <HighchartsReact highcharts={Highcharts} options={options(props.schools)}/>
}

export default AantalLeerlingenChart