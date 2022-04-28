import React, {useEffect, useState} from 'react';
import './SearchControl.css';
import { getResources, getServedTypes, getSupportTypes } from '../../realdata/realdata';
import { FilterSelect } from '../FilterSelect/FilterSelect';
import FilterTile from '../FilterTile/FilterTile';

export default function SearchControl(props) {

  const [supportTypes, setSupportTypes] = useState([]);
  const [supportForTypes, setSupportForTypes] = useState([]);
  const [typeFilters, setTypeFilters] = useState(["Any Service"]);
  const [forFilters, setForFilters] = useState(["Anyone in Need"]);
  const [keywordFilter, setKeywordFilter] = useState("");

  useEffect(() => {
    signalFilterUpdate()
  }, [typeFilters, forFilters, keywordFilter]);

  function hasKeywordFilter() {
    return keywordFilter.length > 0;
  }

  function filterEmpty() {
    return (typeFilters[0] === "Any Service" && forFilters[0] === "Anyone in Need" && keywordFilter === "");
  }

  function filterObject() {
    let filterObj = {
      services: typeFilters,
      for: forFilters,
      keywordFilter: keywordFilter
    };

    return filterObj;
  }

  function signalFilterUpdate() {
    props.onFilterChanged(filterObject);
  }

  function populateSupportTypes() {
    let types = getSupportTypes();
    types.push("Any Service");
    setSupportTypes(types);
  }

  function populateSupportForTypes() {
    let types = getServedTypes();
    // anyone in need is already a type
    setSupportForTypes(types);
  }

  function handleForClicked(item) {
    let newForFilters = [...forFilters];

    if (newForFilters.includes(item))
      return;

    if (item === "Anyone in Need")
      newForFilters = [];
    else
      newForFilters = newForFilters.filter(item => item !== "Anyone in Need");

    newForFilters.push(item);
    setForFilters(newForFilters);
  }

  function handleTypeClicked(item) {
    let newTypeFilters = [...typeFilters];

    if (newTypeFilters.includes(item))
      return;

    if (item === "Any Service")
      newTypeFilters = [];
    else
      newTypeFilters = newTypeFilters.filter(item => item !== "Any Service");

    newTypeFilters.push(item);
    setTypeFilters(newTypeFilters);
  }

  function onTileClosed(name) {
    let newTypeFilters = [];
    let newForFilters = [];

    for (let item of typeFilters) {
      if (item !== name)
        newTypeFilters.push(item);
    }

    for (let item of forFilters) {
      if (item !== name)
        newForFilters.push(item);
    }

    if (newTypeFilters.length === 0)
      newTypeFilters.push("Any Service");
    
    if (newForFilters.length === 0)
      newForFilters.push("Anyone in Need");

    setForFilters(newForFilters);
    setTypeFilters(newTypeFilters);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      setKeywordFilter(event.target.value);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Backspace")
      setKeywordFilter("");
  }

  function handleClearButtonClicked() {
    setKeywordFilter("");
    setForFilters(["Anyone in Need"]);
    setTypeFilters(["Any Service"]);
  }

  useEffect(() => {
    populateSupportForTypes();
    populateSupportTypes();
  }, []);

  return (
    <div id="search-complex-container">
      <div id="search-container">
        {/* <span className="container-item" id="search-container-title">Resource Search:</span> */}
        <p>I'm Looking For:</p>
        <FilterSelect filterItems={supportTypes} filterName={"Service"} handleItemClicked={handleTypeClicked}/>
        <p>For:</p>
        <FilterSelect filterItems={supportForTypes} filterName={"Category"} handleItemClicked={handleForClicked}/>
        <p>With Keywords:</p>
        <input className="container-item" type="text" name="search" placeholder="Enter Keyword" onKeyPress={handleKeyPress} onKeyDown={handleKeyDown} required/>
        {(!filterEmpty()) && <div id="clear-search-button" onClick={handleClearButtonClicked}>Clear Search</div>}
      </div>
      <div id="filter-list-container">
        <p>Showing resources that provide: </p>
        {typeFilters.map(item => <FilterTile className="filter-list-container-item" name={item} onClose={onTileClosed}/>)}
        <p>For:</p>
        {forFilters.map(item => <FilterTile className="filter-list-container-item" name={item} onClose={onTileClosed}/>)}
        {(hasKeywordFilter()) &&
        <p>Containing Keyword: <strong>{keywordFilter}</strong></p>}
      </div>
    </div>
  );
}