import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Switch from "@material-ui/core/Switch";

const styles = theme => ({
  root: {

  }
});

function FilterSelection(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <List>
        {Object.values(props.filters).map((filter, index) => (
          <ListItem divider key={index}>
            <ListItemText primary={filter} />
            <Switch
              checked={
                props.selectedFilters[
                  Object.keys(props.filters).find(
                    key => props.filters[key] === filter
                  )
                ]
              }
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
