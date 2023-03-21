import React from 'react';
import styles from './Word.module.scss';

const icon = () => (
  <svg
    className={styles.playButton}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
  >
    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
  </svg>
);

const Word = ({ words, error }) => {
  const playSound = (sound) => {
    new Audio(sound).play();
  };

  const checkSound = () => {
    for (let i = 0; i < words[0]?.phonetics.length; i++) {
      if (words[0]?.phonetics[i].audio !== '') {
        return (
          <button
            className={styles.sound}
            onClick={() => playSound(words[0].phonetics[i].audio)}
          >
            {icon()}
          </button>
        );
      }
    }

    return null;
  };

  return (
    <div className={styles.container}>
      {error ? (
        <>
          <h1 className={styles.mainWord}>{words.message}</h1>
          <h3 className={styles.phonetic}>{words.resolution}</h3>
        </>
      ) : (
        <>
          <h1 className={styles.mainWord}>{words[0]?.word}</h1>
          <h3 className={styles.phonetic}>{words[0]?.phonetic}</h3>

          {checkSound()}
          {words?.map((word, i) => (
            <div key={i}>
              {word.meanings.map((mean) => (
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
                        {mean.synonyms.map((syn) => syn + ' ')}
                      </span>
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Word;
