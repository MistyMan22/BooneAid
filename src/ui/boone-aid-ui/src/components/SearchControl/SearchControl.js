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
    <div id="search-control">
      <div id="search-box-container">
        <span id="search-label">Search </span>
        <input type="text" id="search" name="search" required/>
      </div>
      <div id="filter-container">
        <div className="select-container">
          <label className="select-label">Gender </label>
          <select className="filter-select" id="gender-select" name="gender">
            {genders.map((gender) => (<option key={gender.id}>{gender.name}</option>))}
          </select>
        </div>
        <div className="select-container">
          <label className="select-label">Age </label>
          <select className="filter-select" id="age-select" name="age">
            {ageRanges.map((age) => (<option key={age.id}>{age}</option>))}
          </select>
        </div>
      </div>
    </div>
  );
}