import react from "react";
import {Link} from 'react-router-dom';
import './ResourceListItem.css';

export default function ResourceListItem(props) {
  return (
    <Link to={props.resource.id}>
      <div className="resource-list-item">
        <header className="resource-list-item-header">
          {props.resource.name}
        </header>
      </div>
    </Link>
  );
}