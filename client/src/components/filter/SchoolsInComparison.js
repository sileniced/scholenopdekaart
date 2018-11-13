import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "mdi-react/ArrowDropDownIcon";
import HighlightOffIcon from "mdi-react/HighlightOffIcon";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

const styles = theme => ({
  wrapper: {
    display: "flex",
    justifyContent: "center"
  },
  summary: {
    color: "yellow",
    backgroundColor: theme.palette.background.default
  }
});

function SchoolsInComparison(props) {
  const { classes } = props;
  return (
    <div className={classes.wrapper}>
      <ExpansionPanel className="ExpansionPanel">
        <ExpansionPanelSummary
          expandIcon={<ArrowDropDownIcon />}
          className="summary"
        >
          Scholen in vergelijking ({props.selectedSchools.length}/
          {props.maxSchools})
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <ul>
            {props.selectedSchools.map(school => (
              <li key={school.school.I}>
                <HighlightOffIcon
                  onClick={() => props.removeSchool(school.school)}
                />
                {school.school.N}
              </li>
            ))}
          </ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default withStyles(styles)(SchoolsInComparison);
