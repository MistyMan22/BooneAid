import react from "react";
import {Link} from 'react-router-dom';
import './ResourceListItem.css';
import {ReactComponent as Logo} from '../../images/Logo.svg'

export default function ResourceListItem(props) {
  return (
    <Link to={props.resource.id} nClick={() => window.location.reload()}>
      <div className="resource-list-item">
        <Logo id="placeholder-logo" stroke="black"/>
        <p className="item-name">{props.resource.name}</p>
        <p className="item-description">{props.resource.description}</p>
      </div>
    </Link>
  );
}