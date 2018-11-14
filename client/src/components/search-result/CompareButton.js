import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    padding: "5px",
    borderRadius: 0,
    boxShadow: "none",
    color: "white",

  },
  buttonText: {
    color: "white",
    fontSize: "0.9em",
    margin: "5px"
  },
  buttonContent: {
    display: "flex",
    justifyContent: "space-between"
  }

});

function CompareButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button
        variant="contained"
        color={props.school.selected ? "secondary" : "primary"}
        className={classes.button}
        onClick={() => props.handleClick(props.schoolId)}
        disabled={
          props.selectedSchools.length < props.maxSchools ||
          props.school.selected
            ? false
            : true
        }
      ><div className={classes.buttonContent}>
      <div>
        <Typography className={classes.buttonText}>
          {props.school.selected ? <span>&#10003;</span> : <span>&#43;</span>}
        </Typography>
        </div>
        <div>
        <Typography className={classes.buttonText}>Vergelijk</Typography>
        </div>
        </div>
      </Button>
    </div>
  );
}

CompareButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CompareButton);
