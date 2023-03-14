import React from 'react';
import styles from './Search.module.scss';

const Search = ({ search, changeSearch, changeWord }) => {
  const fetchWord = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((res) => res.json())
      .then((data) => {
        changeWord(data);
        console.log(data);
      });
  };
  const handleSearch = (e) => {
    console.log(e.target.value);
    changeSearch(e.target.value);
  };
  return (
    <div className={styles.container}>
      <input type="text" onChange={(e) => handleSearch(e)} />
      <button onClick={fetchWord}>Search</button>
    </div>
  );
};

export default Search;
