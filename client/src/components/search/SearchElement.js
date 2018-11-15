import React, { Component } from "react";
import { Card, Typography } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

class SearchElement extends Component {
  constructor(props) {
    super(props);
    this.state = { query: "", redirect: false };
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/search-result" />;
    }
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.getSearchResults(this.state.query);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.searchSet}>
        <form onSubmit={this.handleSubmit}>
          <div className={classes.searchField}>
            <input
              value={this.state.query}
              onChange={this.handleChange}
              className={classes.searchInput}
              type="text"
              placeholder="Postcode, plaats of naam"
            />
          </div>
          <button
            onClick={this.setRedirect}
            type="submit"
            className={classes.searchBtn}
          >
            {this.renderRedirect()}
            Zoek
          </button>
        </form>
      </div>
    );
  }
}

const styles = theme => ({
  searchSet: {
    width: "100%",
    position: "relative",
    height: "50px",
    display: "flex"
  },
  searchField: {
    position: "absolute",
    left: "0px",
    top: "0px",
    bottom: "0px",
    right: "0px"
  },
  searchBtn: {
    backgroundColor: "#93608d",
    color: "#fff",
    fontWeight: 600,
    height: "50px",
    fontSize: 18,
    border: "none",
    position: "absolute",
    top: "0px",
    bottom: "0px",
    right: "0px"
  },
  searchInput: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    boxSizing: "border-box"
  },
  locationBtn: {
    width: "100%",
    height: "50px",
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "36px",
    color: "#e0d2de",
    backgroundColor: "#641c5c",
    borderColor: "#e0d2de",
    marginTop: "0.5em",
    borderStyle: "solid"
  }
});

export default withStyles(styles)(SearchElement);
