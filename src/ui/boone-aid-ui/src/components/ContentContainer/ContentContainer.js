import React from 'react'
import './ContentContainer.css';
import SearchControl from '../SearchControl/SearchControl';

export default function ContentContainer() {
  return (
    <div id="content-container">
      {/* Will contain routes for different pages, like
        - search page
        - active resource page
        - about page
        - etc */}
      <SearchControl/>
      <header className="root-header">
        Welcome to Boone-Aid
      </header>
    </div>
  )
}