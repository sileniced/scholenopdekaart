import React from "react";
import { Card } from "@material-ui/core";
import { Link } from "react-router-dom";

export const SearchBar = props => {
  return (
    <div>
      <Card>
        <form className="search-bar">
          <label className="search-title">Ik zoek een: </label>
          <input
            className="search-input"
            type="text"
            placeholder="Zoek op postcode, plaats of schoolnaam"
            onfocus="this.placeholder = ''"
          />
          <Link to="/search-result">
            <button className="search-btn">Zoek</button>
          </Link>
          <button>Gebruik mijn locatie</button>
        </form>
      </Card>
    </div>
  );
};
