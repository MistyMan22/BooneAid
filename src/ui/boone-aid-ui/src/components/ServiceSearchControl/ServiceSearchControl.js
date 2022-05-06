import React, {useEffect, useState} from 'react';
import './ServiceSearchControl.css';
import { getServedTypes, getServices, getSupportTypes } from '../../realdata/realdata';
import { useSearchParams } from 'react-router-dom';
import { FilterSelect } from '../FilterSelect/FilterSelect';
import FilterTile from '../FilterTile/FilterTile';
import qs from 'query-string'

export default function ServiceSearchControl(props) {

  const [supportTypes, setSupportTypes] = useState([]);
  const [supportForTypes, setSupportForTypes] = useState([]);
  const [filters, setFilters] = useSearchParams();
  const [keyword, setKeyword] = useState("");
  const [displayedSupportTypes, setDisplayedSupportTypes] = useState([]);
  const [displayedForTypes, setDisplayedForTypes] = useState([]);

  useEffect(() => {
    signalFilterUpdate();
  }, [filters]);


  useEffect(() => {
    populateSupportForTypes();
    populateSupportTypes();
    setKeyword(getKeywordFilter());
  }, []);

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
    setDisplayedSupportTypes(types);
  }

  function populateSupportForTypes() {
    let types = getServedTypes();
    // anyone in need is already a type
    setSupportForTypes(types);
    setDisplayedForTypes(types);
  }

  function handleForClicked(item) {
    setForFilters(arrayToParamString([item]));
  }

  function handleTypeClicked(item) {
    setTypeFilters(arrayToParamString([item]));
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
    setDisplayedForTypes(supportForTypes);
    setDisplayedSupportTypes(supportTypes);
    setKeyword("");
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  function filteredSupportTypes() {
    let fors = getForFilters()
    console.log("?")
    if (fors[0] === "Anyone in Need")
      return supportTypes;

    let services = getServices();
    let fst = [{data: "Any Service", id: 0}];
    let i = 1; 

    for (let service of services) {
      if (service.for.includes(fors[0])) {
        for (let type of service.serviceTypes) {
          let obj = {data: type, id: i++};
          if (fst.filter(o => o.data === type).length === 0)
            fst.push(obj);
        }
      }
    }

    console.log(fst.toString())

    return fst;
  }

  function filteredFors() {
    let types = getTypeFilters();
    if (types[0] === "Any Service")
      return supportForTypes;

    let services = getServices();
    let ff = [{data: "Anyone in Need", id: 0}];
    let i = 1;

    for (let service of services) {
      if (service.serviceTypes.includes(types[0])) {
        for (let f of service.for) {
          let obj = {data: f, id: i++};
          if (ff.filter(o => o.data === f).length === 0)
            ff.push(obj);
        }
      }
    }

    console.log(ff.toString());

    return ff;
  }

  return (
    <div id="search-complex-container">
      <div id="search-container">
        <p>I'm Looking For:</p>
        <FilterSelect filterItems={displayedSupportTypes} filterName={getTypeFilters()[0]} handleItemClicked={handleTypeClicked}/>
        <p>For:</p>
        <FilterSelect filterItems={displayedForTypes} filterName={getForFilters()[0]} handleItemClicked={handleForClicked}/>
        <p>With Keyword:</p>
        <input className="container-item" type="text" name="search" placeholder="Enter Keyword" value={keyword} onKeyPress={handleKeyPress} onKeyDown={handleKeyDown} onChange={updateKeyword} required/>
        {(!filterEmpty()) && <div id="clear-search-button" onClick={handleClearButtonClicked}>Clear Search</div>}
      </div>
    </div>
  );
}