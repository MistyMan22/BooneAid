import React from 'react';
import {Link} from 'react-router-dom';
import './MenuBar.css';

export default function MenuBar() {
  return (
    <nav id="menu-bar">
      <div className='menu-button'>
        <Link to='/'>Home</Link>
      </div>
      <div className='menu-button'>
        <Link to='about'>About</Link>
      </div>
      <div className='menu-button'>
        <Link to='resources'>Resources</Link>
      </div>
    </nav>
  );
}