import React, { Component } from "react";
import SearchBarContainer from "../search/SearchBarContainer";
import "./HeaderContainer.css";
import { Typography, withStyles } from "@material-ui/core";

class HeaderContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className="header-container" position="static">
          <div className="layer">
            <Typography align="center" className={classes.title}>
              Vind en vergelijk scholen bij jou in de buurt
            </Typography>
            <div align="center">
              <SearchBarContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const style = theme => ({
  title: {
    fontWeight: 700,
    color: "#fff",
    fontSize: "40px",
    paddingBottom: "60px",
    paddingTop: "10%",
    margin: "4%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      paddingBottom: "20px"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "32px",
      paddingBottom: "30px"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "40px"
    }
  }
});

export default withStyles(style)(HeaderContainer);
