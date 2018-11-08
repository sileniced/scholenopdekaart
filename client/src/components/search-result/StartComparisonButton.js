import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    borderRadius: 0,
    boxShadow: "none",
  },
  input: {
    display: "none"
  }
});

function StartComparisonButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" color="secondary" className={classes.button} onClick={() => props.handleClick}>
          Vergelijk scholen {props.selectedSchools.length}/{props.maxSchools}
      </Button>
    </div>
  );
}

StartComparisonButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StartComparisonButton);
