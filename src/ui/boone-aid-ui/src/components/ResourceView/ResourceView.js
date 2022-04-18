import react, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { getResourcesFromDatabase } from "../../dummydata/PseudoApi";
import './ResourceView.css';

export default function ResourceView(props) {
  
  const [resource, setResource] = useState({});
  let params = useParams();

  function getResourceData() {
    let resources = JSON.parse(getResourcesFromDatabase());
    let r = resources.find(resource => resource.id === params.resourceid);

    if (typeof(r) !== "undefined" && r !== null)
      setResource(r);

    console.log(resources);
    console.log(params.resourceid);
  }

  useEffect(() => {
    getResourceData();
  }, []);


  return (
    <div>
      <h1>{resource.name}</h1>
      <p>{resource.description}</p>
      <a href={resource.link}>Website</a>
      <p>{resource.phone}</p>
    </div>
  );
}