const UrbanDictWord = ({ wordInfo, onSearch }) => {
  console.log(wordInfo);
  return (
    wordInfo &&
    wordInfo?.data?.map((wi, ix) => (
      <div key={ix} className="word-info">
        <div className="word-header">
          <h1 className="title">{wi.word}</h1>
        </div>
        <div className="word-meanings">
          <div className="explanation">
            <p className="text">{wi.meaning}</p>
            {wi.example && <p className="example">{wi.example}</p>}
          </div>
        </div>
      </div>
    ))
  );
};

export default UrbanDictWord;
