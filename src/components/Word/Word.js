import React from 'react';
import styles from './Word.module.scss';

const icon = () => <i className="fa-solid fa-play"></i>;

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
              {i > 0 ? <hr /> : null}

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
