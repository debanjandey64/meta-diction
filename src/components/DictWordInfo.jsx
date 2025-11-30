const DictWordInfo = ({ wordInfo, onSearch }) => {
  return (
    wordInfo &&
    wordInfo.map((wi, ix) => (
      <div className="word-info">
        <div key={ix} className="word-header">
          <h1 className="title">{wi.word}</h1>

          <div>
            {wi.phonetics.map(
              (ph, i) =>
                ph.text && (
                  <span key={i} className="pronunciation">
                    {ph.text}
                  </span>
                )
            )}
          </div>
        </div>

        <div className="word-meanings">
          {wi.meanings.map((meaning, id) => (
            <div key={id} className="elem">
              <h2 className="subtitle">{meaning.partOfSpeech}</h2>

              {meaning.definitions.map((def, i) => (
                <div key={i} className="explanation">
                  <p className="text">{def.definition}</p>
                  {def.example && <p className="example">{def.example}</p>}
                </div>
              ))}

              <div className="synonyms">
                <h3 className="subtitle">Synonyms</h3>

                {meaning.synonyms.length > 0 ? (
                  <>
                    {meaning.synonyms.map((s, i) => (
                      <button
                        key={i}
                        className="w-link"
                        onClick={() => onSearch(s)}
                      >
                        {" "}
                        {s}{" "}
                      </button>
                    ))}
                  </>
                ) : (
                  "No synonyms found."
                )}
              </div>

              <div className="antonyms">
                <h3 className="subtitle">Antonyms</h3>

                {meaning.antonyms.length > 0 ? (
                  <>
                    {meaning.antonyms.map((a, i) => (
                      <button
                        key={i}
                        className="w-link"
                        onClick={() => onSearch(a)}
                      >
                        {" "}
                        {a}{" "}
                      </button>
                    ))}
                  </>
                ) : (
                  "No antonyms found."
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    ))
  );
};

export default DictWordInfo;
