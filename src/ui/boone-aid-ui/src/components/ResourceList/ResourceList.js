import react, {useState, useEffect} from "react";
import './ResourceList.css'
import ResourceListItem from "../ResourceListItem/ResourceListItem";
import {getResourcesFromDatabase} from '../../dummydata/PseudoApi';

export default function ResourceList() {
  const [resources, setResources] = useState([]);

  function populateResources() {
    setResources(JSON.parse(getResourcesFromDatabase()));
  }

  useEffect(() => {
    populateResources();
  }, []);

  return (
      resources.map(resource => <ResourceListItem resource={resource} key={resource.id}/>)
  );
}