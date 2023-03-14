import React from 'react';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.container}>
      <div>logo</div>
      <div className={styles.right}>
        <div>dropdown font</div>
        <div>theme switcher</div>
      </div>
    </nav>
  );
};

export default Navigation;
