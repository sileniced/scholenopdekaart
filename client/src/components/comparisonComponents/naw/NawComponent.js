import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import KeyboardArrowDownIcon from "mdi-react/KeyboardArrowDownIcon";
import FiberManualRecordIcon from "mdi-react/FiberManualRecordIcon";
import { schoolColors } from "../../../constants";
import { Typography } from "@material-ui/core";
import ComparisonHeaderComponent from '../ComparisonHeaderComponent'

const styles = theme => ({
  schoolPanel: { width: "320px" },
  expansionSummary: { display: "flex", alignItems: "center" },
  colorBubble: { marginRight: "20px" },
  schoolPanelWrapper: {
    display: "flex",
    justifyContent: "center"
  },
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

function renderSchoolContactDetails(props, school, index) {
  const { classes } = props;

  return (
    <div className={classes.schoolPanelWrapper}>
      <ExpansionPanel className={classes.schoolPanel}>
        <ExpansionPanelSummary expandIcon={<KeyboardArrowDownIcon />}>
          <div className={classes.expansionSummary}>
            <div className={classes.colorBubble}>
              <FiberManualRecordIcon color={schoolColors[index]} />
            </div>
            <div>
              <Typography>{school.school.N}</Typography>
            </div>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <Typography>
              {school.school.A[0]}
              <br />
              {`${school.school.A[1]} ${school.school.A[2]}`}
              <br />
              <br />
              {school.school.T}
              <br />
              <br />
              <strong>Onderwijstype:</strong>
              <br />
              {props.typeOnderwijs[school.school.O[0]]}
              <br />
              <br />
              <strong>Denominatie:</strong>
              <br />
              {props.denominatie[school.school.D]}
            </Typography>
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
    <ComparisonHeaderComponent name={'naw'}/>
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
