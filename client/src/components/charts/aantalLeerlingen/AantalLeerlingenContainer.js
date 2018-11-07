import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

class aantalLeerlingenContainer extends Component {

  constructor(props) {
    super(props)
    this.props = props
  }

  options = {
      title: {
        text: 'Aantal Leerlingen'
      },

      subtitle: {
        text: 'When resizing the window or the frame, the chart should resize'
      },


      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },

      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
  }

  render() {
    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={this.options}
        />
      </div>

  )
  }
}

export default aantalLeerlingenContainer