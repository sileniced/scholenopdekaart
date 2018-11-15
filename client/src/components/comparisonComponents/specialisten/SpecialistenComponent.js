import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import SpecialistenTableContainer from '../../charts/tables/SpecialistenTableContainer'
import ColorBubblesNamesContainer from '../ColorBubblesNamesContainer'
import ComparisonHeaderComponent from '../ComparisonHeaderComponent'


const styles = theme => ({});

const Specialisten = props => (
  <div>
    <ComparisonHeaderComponent name={"specialisten"} />
    <SpecialistenTableContainer />
  </div>
);

export default withStyles(styles)(Specialisten);
