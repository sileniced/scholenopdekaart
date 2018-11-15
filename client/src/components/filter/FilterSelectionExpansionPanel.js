import * as React from "react";
import FilterSelection from "./FilterSelection";
import FilterSelectionButtons from "./FilterSelectionButtons";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import TuneIcon from "mdi-react/TuneIcon";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import HighlightOffIcon from "mdi-react/HighlightOffIcon";

class FilterSelectionExpansionPanel extends React.PureComponent {
  render() {
    return (
      <div className={this.props.classes.expansionPanelWrapper}>
        <ExpansionPanel className={this.props.classes.expansionPanel}>
          <ExpansionPanelSummary expandIcon={<TuneIcon />}>
            <Typography>Vergelijk scholen op...</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              <FilterSelection
                filters={this.props.filters}
                handleToggle={this.props.handleToggle}
                selectedFilters={this.props.selectedFilters}
              />
              <FilterSelectionButtons
                handleResetFilters={this.props.handleResetFilters}
              />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <div className={this.props.classes.expansionPanelInfo}>
          <Typography
            className={this.props.classes.expansionPanelInfoTypography}
          >
            Selecteer welke info van scholen u wilt vergelijken.
          </Typography>
        </div>
        {Object.keys(this.props.selectedFilters)
          .filter(filter => this.props.selectedFilters[filter])
          .map(selectedFilter => (
            <div
              key={selectedFilter}
              className={this.props.classes.selectedFilter}
            >
              <HighlightOffIcon
                onClick={() => this.props.handleToggle(selectedFilter)}
              />
              <Typography
                className={this.props.classes.selectedFilterTypography}
              >
                {this.props.filters[selectedFilter]}
              </Typography>
            </div>
          ))}
      </div>
    );
  }
}

const styles = theme => ({
  expansionPanel: {
    width: "90%",
    maxWidth: "360px",
    backgroundColor: theme.palette.background.paper,
    border: "solid",
    borderColor: theme.palette.primary,
    borderWidth: "1px",
    margin: "10px",
    borderRadius: "none"
  },
  expansionPanelWrapper: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  expansionPanelInfo: {
    backgroundColor: theme.palette.background.default
    // border: "1px solid black",
    // "&::before": {
    //   content: "",
    //   position: "absolute",
    //   top: "-20px",
    //   right: "5px",
    //   borderBottom: "10px solid black",
    //   borderRight: "10px solid transparent",
    //   borderLeft: "10px solid transparent",
    //   borderTop: "10px solid transparent",
    //   zIndex: 10
    // }
  },
  selectedFilterTypography: {
    color: theme.palette.primary.main,
  },
  expansionPanelInfoTypography: {
    color: "#fff",
    margin: "10px"
  },
  selectedFilter: {
    color: theme.palette.primary.main,
    borderStyle: "solid",
    borderColor: theme.palette.primary.main,
    borderWidth: "1px",
    borderRadius: "25px",
    display: "flex",
    alignItems: "center",
    padding: "5px",
    margin: "5px"
  },

});

export default withStyles(styles)(FilterSelectionExpansionPanel);
