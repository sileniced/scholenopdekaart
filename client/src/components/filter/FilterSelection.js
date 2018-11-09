import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Switch from "@material-ui/core/Switch";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: "360px",
    backgroundColor: theme.palette.background.paper
  }
});

function FilterSelection(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        {Object.values(props.filters).map((filter, index) => (
          <ListItem divider key={index}>
            <ListItemText primary={filter} />
            <Switch
              color="secondary"
              onChange={() =>
                props.handleToggle(
                  Object.keys(props.filters).find(
                    key => props.filters[key] === filter
                  )
                )
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

FilterSelection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FilterSelection);
