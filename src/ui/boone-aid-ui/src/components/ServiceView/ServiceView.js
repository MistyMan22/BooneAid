import {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getServices } from "../../realdata/realdata";
import './ServiceView.css';

export default function ServiceView(props) {
  
  const [service, setService] = useState({});
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

    return service.serviceTypes.map(t => <li>{t}</li>);
  }

  function serviceFors() {
    if (service.for === null || typeof(service.for) === "undefined")
      return "No Types";
    
    return service.for.map(t => <li>{t}</li>);
  }

  return (
    <div>
      <div className="back-button" onClick={() => navigate(-1)}>Back to Search</div>
      <div className="service-tile">
        <h1>{service.name}</h1>
         {description()}
        <p>Provides:</p>
        <ul>
          {serviceTypes()}
        </ul>
        <p>For:</p>
        <ul>
          {serviceFors()}
        </ul> 
      </div>
    </div>
  );
}