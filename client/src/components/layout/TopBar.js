import React, {Component } from 'react'
import './TopBar.css'

export default class TopBar extends Component {
  render() {
    return (
      <div>
        <img className="logo" src="https://www.scholenopdekaart.nl/Images/logo_sodk@3x.png" alt="logo"></img>
      </div>
    )
  }
}