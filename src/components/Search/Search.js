import React from 'react';
import styles from './Search.module.scss';

const Search = ({ search, changeSearch, changeWords, toggleError }) => {
  const fetchWord = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((res) => res.json())
      .then((data) => {
        changeWords(data);
        if (data.message) {
          toggleError(true);
          return;
        }
        toggleError(false);
        // for (let i = 0; i < data.length; i++) {
        //   console.log(data[i]);
        // }
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWord();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => handleSearch(e)}>
        <input type="text" onChange={(e) => changeSearch(e.target.value)} />
        <button type="submit" onClick={handleSearch}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
