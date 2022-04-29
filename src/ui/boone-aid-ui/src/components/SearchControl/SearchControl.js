import React, {useEffect, useState} from 'react';
import './SearchControl.css';
import { getServedTypes, getSupportTypes } from '../../realdata/realdata';
import { useSearchParams } from 'react-router-dom';
import { FilterSelect } from '../FilterSelect/FilterSelect';
import FilterTile from '../FilterTile/FilterTile';
import qs from 'query-string'

export default function SearchControl(props) {

  const [supportTypes, setSupportTypes] = useState([]);
  const [supportForTypes, setSupportForTypes] = useState([]);
  const [filters, setFilters] = useSearchParams();
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    signalFilterUpdate();
  }, [filters]);

  function hasKeywordFilter() {
    return getKeywordFilter().length > 0;
  }

  function getKeywordFilter() {
    let kwf = filters.get("keywordFilter");

    if (kwf === null || typeof(kwf) === "undefined")
      return "";

    return kwf;
  }

  function getTypeFilters() {
    let tf = filters.get("typeFilters");

    if (tf === null || typeof(tf) === "undefined")
      return ["Any Service"];

    let parsed = tf.split(',');
    return parsed;
  }

  function getForFilters() {
    let ff = filters.get("forFilters");

    if (ff === null || typeof(ff) === "undefined")
      return ["Anyone in Need"];

    let parsed = ff.split(',');
    return parsed;
  }

  function setTypeFilters(f) {
    let parsed = qs.parse(filters.toString())
    setFilters({
      ...parsed,
      typeFilters: f
    });
  }

  function setForFilters(f) {
    let parsed = qs.parse(filters.toString())
    setFilters({
      ...parsed,
      forFilters: f
    });
  }

  function setKeywordFilter(f, updateInput) {
    let parsed = qs.parse(filters.toString())
    setFilters({
      ...parsed,
      keywordFilter: f
    });
    
    if (updateInput)
      setKeyword(f);
  }

  function arrayToParamString(arr) {
    let str = "";
    arr.map(item => str += (item.toString() + ','));
    str = str.slice(0, -1);  // get rid of the extraneous comma
    return str;
  }

  function filterEmpty() {
    return (getTypeFilters()[0] === "Any Service" && getForFilters()[0] === "Anyone in Need" && getKeywordFilter() === "");
  }

  function filterObject() {
    let filterObj = {
      services: getTypeFilters(),
      for: getForFilters(),
      keywordFilter: getKeywordFilter()
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
    let newForFilters = [...getForFilters()];

    if (newForFilters.includes(item))
      return;

    if (item === "Anyone in Need")
      newForFilters = [];
    else
      newForFilters = newForFilters.filter(item => item !== "Anyone in Need");

    newForFilters.push(item);
    setForFilters(arrayToParamString(newForFilters));
  }

  function handleTypeClicked(item) {
    let newTypeFilters = [...getTypeFilters()];

    if (newTypeFilters.includes(item))
      return;

    if (item === "Any Service")
      newTypeFilters = [];
    else
      newTypeFilters = newTypeFilters.filter(item => item !== "Any Service");

    newTypeFilters.push(item);
    setTypeFilters(arrayToParamString(newTypeFilters));
  }

  function onTypeTileClosed(name) {
    let newTypeFilters = [];

    for (let item of getTypeFilters()) {
      if (item !== name)
        newTypeFilters.push(item);
    }

    if (newTypeFilters.length === 0)
      newTypeFilters.push("Any Service");
    
    setTypeFilters(arrayToParamString(newTypeFilters));
  }

  function onForTileClosed(name) {
    let newForFilters = [];

    for (let item of getForFilters()) {
      if (item !== name)
        newForFilters.push(item);
    }
    
    if (newForFilters.length === 0)
      newForFilters.push("Anyone in Need");

    setForFilters(arrayToParamString(newForFilters));
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      setKeywordFilter(event.target.value);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Backspace")
      setKeywordFilter("", false);
  }

  function handleClearButtonClicked() {
    setFilters({keywordFilter: "", forFilters: "Anyone in Need", typeFilters: "Any Service"});
    setKeyword("");
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  useEffect(() => {
    populateSupportForTypes();
    populateSupportTypes();
    setKeyword(getKeywordFilter());
  }, []);

  return (
    <div id="search-complex-container">
      <div id="search-container">
        <p>I'm Looking For:</p>
        <FilterSelect filterItems={supportTypes} filterName={"Service"} handleItemClicked={handleTypeClicked}/>
        <p>For:</p>
        <FilterSelect filterItems={supportForTypes} filterName={"Category"} handleItemClicked={handleForClicked}/>
        <p>With Keywords:</p>
        <input className="container-item" type="text" name="search" placeholder="Enter Keyword" value={keyword} onKeyPress={handleKeyPress} onKeyDown={handleKeyDown} onChange={updateKeyword} required/>
        {(!filterEmpty()) && <div id="clear-search-button" onClick={handleClearButtonClicked}>Clear Search</div>}
      </div>
      <div id="filter-list-container">
        <p>Showing resources that provide: </p>
        {getTypeFilters().map(item => <FilterTile className="filter-list-container-item" name={item} onClose={onTypeTileClosed}/>)}
        <p>For:</p>
        {getForFilters().map(item => <FilterTile className="filter-list-container-item" name={item} onClose={onForTileClosed}/>)}
        {(hasKeywordFilter()) &&
        <p>Containing Keyword: <strong>{getKeywordFilter()}</strong></p>}
      </div>
    </div>
  );
}