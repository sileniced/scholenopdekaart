import * as React from "react";
import FilterSelection from "./FilterSelection";
import FilterSelectionButtons from "./FilterSelectionButtons";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import TuneIcon from 'mdi-react/TuneIcon'; 
import { withStyles } from "@material-ui/core/styles";


class FilterSelectionExpansionPanel extends React.PureComponent {

  render() {
    return (
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={ <TuneIcon />}>
          Vergelijk scholen op...
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
      </div>
    );
  }
}

const styles = theme => ({
  
});

export default withStyles(styles)(FilterSelectionExpansionPanel);