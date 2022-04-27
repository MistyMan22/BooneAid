import react from 'react';
import './FilterTile.css';

export default function FilterTile(props) {
  return (
    <div className='filter-tile'>
      <span className='name-section'>{props.name}</span>
      {(props.name !== "Any Service" && props.name !== "Anyone in Need") &&
        <span className='close' onClick={() => props.onClose(props.name)}>x</span>
      }
    </div>
  )
}