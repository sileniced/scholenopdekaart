import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = (props) => ({
  chart: {
    type: 'bar',
  },
  title: {
    text: 'Aantal Leerlingen',
  },
  subtitle: {
    text: props.shownYears > 1 ? 'laatste drie jaren' : 'dit jaar',
  },
  xAxis: {
    categories: props.names,
  },
  series: props.shownYears.map(year => ({
    name: year,
    data: props.schools.map(school => {
      const found = school.find(schoolYear => schoolYear.schooljaar === year)
      return found ? found.aantalLeerlingen : 0
    }),
  })),
})

const AantalLeerlingenChart = props => {
  return  <HighchartsReact highcharts={Highcharts} options={options(props)}/>
}

export default AantalLeerlingenChart