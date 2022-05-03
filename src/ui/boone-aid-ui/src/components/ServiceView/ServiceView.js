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

    return service.serviceTypes.map(t => <em>{t + ", "}</em>);
  }

  function serviceFors() {
    if (service.for === null || typeof(service.for) === "undefined")
      return "No Types";
    
    return service.for.map(t => <em>{t + ", "}</em>);
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
        <h3 className="align-left">Organization</h3>
          <a href={"http://" + getResource().url}>{getResource().name}</a>
        <h3 className="align-left">Details</h3>
         {description()}
        <h3 className="align-left">Service Description</h3>
        <span>This service provides </span>
          {serviceTypes()}
        <span>For </span>
          {serviceFors()}
      </div>
    </div>
  );
}