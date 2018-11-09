import React, { Component } from "react";
// import {SearchBar} from "./SearchBar";
import { withStyles } from "@material-ui/core";
import { Card, Button } from "@material-ui/core";
import './SearchBarContainer.css'

const styles = theme => ({});

class SearchBarContainer extends Component {
  render() {
    return (
      <div>
        <Card>
          <form className="search-bar">
            <label className="search-title">Ik zoek een: </label><br></br>
            <input 
              className="btn search-input"
              type="text"
              placeholder="Postcode, plaats of naam"
              onfocus="this.placeholder = ''"
            />
            <button className="btn search-btn">Zoek</button>
            <button className="btn location-btn">Gebruik mijn locatie</button>
          </form>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(SearchBarContainer);
