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
  buttonsContainer: {
    backgroundColor: theme.palette.background.paper
  }
  
});

function FilterSelectionButtons(props) {
  const { classes } = props;
  return (
    <div className={classes.buttonsContainer}>
      <Button variant="contained" color="primary" className={classes.button}>
        Resetten
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Toepassen
      </Button>
    </div>
  );
}

FilterSelectionButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FilterSelectionButtons);