import react, {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";
import { getResources } from "../../realdata/realdata";
import './ResourceView.css';

export default function ResourceView(props) {
  
  const [resource, setResource] = useState({});
  let params = useParams();

  function getResourceData() {
    let resources = getResources();
    let r = resources.find(resource => resource.id === params.resourceid);

    if (typeof(r) !== "undefined" && r !== null)
      setResource(r);
  }

  useEffect(() => {
    getResourceData();
  }, []);


  return (
    <div>
      <Link className="back-button" to='../resources'><span>&lt;</span> Back to Search</Link>
      <div className="resource-tile">
        <h1>{resource.name}</h1>
        <p>{resource.description}</p>
        <a href={resource.link}>Website</a>
        <p>{resource.phone}</p>
      </div>
    </div>
  );
}