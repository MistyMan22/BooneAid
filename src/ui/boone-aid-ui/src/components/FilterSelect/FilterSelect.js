import react, {useState, useEffect} from "react";
import './FilterSelect.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export function FilterSelect(props) {

  const [itemsVisible, setItemsVisible] = useState(false);

  function handleClick() {
    setItemsVisible(!itemsVisible);
  }

  function handleMouseLeave() {
    setItemsVisible(false);
  }

  function getDropdownTopPosition() {
    let dd = document.getElementById("filter-container-box-" + props.uid);
    let rect = dd.getBoundingClientRect();
    return rect.bottom;
  }

  return (
    <div className="container-div" onMouseLeave={handleMouseLeave}>
      <div className="filter-container-box" id={"filter-container-box-" + props.uid} onClick={handleClick}>
        <span className="filter-name">{props.filterName}</span>
        <span className="caret-icon"><FontAwesomeIcon icon={faCaretDown} /></span>
      </div>
      {
        (itemsVisible) && 
        <div id="filter-items" style={{top: getDropdownTopPosition()}}>
          <ul>
            {props.filterItems.map(item => <li key={item.id} onClick={() => {
              props.handleItemClicked(item.data);
              setItemsVisible(false);
            }}>{item.data}</li>)}
          </ul>
        </div>
      }
      
    </div>
    
  )
}