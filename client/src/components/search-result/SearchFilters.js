import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Switch from "@material-ui/core/Switch";

const styles = theme => ({
 
});

function SearchFilters(props) {
  const { classes } = props;
  return (
    <div>
        <h2>Filter zoekresultaat</h2>
        <div>Onderwijstype:
        <List>
        {Object.values(props.typeOnderwijs).map((type, index) => (
          <ListItem divider key={index}> 
            <ListItemText primary={type} />
            <Switch
               checked={
                 props.activeSearchFilters.typeOnderwijs[
                   Object.keys(props.typeOnderwijs).find(
                    key => props.typeOnderwijs[key] === type
                   )
                 ]
               }
              color="secondary"
              onChange={() =>
                props.handleToggleOnderwijstype(
                  Object.keys(props.typeOnderwijs).find(
                    key => props.typeOnderwijs[key] === type
                  )
                )
              }
            />
          </ListItem>
        ))}
      </List>
        </div>
        <div>
            Denominatie:
            <List>
        {Object.values(props.denominatie).map((denominatie, index) => (
          <ListItem divider key={index}>
            <ListItemText primary={denominatie} />
            <Switch
               checked={
                props.activeSearchFilters.denominatie[
                  Object.keys(props.denominatie).find(
                   key => props.denominatie[key] === denominatie
                  )
                ]
              }
              color="secondary"
              onChange={() =>
                props.handleToggleDenominatie(
                  Object.keys(props.denominatie).find(
                    key => props.denominatie[key] === denominatie
                  )
                )
              }
            />
          </ListItem>
        ))}
      </List>
        </div>
        <div>
            Onderwijsconcept:
        </div>

    </div>
  );
}


export default withStyles(styles)(SearchFilters);
