import React from "react";
import "./SearchPage.css";
import SearchControl from "../SearchControl/SearchControl";
import ResourceList from "../ResourceList/ResourceList";
import { Outlet } from "react-router-dom";

export default function SearchPage() {
  return (
    <div>
      <SearchControl/>
      <ResourceList/>
      <Outlet/>
    </div>
  );
}