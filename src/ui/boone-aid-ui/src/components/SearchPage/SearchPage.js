import React from "react";
import "./SearchPage.css";
import SearchControl from "../SearchControl/SearchControl";
import ResourceList from "../ResourceList/ResourceList";

export default function SearchPage() {
  return (
    <div>
      <SearchControl/>
      <ResourceList/>
    </div>
  );
}