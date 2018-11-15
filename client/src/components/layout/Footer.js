// footer

import React, { Component } from "react";
import { withStyles, Typography, Button } from "@material-ui/core";

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
      <Typography>
        <div className={classes.title}>
      Zoek een school in...
      </div>
      <div className={classes.links}>
      <a href="/search-result/amsterdam" style={{textDecoration:"none"}}>Amsterdam</a><br></br>
      <a href="/search-result/utrecht" style={{textDecoration:"none"}}>Utrecht</a><br></br>
      <a href="/search-result/wageningen" style={{textDecoration:"none"}}>Wageningen</a><br></br>
      </div>
      </Typography>
        {/* <img
          className={classes.logo}
          src="https://www.scholenopdekaart.nl/Images/logo_sodk@3x.png"
          alt="logo"
        /> */}
      </div>
    );
  }
}

const style = theme => ({
  container: {
    backgroundColor: "#efe8ee",
    height: "120px",
    position: "relative",
    bottom: 0,
    padding: "20px",
    paddingBottom: "10px"
  },
  logo: {
    maxWidth: "20%",
    minWidth: "100px",
    margin: "0.75em"
  },
  links: {
    style:{
    textDecoration: "none",
    }
  },
  title: {
    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamily,
    fontWeight: 700
  }
});

export default withStyles(style)(Footer);
