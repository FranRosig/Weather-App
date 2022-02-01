import React from 'react';
import styles from "./SearchBar.module.css"

export default function SearchBar({ onSearch }) {

  function handleOnSearch (e) {
    e.preventDefault();
    if(typeof onSearch === "function"){
      const input = document.getElementById("search")
      onSearch(input.value)
      input.value = ""
    }
  }

  return (
    <form className={styles.search_box} onSubmit={handleOnSearch}>
      <input className={styles.search_input} id="search" autoComplete='off' type="text" placeholder='Search...'/>
    </form>
  );
};