import React from "react";
import { Card, Button } from "@material-ui/core";



export const SearchBar = props => {
  return (
    <div>
      <Card>
        <form >
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
};

