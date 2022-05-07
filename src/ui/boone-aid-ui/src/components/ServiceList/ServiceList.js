import react, {useState, useEffect} from "react";
import "./ServiceList.css";
import ServiceListItem from "../ServiceListItem/ServiceListItem";
import { getServices } from "../../realdata/realdata";
import { filter } from "async";

export default function ServiceList(props) {
  const [services, setServices] = useState([]);

  function populateServices() {
    setServices(getServices());
  }

  useEffect(() => {
    populateServices();
  }, []);

  function passesFilter(service, filter) {
    if (typeof(filter.for) === "undefined")
      return true;

    if (!filter.services.includes("Any Service")) {
      let hasAFilteredService = false;
      for (let fService of filter.services) {
        if (typeof(service.serviceTypes) === "undefined")
          console.log(service + " has undefined service types");

        if (service.serviceTypes.includes(fService))
          hasAFilteredService = true;
      }

      if (!hasAFilteredService)
        return false;
    }

    if (!filter.for.includes("Anyone in Need")) {
      let hasAFilteredFor = false;
      for (let fr of filter.for) {
        if (service.for.includes(fr))
        hasAFilteredFor = true;
      }
      if (!hasAFilteredFor)
        return false;
    }

    if (filter.keywordFilter !== "") {
      if (!service.name.toLowerCase().includes(filter.keywordFilter.toLowerCase()))
        return false;
    }

    return true;
  }

  function getFilteredServices() {
    return services.filter(s => passesFilter(s, props.filter));
  }

  const filteredServices = getFilteredServices();

  function getFoldedList() {
    let result = [];

    for (let i = 0; i < filteredServices.length; i+=2) {
      let leftService = filteredServices[i];
      let rightService = i + 1 < filteredServices.length ? filteredServices[i+1] : null;
      result.push({left: leftService, right: rightService});
    }

    return result;
  }

  const foldedList = getFoldedList();

  function servicesFromFilter() {
    if (props.filter.services === null || typeof(props.filter.services) === "undefined")
      return [""];

    return props.filter.services;
  }

  function forsFromFilter() {
    if (props.filter.for === null || typeof(props.filter.for) === "undefined")
      return [""];

    return props.filter.for;
  }

  return (
    <div id="resource-list">
      {filteredServices.map((item) => (<ServiceListItem key={item.id} service={item}/>))}
      {(filteredServices.length === 0) && 
      <p id="none-found-text"><strong>
        No services found with <em>{servicesFromFilter()[0]}</em> for <em>{forsFromFilter()[0]}</em>
        </strong></p>}
    </div>
  )
}