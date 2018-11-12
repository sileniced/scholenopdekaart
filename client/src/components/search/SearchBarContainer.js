import React, { Component } from "react";
import './SearchBarContainer.css'
import { connect } from "react-redux";
import { getSearchResults } from '../../actions/schools'
import { Redirect } from 'react-router-dom'

class SearchBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {query: ''};
  }

  handleChange = (event) => {
    this.setState({query: event.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getSearchResults(this.state.query)
    return <Redirect to="/search-result" />
  }

  render() {
    return (
      <div>
          <form className="search-bar" onSubmit={this.handleSubmit}>
            <label className="search-title">Ik zoek een: </label><br></br>
            <input 
              value={this.state.query}
              onChange={this.handleChange}
              className="btn search-input"
              type="text"
              placeholder="Postcode, plaats of naam"
            />
            <button type="submit" className="btn search-btn">Zoek</button>
            <button type="submit" className="btn location-btn">Gebruik mijn locatie</button>
          </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  query: state.query,

})

export default connect(mapStateToProps, {getSearchResults})(SearchBarContainer)

