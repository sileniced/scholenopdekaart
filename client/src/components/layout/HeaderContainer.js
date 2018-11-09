import React, { Component } from "react";
import SearchBarContainer from "../search/SearchBarContainer";
import './HeaderContainer.css'

export default class HeaderContainer extends Component {
  render() {
    return(
        <div className="header-container" position='static' >
        <div className="layer">
        <h1>Vind en vergelijk scholen bij jou in de buurt</h1>
        </div>
            <SearchBarContainer />

        </div>
    )
  }
}