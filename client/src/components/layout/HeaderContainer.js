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
            <Typography align="center" className={classes.title}>Vind en vergelijk scholen bij jou in de buurt</Typography>
            <SearchBarContainer />
          </div>
        </div>
      </div>
    );
  }
}

const style = ({
  title: {
    fontWeight: 700,
    color: "#fff",
    fontSize: "30px",
    paddingTop: "20px",
  }
})

export default withStyles(style)(HeaderContainer)
