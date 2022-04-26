import React, {useEffect, useState} from 'react';
import './SearchControl.css';
import { getAgeRangesFromDatabase, getGendersFromDatabase } from '../../dummydata/PseudoApi';

export default function SearchControl() {
  const [ageRanges, setAgeRanges] = useState([]);
  const [genders, setGenders] = useState([]);

  function populateAgeRanges() {
    setAgeRanges(JSON.parse(getAgeRangesFromDatabase()));
  }

  function populateGenders() {
    setGenders(JSON.parse(getGendersFromDatabase()));
  }

  useEffect(() => {
    populateAgeRanges();
    populateGenders();
  }, []);

  return (
    <div id="search-container">
      <span className="container-item">Search Resources</span>
      <select className="container-item">
        <option>Select Filter</option>
      </select>
      <input className="container-item" type="text" name="search" required/>
    </div>
  );
}