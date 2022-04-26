import React from "react";
import { Link } from "react-router-dom";
import './HomePage.css'

export default function HomePage() {
  return (
    <div id='home-page'>
      <div id='main-display'>
        <img src={require('../../images/Viaduct.png')} alt='price lake'/>
        <div id="hero">
          <p id='display-text'>Welcome to BooneAid</p>
          <p id='secondary-text'>A free tool for connecting those in need in the Boone area with resources that can help</p>
          <Link to='../resources' id='resource-button'>
            Search Resources
          </Link>
        </div>
      </div>
    </div>
  );
}