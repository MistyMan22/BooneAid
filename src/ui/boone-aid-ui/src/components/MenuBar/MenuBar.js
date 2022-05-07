import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './MenuBar.css';
import {ReactComponent as Logo} from '../../images/Logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function MenuBar() {

  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  function toggleMobileMenu() {
    setMobileMenuVisible(!mobileMenuVisible);
  }

  const homeLink = (
        <Link className="quiet-link" to='/'>
          <div className='menu-button'>
            Home
          </div>
        </Link>
  )

  const resourcesLink = (
    <Link className="quiet-link" to='services'>
      <div className='menu-button'>
        Resources
      </div>
    </Link>
  )

  return (
    <nav id="menu-bar">
      <div className='menu-section'>
        <Link className="quiet-link" to='/'>
          <div className='menu-button'>
            <span><Logo/></span>
            <span id='logo-text'>BooneAid</span>
          </div>
        </Link>
      </div>
      <div id='menu-section'>
        {homeLink}
        {resourcesLink}
      </div>
      <div id="daburger" onClick={() => setMobileMenuVisible(true)}>
        <FontAwesomeIcon icon={faBars}/>
      </div>
      {(mobileMenuVisible) && (
        <div id="mobile-menu">
          <div id="exit-mobile-menu" onClick={() => setMobileMenuVisible(false)}>X</div>
          {homeLink}
          {resourcesLink}
        </div>
      )}
    </nav>
  );
}