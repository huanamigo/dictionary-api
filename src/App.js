import { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Search from './components/Search/Search';
import Word from './components/Word/Word';
import styles from './App.module.scss';

function App() {
  const [words, changeWords] = useState([]);
  const [search, changeSearch] = useState('');
  const [error, toggleError] = useState(false);

  return (
    <div className={styles.body}>
      <Navigation></Navigation>
      <Search
        changeWords={changeWords}
        search={search}
        changeSearch={changeSearch}
        toggleError={toggleError}
      ></Search>
      <Word words={words} error={error}></Word>
    </div>
  );
}

export default App;
