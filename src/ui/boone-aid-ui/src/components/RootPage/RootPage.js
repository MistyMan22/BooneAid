import React from "react";
import './RootPage.css';
import MenuBar from "../MenuBar/MenuBar";
import ContentContainer from "../ContentContainer/ContentContainer";

export default function RootPage() {
  return (
    <div className="root-page">
      <MenuBar/>
      <ContentContainer/>
    </div>
  );
}