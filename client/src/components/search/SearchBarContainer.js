import React, { Component } from "react";
import "./SearchBarContainer.css";
import { connect } from "react-redux";
import { getSearchResults } from "../../actions/schools";
import SearchBar from './SearchBar'



class SearchBarContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar 
        getSearchResults={this.props.getSearchResults}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  query: state.query
});

export default connect(
  mapStateToProps,
  { getSearchResults }
)(SearchBarContainer);
