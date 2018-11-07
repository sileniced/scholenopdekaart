import React, { Component } from "react";
// import {SearchBar} from "./SearchBar";
import { withStyles } from "@material-ui/core";
import { Card, Button } from "@material-ui/core";

const styles = theme => ({});

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
            <Button>Zoek</Button>
            <Button>Gebruik mijn locatie</Button>
          </form>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(SearchBarContainer);
