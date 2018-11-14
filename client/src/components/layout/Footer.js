import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <img
          className={classes.logo}
          src="https://www.scholenopdekaart.nl/Images/logo_sodk@3x.png"
          alt="logo"
        />
      </div>
    );
  }
}

const style = theme => ({
  container: {
    backgroundColor: "#f0e8ef",
    height: "100px"
  },
  logo: {
    maxWidth: "20%",
    minWidth: "100px",
    margin: "0.75em"
  }
});

export default withStyles(style)(Footer);
