import react from "react";
import './ServiceListItem.css'

export default function ServiceListItem(props) {
  return (
    <div id="service-item-container">
      {props.service.name}
    </div>
  )
}