import React from 'react';
import styles from './Word.module.scss';

const Word = ({ word }) => {
  return (
    <div>
      <h1 className={styles.mainWord}>{word[0]?.word}</h1>
      <h3 className={styles.phonetic}>{word[0]?.phonetic}</h3>
      {word[0]?.meanings.map((mean) => (
        <div>
          <p className={styles.part}>{mean.partOfSpeech}</p>
          <p className={styles.secondary}>Meaning</p>
          <ul>
            {mean.definitions.map((def) => (
              <li className={styles.bullet}>
                <p>{def.definition}</p>
                {def.example ? (
                  <p className={styles.secondary}>{def.example}</p>
                ) : null}
              </li>
            ))}
          </ul>
          {mean.synonyms.length > 0 ? (
            <p className={styles.secondary}>
              Synonyms{' '}
              <span className={styles.synonym}>
                {mean.synonyms.map((syn) => syn)}
              </span>
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Word;
