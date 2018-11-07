import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    borderRadius: 0,
    boxShadow: "none"
  },
  input: {
    display: "none"
  }
});

function CompareButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button} onClick={() => props.handleClick(props.schoolId)}>
        <Grid container spacing={24}>
          <Grid item xs>
            <span>&#10003;</span>
          </Grid>
          <Grid item xs>
            Vergelijk
          </Grid>
        </Grid>
      </Button>
    </div>
  );
}

CompareButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CompareButton);
