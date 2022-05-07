import react from "react";
import { Link } from "react-router-dom";
import './ServiceListItem.css'

export default function ServiceListItem(props) {
  return (
    <Link to={props.service.id} className="service-list-tile quiet-link">
      <div className="service-item-container">
        <p className="zero-tb-margin"><strong>{props.service.name}</strong></p>
        <p className="zero-tb-margin">{" " + props.service.parent}</p>
      </div>
    </Link>
  )
}