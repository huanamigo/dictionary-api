import { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Search from './components/Search/Search';
import Word from './components/Word/Word';

function App() {
  const [word, changeWord] = useState([]);
  const [search, changeSearch] = useState('');

  return (
    <div>
      <Navigation></Navigation>
      <Search
        changeWord={changeWord}
        search={search}
        changeSearch={changeSearch}
      ></Search>
      <Word word={word}></Word>
    </div>
  );
}

export default App;
