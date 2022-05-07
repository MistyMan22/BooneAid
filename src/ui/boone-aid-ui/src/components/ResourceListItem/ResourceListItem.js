import react from "react";
import {Link} from 'react-router-dom';
import './ResourceListItem.css';

export default function ResourceListItem(props) {
  return (
    <Link to={props.resource.id}>
      <div className="resource-list-item">
        <p className="item-name">{props.resource.name}</p>
        <p className="item-description">{props.resource.description}</p>
      </div>
    </Link>
  );
}