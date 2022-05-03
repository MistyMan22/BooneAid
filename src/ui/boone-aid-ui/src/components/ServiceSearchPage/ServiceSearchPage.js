import React, {useState} from "react";
import "./ServiceSearchPage.css";
import ServiceSearchControl from "../ServiceSearchControl/ServiceSearchControl";
import ServiceList from "../ServiceList/ServiceList";
import { Outlet } from "react-router-dom";

export default function ServiceSearchPage() {

  const [filter, setFilter] = useState({});

  function onFilterUpdated(newFilter) {
    setFilter(newFilter);
  }

  return (
    <div>
      <ServiceSearchControl onFilterChanged={onFilterUpdated}/>
      <ServiceList filter={filter}/>
    </div>
  );
}