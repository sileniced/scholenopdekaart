import React, { Component } from "react";
import { Card, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import SearchElement from "./SearchElement";

class SearchBar extends Component {

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.searchBar} xs={3}>
          <Typography className={classes.searchTitle}>Ik zoek:</Typography>
          <br />
          <SearchElement getSearchResults={this.props.getSearchResults}/>
          <button onClick={(e) => {e.preventDefault()}}className={classes.locationBtn}>
            Gebruik mijn locatie
          </button>
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
    padding: "20px",
    maxWidth: "750px"
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
    right: "0px"
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
