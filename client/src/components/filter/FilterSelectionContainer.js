import * as React from "react";
import { connect } from "react-redux";
import FilterSelection from "./FilterSelection";
import { filters } from "../../constants";
import { toggleFilter, resetFilters } from "../../actions/filters";
import FilterSelectionButtons from "./FilterSelectionButtons";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import TuneIcon from 'mdi-react/TuneIcon'; 
import { withStyles } from "@material-ui/core/styles";


class FilterSelectionContainer extends React.PureComponent {
  handleToggle = filter => {
    this.props.toggleFilter(filter);
  };

  handleResetFilters = () => {
    this.props.resetFilters();
  };

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
                filters={filters}
                handleToggle={this.handleToggle}
                selectedFilters={this.props.selectedFilters}
              />
              <FilterSelectionButtons
                handleResetFilters={this.handleResetFilters}
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

const mapStateToProps = state => ({
  selectedSchools: state.selectedSchools,
  selectedFilters: state.selectedFilters
});

export default connect(
  mapStateToProps,
  { toggleFilter, resetFilters }
)(withStyles(styles)(FilterSelectionContainer));
