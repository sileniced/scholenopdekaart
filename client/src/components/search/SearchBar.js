import React, { Component } from "react";
import { Card } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { theme } from '../../theme'

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
    borderRadius: 0,
    boxShadow: "none",
  },
  input: {
    display: "none"
  }
});

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { query: "", redirect: false };
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/search-result' />
    }
  }
  
  handleChange = event => {
    this.setState({ query: event.target.value });
  };
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.getSearchResults(this.state.query);
  };
  
  render(){
  return ( <Card>
      <form className="search-bar" onSubmit={this.handleSubmit}>
          <label className="search-title">Ik zoek een: </label>
          <br />
          <input
            value={this.state.query}
            onChange={this.handleChange}
            className="btn search-input"
            type="text"
            placeholder="Postcode, plaats of naam"
          />
            <button onClick={this.setRedirect} type="submit" className="btn search-btn">{this.renderRedirect()}
              Zoek
            </button>
          
          <button type="submit" className="btn location-btn">
            Gebruik mijn locatie
          </button>
        </form>
      </Card>
  );
  }
};

export default withStyles(styles)(SearchBar)
