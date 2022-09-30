import data from '../data/groupsInfo.json';
import OrganizationParty from '../classes/OrganizationParty';
import Color from './Color';
import React from 'react';
import {useEffect, useState} from 'react';

export default function Guests(){
 const [components, setComponents] = useState(0);

  useEffect(() => {
    const newInstance = new OrganizationParty(data);
    const information = newInstance.getFinalFormat()

    function generateColors(information) {
      setComponents(information.map((color, index) => {
       return <Color key={index} {...color}/>
      }));
    }
    generateColors(information);
  }, []);
  
 return (
  <div className="colors-container d-flex flex-wrap mt-5 justify-content-center align-items-center">
   {components}
  </div>
 );
}