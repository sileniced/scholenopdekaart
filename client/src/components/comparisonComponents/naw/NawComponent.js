import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import KeyboardArrowDownIcon from "mdi-react/KeyboardArrowDownIcon";
import FiberManualRecordIcon from "mdi-react/FiberManualRecordIcon";
import { schoolColors } from "../../constants";

const styles = theme => ({
  root: {}
});

function renderSchoolContactDetails(props, school, index) {
  const { classes } = props;

  return (
    <div>
      <ExpansionPanel className={classes.schoolPanel}>
        <ExpansionPanelSummary expandIcon={<KeyboardArrowDownIcon />}>
          <div>
            <FiberManualRecordIcon color={schoolColors[index]} />
            {school.school.N}
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            {school.school.A[0]}
            <br />
            {`${school.school.A[1]} ${school.school.A[2]}`}
            <br />
            <br />
            {school.school.T}
            <br />
            <br />
            Onderwijstype:
            <br />
            {props.typeOnderwijs[school.school.O[0]]}
            <br />
            <br />
            Denominatie:
            <br />
            {props.denominatie[school.school.D]}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

function NawComponent(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <h2>Ligging en contactgegevens</h2>
      Waar vind ik de scholen en wat zijn de contactgegevens?
      {/* Kaart */}
      {props.selectedSchools.map((school, index) => (
        <div key={school.school.I}>
          {renderSchoolContactDetails(props, school, index)}{" "}
        </div>
      ))}
    </div>
  );
}

export default withStyles(styles)(NawComponent);
