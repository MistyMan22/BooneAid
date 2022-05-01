import React, {useState} from "react";
import "./SearchPage.css";
import SearchControl from "../SearchControl/SearchControl";
import ResourceList from "../ResourceList/ResourceList";
import { Outlet } from "react-router-dom";

export default function SearchPage() {

  const [filter, setFilter] = useState({});

  function onFilterUpdated(newFilter) {
    setFilter(newFilter);
  }

  return (
    <div>
      <SearchControl onFilterChanged={onFilterUpdated}/>
      <div id="results-container">
        <ResourceList filter={filter}/>
        <Outlet/>
      </div>
    </div>
  );
}