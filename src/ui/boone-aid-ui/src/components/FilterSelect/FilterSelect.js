import react, {useState} from "react";
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

  return (
    <div className="container-div" onMouseLeave={handleMouseLeave}>
      <div className="filter-container-box" onClick={handleClick}>
        <span className="filter-name">{props.filterName}</span>
        <span className="caret-icon"><FontAwesomeIcon icon={faCaretDown} /></span>
      </div>
      {
        (itemsVisible) && 
        <div className="filter-items">
          <ul>
            {props.filterItems.map(item => <li onClick={() => {
              props.handleItemClicked(item);
              setItemsVisible(false);
            }}>{item}</li>)}
          </ul>
        </div>
      }
      
    </div>
    
  )
}