import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    borderRadius: 0,
    boxShadow: "none"
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper
  },
  buttonText: {
    color: 'white'
  }
});

function FilterSelectionButtons(props) {
  const { classes } = props;
  return (
    <div className={classes.buttonsContainer}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => props.handleResetFilters()}
      >
        <Typography className={classes.buttonText}>Resetten</Typography>
      </Button>
      <Button variant="contained" color="secondary" className={classes.button} onClick={() => props.handleCollapse()}>
        <Typography className={classes.buttonText}>Toepassen</Typography>
      </Button>
    </div>
  );
}

FilterSelectionButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FilterSelectionButtons);
