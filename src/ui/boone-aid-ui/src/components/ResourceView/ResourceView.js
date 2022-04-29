import react, {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getResources } from "../../realdata/realdata";
import './ResourceView.css';

export default function ResourceView(props) {
  
  const [resource, setResource] = useState({});
  let params = useParams();
  let navigate = useNavigate();

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
      <div className="back-button" onClick={() => navigate(-1)}><span>&lt;</span> Back to Search</div>
      <div className="resource-tile">
        <h1>{resource.name}</h1>
        <p>{resource.description}</p>
        <a href={resource.link}>Website</a>
        <p>{resource.phone}</p>
      </div>
    </div>
  );
}