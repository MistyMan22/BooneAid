import React from "react";
import { Link } from "react-router-dom";
import './HomePage.css'
import {ReactComponent as Logo} from '../../images/Logo.svg'

export default function HomePage() {
  return (
    <div id='home-page'>
      <div id='main-display'>
        <div id="hero">
          <Logo className="hero-logo" stroke="black" width={300} height={120}/>
          <p id='display-text'>Welcome to High Country Help</p>
          <p id='secondary-text'>A <strong>free</strong> tool for connecting people in need with resources that can help</p>
          <Link to='../services' id='resource-button'>
            Search Resources
          </Link>
          <p id='tertiary-text'> Serving Ashe, Avery, and Watauga Counties</p>
        </div>
      </div>
    </div>
  );
}