import react, {useState, useEffect} from "react";
import "./ServiceList.css";
import ServiceListItem from "../ServiceListItem/ServiceListItem";
import { getServices } from "../../realdata/realdata";

export default function ServiceList(props) {
  const [services, setServices] = useState([]);

  function populateServices() {
    setServices(getServices());
    console.log(services);
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

  return (
    <div id="resource-list">
      {filteredServices.map(s => <ServiceListItem service={s}/>)}
    </div>
  )
}