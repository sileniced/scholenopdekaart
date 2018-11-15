import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "mdi-react/ArrowDropDownIcon";
import HighlightOffIcon from "mdi-react/HighlightOffIcon";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import {Typography} from "@material-ui/core";

const styles = theme => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
  },
  summary: {
    backgroundColor: theme.palette.secondary.main
  },
  details: {
    backgroundColor: theme.palette.secondary.main
  },
  comparisonText: {
    color:"white",
    marginLeft: "10px"
  },
  listOfSchools: {
    listStyleType: "none",
    padding: 0
  },
  school: {
    display: "flex",
    alignItems: "center",
    color: "white"
  }
});

function SchoolsInComparison(props) {
  const { classes } = props;
  return (
    <div className={classes.wrapper}>
      <ExpansionPanel className="ExpansionPanel">
        <ExpansionPanelSummary
          expandIcon={<ArrowDropDownIcon />}
          className={classes.summary}
        ><Typography className={classes.comparisonText}>
          Scholen in vergelijking ({props.selectedSchools.length}/
          {props.maxSchools})
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <ul className={classes.listOfSchools}>
            {props.selectedSchools.map(school => (
              <li key={school.school.I} className={classes.school}>
                <HighlightOffIcon 
                  onClick={() => props.removeSchool(school.school)}
                />
                <Typography className={classes.comparisonText}>{school.school.N}</Typography>
              </li>
            ))}
          </ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default withStyles(styles)(SchoolsInComparison);
