import AnimalsData from './PersonAnimalData';
import React from 'react';
import {useState} from 'react';

export default function Guest(props){
  const [showGuest, setShowGuest] = useState(false);
  const element = props.group.map(element => {
    return <img src={AnimalsData[element]} class="icon-animals" alt={element} />
  });

 return (
  <div>
    <button className="btn-colors" onClick={() => {
      setShowGuest(!showGuest)
      setTimeout(() => {
        setShowGuest(false)
      }, 1000);
    }} >
    <div className="shadow color-icon rounded-4 m-3 link buzz-out-on-hover " style={{backgroundColor:props.color}}>
    {showGuest && element}
    </div>
    
    </button>
  </div>
 );
}