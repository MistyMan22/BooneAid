import React from 'react';
import {Link} from 'react-router-dom';
import './MenuBar.css';
import {ReactComponent as Logo} from '../../images/Logo.svg'

export default function MenuBar() {
  return (
    <nav id="menu-bar">
      <div className='menu-section'>
        <Link to='/'>
          <div className='menu-button'>
            <span><Logo/></span>
            <span id='logo-text'>BooneAid</span>
          </div>
        </Link>
      </div>
      <div className='menu-section'>
        <Link to='/'>
          <div className='menu-button'>
            Home
          </div>
        </Link>
        <Link to='services'>
          <div className='menu-button'>
            Resources
          </div>
        </Link>
      </div>
    </nav>
  );
}