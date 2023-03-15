import React from 'react';
import styles from './Search.module.scss';

const Search = ({ search, changeSearch, changeWords }) => {
  const fetchWord = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((res) => res.json())
      .then((data) => {
        changeWords(data);
        // console.log(data.map((word) => word));
        for (let i = 0; i < data.length; i++) {
          console.log(data[i]);
        }
      });
  };
  const handleSearch = (e) => {
    console.log(e.target.value);
    changeSearch(e.target.value);
  };
  return (
    <div className={styles.container}>
      <input type="text" onChange={(e) => handleSearch(e)} />
      <button onClick={fetchWord}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default Search;
