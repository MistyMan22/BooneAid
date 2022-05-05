import {useEffect, useState} from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getServices, getResourceByName } from "../../realdata/realdata";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import './ServiceView.css';

export default function ServiceView(props) {
  
  const [service, setService] = useState({});
  const [resource, setResource] = useState({});
  let params = useParams();
  let navigate = useNavigate();

  function getServiceData() {
    let services = getServices();
    let s = services.find(s => s.id === params.serviceid);

    if (typeof(s) !== "undefined" && s !== null) {
      setService(s);
    }
  }
  
  useEffect(() => {
    setResource(getResourceByName(service.parent));
  }, [service])

  useEffect(() => {
    getServiceData();
  }, []);

  function description() {
    if (service.description === null || typeof(service.description) === "undefined")
      return "No Description";

    return service.description.map(s => <p>{s}</p>);
  }

  function serviceTypes() {
    if (service.serviceTypes === null || typeof(service.serviceTypes) === "undefined")
      return "No Types";

    let str = "";

    for (let i = 0; i < service.serviceTypes.length; i++) {
      if (i < service.serviceTypes.length - 2)
        str += (service.serviceTypes[i] + ", ");
      else if (i === service.serviceTypes.length - 2) { 
        const firstChar = service.serviceTypes.length === 2 ? "" : ",";
        str += (service.serviceTypes[i] + firstChar + " and ");
      }
      else
        str += service.serviceTypes[i];
    }

    return str;
  }

  function serviceFors() {
    if (service.for === null || typeof(service.for) === "undefined")
      return "No Types";
    
    let str = "";

    for (let i = 0; i < service.for.length; i++) {
      if (i < service.for.length - 2)
        str += (service.for[i] + ", ");
      else if (i === service.for.length - 2) { 
        const firstChar = service.for.length === 2 ? "" : ",";
        str += (service.for[i] + firstChar + " and ");
      }
      else
        str += service.for[i];
    }

    return str;
  }

  function getResource() {
    if (resource === null || typeof(resource) === "undefined")
      return {name: "", url: "", phone: ""};

    return resource;
  }

  return (
    <div>
      <div className="service-tile">
        <div className="back-button" onClick={() => navigate(-1)}><span><FontAwesomeIcon id="back-caret" icon={faCaretLeft}/></span> Back</div>
        <h1 className="align-left">{service.name}</h1>
        <a href={"http://" + getResource().url} id="website-button" target="_blank">
          Visit Website
        </a>
        <span>{getResource().phone}</span>
        <h3 className="align-left">Organization</h3>
        <a href={"http://" + getResource().url} target="_blank">{getResource().name}</a>
        <br/>
        <h3 className="align-left">Details</h3>
         {description()}
        <h3 className="align-left">Service Description</h3>
        <span>This service provides </span>
        <em>{serviceTypes()}</em>
        <span><em> for </em></span>
        <em>{serviceFors()}</em>
      </div>
    </div>
  );
}