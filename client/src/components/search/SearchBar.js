import React, { Component } from "react";
import { Card, Typography } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

class SearchBar extends Component {
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
      <Card className={classes.searchBar} xs={3}>
        <form onSubmit={this.handleSubmit}>
          <Typography className={classes.searchTitle}>Ik zoek:</Typography>
          <br />
          <div className={classes.searchSet}>
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
          </div>
            <button type="submit" className={classes.locationBtn}>
              Gebruik mijn locatie
            </button>
        </form>
      </Card>
    );
  }
}

const styles = theme => ({
  searchBar: {
    boxShadow: "none",
    width: "80%",
    backgroundColor: theme.palette.primary.main,
    display: "inline-block",
    fontFamily: "Proxima Nova Arial sans-serif",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "10%",
    padding: "2%"
  },
  searchTitle: {
    alignItems: "left",
    color: "#fff",
    fontSize: "25px",
    fontWeight: "bold",
    display: "block",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "23px"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "25px"
    }
  },
  searchField: {
    position: "absolute",
    left: "0px",
    top: "0px",
    bottom: "0px",
    right: "50px"
  },
  searchSet: {
    width: "100%",
    position: "relative",
    height: "50px"
  },
  searchBtn: {
    backgroundColor: "#93608d",
    color: "#fff",
    fontWeight: 600,
    height: "50px",
    // maxWidth: "60px",
    // paddingTop: "0px",
    fontSize: 18,
    border: "none",
    // width: "10%",
    // minWidth: "50px",
    position: "absolute",
    // float: "right",
    top: "0px",
    bottom: "0px",
    right: "50px"

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

export default withStyles(styles)(SearchBar);
