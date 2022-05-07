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

  return (
    <nav id="menu-bar">
      <div id='menu-section-left'>
        <Link className="quiet-link" to='BooneAid/'>
          <div className='menu-button'>
            <span><Logo height={23} /></span>
            <span id='logo-text'>High Country Help</span>
          </div>
        </Link>
      </div>
      <div id='menu-section-right'>
        <Link className="quiet-link" to='BooneAid/'>
          <div className='menu-button'>
            Home
          </div>
        </Link>
        <Link className="quiet-link" to='BooneAid/services'>
          <div className='menu-button'>
            Resources
          </div>
        </Link>
      </div>
      <div id="daburger" onClick={() => setMobileMenuVisible(true)}>
        <FontAwesomeIcon icon={faBars}/>
      </div>
      {(mobileMenuVisible) && (
        <div id="mobile-menu">
          <div id="exit-mobile-menu" onClick={() => setMobileMenuVisible(false)}>X</div>
          <Link className="quiet-link" to='BooneAid/' onClick={() => setMobileMenuVisible(false)}>
            <div className='menu-button'>
              Home
            </div>
          </Link>
          <Link className="quiet-link" to='BooneAid/services' onClick={() => setMobileMenuVisible(false)}>
            <div className='menu-button'>
              Resources
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
}