import react, {useState, useEffect} from "react";
import './ResourceList.css'
import ResourceListItem from "../ResourceListItem/ResourceListItem";
import { getResources } from "../../realdata/realdata";

export default function ResourceList(props) {
  const [resources, setResources] = useState([]);

  function populateResources() {
    setResources(getResources());
  }

  useEffect(() => {
    populateResources();
  }, []);

  function passesFilter(resource, filter) {
    console.log("filtering")
    if (typeof(filter.for) === "undefined")
      return true;

    if (!filter.services.includes("Any Service")) {
      let hasAFilteredService = false;
      for (let service of filter.services) {
        if (resource.services.includes(service))
          hasAFilteredService = true;
      }
      if (!hasAFilteredService)
        return false;
    }

    if (!filter.for.includes("Anyone in Need")) {
      let hasAFilteredFor = false;
      for (let fr of filter.for) {
        if (resource.for.includes(fr))
        hasAFilteredFor = true;
      }
      if (!hasAFilteredFor)
        return false;
    }

    if (!filter.keyword === "") {
      if (!resource.name.includes(filter.keyword))
        return false;
    }

    return true;
  }

  function doit() {
    console.log("in list");
    return resources.filter(r => passesFilter(r, props.filter));
  }
  const filteredResources = doit();

  return (
    <div id="resource-list">
      {filteredResources.map(r => <ResourceListItem resource={r}/>)}
    </div>
  );
}