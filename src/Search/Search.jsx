import React, { useState } from "react";
import styles from './Search.module.css';
import { ReactComponent as SearchIcon } from "./Searchicon.svg";

function Search({ setSearchQuery }) {
  const [searchValue, setSearchValue] = useState('');

  const placeholder = "Search Mountain, Flowers, Beaches, Cities";

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setSearchQuery(searchValue); 
    console.log("Hey, I am Submitted");
  };

  return (
    <form className={styles.searchContainer} onSubmit={onSubmitHandler}>
      <input
        className={styles.search}
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder={placeholder}
      />
      <button className={styles.searchButton} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}

export default Search;
