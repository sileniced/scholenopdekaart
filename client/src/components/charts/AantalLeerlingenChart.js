import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { theme } from "../../theme"

const options = (props, theme) => ({
  chart: {
    type: "bar",
    style: {
      fontFamily: [
        "Proxima Nova",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(",")
      // fontFamily: "Proxima Nova Sans-Serif",
      // fontWeight: 700,
      // color: "black"
    }
  },
  title: {
    text: "Aantal Leerlingen",
    style: {
      fontWeight: 700,
      color: "black"
    }
  },
  subtitle: {
    text: props.shownYears > 1 ? "laatste drie jaren" : "dit jaar"
  },
  xAxis: {
    categories: props.names,
    color: "black",
  },
  series: props.shownYears.map(year => ({
    name: year,
    data: props.schools.map(school => {
      const found = school.find(schoolYear => schoolYear.schooljaar === year);
      return found ? found.aantalLeerlingen : 0;
    })
  }))
});

const AantalLeerlingenChart = props => {
  return <HighchartsReact styles={{paddingLeft:"10px"}} highcharts={Highcharts} options={options(props)} />;
};

export default AantalLeerlingenChart;
