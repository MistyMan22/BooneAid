import react, {useState, useEffect} from "react";
import './ResourceList.css'
import ResourceListItem from "../ResourceListItem/ResourceListItem";
import {getResourcesFromDatabase, getAgeRangesFromDatabase, getGendersFromDatabase} from '../../dummydata/PseudoApi';

export default function ResourceList() {
  const [resources, setResources] = useState([]);

  function populateResources() {
    setResources(JSON.parse(getResourcesFromDatabase()));

    console.log(getResourcesFromDatabase());
    console.log(getAgeRangesFromDatabase());
    console.log(getGendersFromDatabase());
  }

  useEffect(() => {
    populateResources();
  }, []);

  return (
      resources.map(resource => <ResourceListItem resource={resource} key={resource.id}/>)
  );
}