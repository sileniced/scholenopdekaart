import React, { Component } from "react";
// import {SearchBar} from "./SearchBar";
import "./SearchBarContainer.css";
import { withStyles } from "@material-ui/core";
import { Card, Button } from "@material-ui/core";

const styles = theme => ({
  searchContainer: {
    // position: relative,
    // boxSizing: 'border-box',
    // maxWidth: 930,
    // margin: 0,
    // padding: "40px 50px",
    // color: '#641c5c',
    backgroundColor: theme.palette.primary
  },
  div: {
      
  }
});

class SearchBarContainer extends Component {
  render() {
    return (
      <div>
        <Card>
          <form>
            <label>Ik zoek een: </label>
            <input
              type="text"
              placeholder="Zoek op postcode, plaats of schoolnaam"
              onfocus="this.placeholder = ''"
            />
            <Button className={this.props.searchContainer}>Zoek</Button>
            <Button>Gebruik mijn locatie</Button>
          </form>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(SearchBarContainer);
