import { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Search from './components/Search/Search';
import Word from './components/Word/Word';
import styles from './App.module.scss';

function App() {
  const [words, changeWords] = useState([]);
  const [search, changeSearch] = useState('');

  return (
    <div className={styles.body}>
      <Navigation></Navigation>
      <Search
        changeWords={changeWords}
        search={search}
        changeSearch={changeSearch}
      ></Search>
      <Word words={words}></Word>
    </div>
  );
}

export default App;
