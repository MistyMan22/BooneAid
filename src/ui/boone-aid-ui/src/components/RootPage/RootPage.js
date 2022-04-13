import React from "react";
import './RootPage.css'
import MenuBar from "../MenuBar/MenuBar";

export default function RootPage() {
  return (
    <div className="root-page">
      <MenuBar/>
      <header className="root-header">
        Welcome to Boone-Aid
      </header>
    </div>
  );
}