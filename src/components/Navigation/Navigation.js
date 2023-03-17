import React, { useState } from 'react';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const [darkTheme, toggleTheme] = useState(true);

  const handleSelect = (e) => {
    document.documentElement.style.setProperty('--font', e.target.value);
    console.log(e.target.value);
  };

  const themeSwitch = () => {
    if (darkTheme) {
      toggleTheme(false);
      document.documentElement.style.setProperty('--background', 'white');
      document.documentElement.style.setProperty('--font-color', 'black');
      document.documentElement.style.setProperty('--logo-color', 'gray');
      document.documentElement.style.setProperty('--input-color', '#f4f5f5');
      document.documentElement.style.setProperty('--select-color', 'light');
    } else {
      toggleTheme(true);
      document.documentElement.style.setProperty('--background', 'black');
      document.documentElement.style.setProperty('--font-color', 'white');
      document.documentElement.style.setProperty('--logo-color', '#a943f7');
      document.documentElement.style.setProperty('--input-color', '#1e1f1e');
      document.documentElement.style.setProperty('--select-color', 'dark');
    }
  };

  return (
    <nav className={styles.container}>
      <div className={styles.logoContainer}>
        <i className="fa-solid fa-book"></i>
      </div>
      <div className={styles.right}>
        <select onChange={(e) => handleSelect(e)}>
          <option value="serif">Serif</option>
          <option value="sans-serif">Sans Serif</option>
          <option value="monospace">Mono</option>
        </select>
        <label className={styles.themeSwitch}>
          <input
            type="checkbox"
            checked={darkTheme}
            onChange={themeSwitch}
          ></input>
          asdsad
          <span className={styles.slider}></span>
        </label>
      </div>
    </nav>
  );
};

export default Navigation;
