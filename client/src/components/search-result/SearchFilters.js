import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Switch from "@material-ui/core/Switch";
import { Typography } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "mdi-react/ExpandMoreIcon";

const styles = theme => ({
  headerTwo: {
    color: theme.palette.primary.main
  }
});

function SearchFilters(props) {
  const { classes } = props;

  return (
    <div>
      <Typography className={classes.headerTwo}>
        <h2>Filter zoekresultaat</h2>
      </Typography>
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Onderwijstype:</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
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
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Denominatie:</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
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
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Onderwijsconcept:</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List>
              {Object.values(props.conceptOnderwijs).map(
                (conceptOnderwijs, index) => (
                  <ListItem divider key={index}>
                    <ListItemText primary={conceptOnderwijs} />
                    <Switch
                      checked={
                        props.activeSearchFilters.conceptOnderwijs[
                          Object.keys(props.conceptOnderwijs).find(
                            key =>
                              props.conceptOnderwijs[key] === conceptOnderwijs
                          )
                        ]
                      }
                      color="secondary"
                      onChange={() =>
                        props.handleToggleConceptOnderwijs(
                          Object.keys(props.conceptOnderwijs).find(
                            key =>
                              props.conceptOnderwijs[key] === conceptOnderwijs
                          )
                        )
                      }
                    />
                  </ListItem>
                )
              )}
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Specialisten:</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List>
              {props.specialisten.map((specialist, index) => (
                <ListItem divider key={index}>
                  <ListItemText primary={specialist} />
                  <Switch
                    checked={props.activeSearchFilters.specialisten[specialist]}
                    color="secondary"
                    onChange={() => props.handleToggleSpecialisten(specialist)}
                  />
                </ListItem>
              ))}
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Aantal leerlingen:</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List>
              {Object.values(props.sizeFilter).map((size, index) => (
                <ListItem divider key={index}>
                  <ListItemText primary={size} />
                  <Switch
                    checked={
                      props.activeSearchFilters.aantalLeerlingen[
                        Object.keys(props.sizeFilter).find(
                          key => props.sizeFilter[key] === size
                        )
                      ]
                    }
                    color="secondary"
                    onChange={() =>
                      props.handleToggleSize(
                        Object.keys(props.sizeFilter).find(
                          key => props.sizeFilter[key] === size
                        )
                      )
                    }
                  />
                </ListItem>
              ))}
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  );
}

export default withStyles(styles)(SearchFilters);
