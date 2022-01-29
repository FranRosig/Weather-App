import React from 'react';
import Temp from './Temp';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  function handleOnClose() {
    if(typeof onClose === "function") onClose()
  }

  return (
  <div>
    <button onClick = {handleOnClose}>X</button>
    <h2>{name}</h2>
   <Temp label= "Min" value= {min}/>
   <Temp label= "Max" value= {max}/>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />

  </div>
  )
  
};

