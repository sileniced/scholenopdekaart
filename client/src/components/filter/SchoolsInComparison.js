//schools in comparison

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "mdi-react/ArrowDropDownIcon";
import HighlightOffIcon from "mdi-react/HighlightOffIcon";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import { Typography, Button } from "@material-ui/core";

const styles = theme => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
  },
  expansionPanel: {
    margin: "10px"
  },
  summary: {
    backgroundColor: theme.palette.secondary.main
  },
  details: {
    backgroundColor: theme.palette.secondary.main
  },
  comparisonText: {
    color: "white",
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
  },
  searchBtn: {
    color: "white",
    bottom: 0,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 0,
    width: "100%",
  }
});

function SchoolsInComparison(props) {
  const { classes } = props;
  return (
    <div className={classes.wrapper}>
      <ExpansionPanel className={classes.expansionPanel}>
        <ExpansionPanelSummary
          expandIcon={<ArrowDropDownIcon />}
          className={classes.summary}
        >
          <Typography className={classes.comparisonText}>
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
                <Typography className={classes.comparisonText}>
                  {school.school.N}
                </Typography>
              </li>
            ))}
          </ul>
          <br />
        </ExpansionPanelDetails>
        <Button className={classes.searchBtn} href="/search-result">
          Zoek andere scholen...
        </Button>
      </ExpansionPanel>
    </div>
  );
}

export default withStyles(styles)(SchoolsInComparison);
