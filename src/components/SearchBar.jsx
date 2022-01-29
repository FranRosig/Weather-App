import React from 'react';

export default function SearchBar({onSearch}) {

  function handleOnSearch () {
    if(typeof onSearch === "function"){
      const input = document.getElementById("search")
      onSearch(input.value)

    }
  }


  
  // acá va tu código
  return <div>
    <input id="search" type="text" />
    <button onClick={handleOnSearch}>Agregar</button>
  </div>
};