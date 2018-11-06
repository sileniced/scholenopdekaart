import * as React from "react";
import { connect } from "react-redux";
import SearchResultTable from "./SearchResultTable";

class SearchResultContainer extends React.PureComponent {
  render() {
    return <SearchResultTable schools={this.props.schools}/>;
  }
}

const mapStateToProps = state => ({
    schools: state.schools
});

export default connect(mapStateToProps)(SearchResultContainer);
