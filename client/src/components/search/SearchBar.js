import React, { Component } from "react";
import { Card, Typography } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { theme } from '../../theme'

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
    const { classes } = this.props;
  return ( <Card className={classes.searchBar} xs={3}>
      <form  onSubmit={this.handleSubmit}>
          <Typography className={classes.searchTitle}>Ik zoek een:</Typography>
          <br />
          <input
            value={this.state.query}
            onChange={this.handleChange}
            className="search-input"
            type="text"
            placeholder="Postcode, plaats of naam"
          />
            <button onClick={this.setRedirect} type="submit" className={classes.searchBtn}>{this.renderRedirect()}
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

const styles = (theme) => ({
  searchBar: {
    boxShadow: "none",
    width: "80%",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    fontFamily: "Proxima Nova Arial sans-serif",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "10%",
    padding: "4%"
  },
  searchTitle: {
    alignItems: "left",
    color: "#fff",
    fontSize: "20px",
    fontWeight: "bold",
    display: "block",
  },
  searchBtn: {
    backgroundColor: "#93608d",
    color: "#fff",
    fontWeight: 600,
    height: "50px",
    width: "60px",
    paddingTop: "2px",
  }
});

export default withStyles(styles)(SearchBar)
