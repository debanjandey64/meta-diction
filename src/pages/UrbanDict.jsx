import { useEffect, useState } from "react";
import WordFetch from "../components/WordFetch";
import { BiSearchAlt } from "react-icons/bi";

const UrbanDict = () => {
  const [wordInput, setWordInput] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    const textInput = document.querySelector('input[name="word-search"]');
    setWordInput(textInput.value);
  };

  useEffect(() => {
    const textInput = document.querySelector('input[name="word-search"]');
    textInput.value = wordInput;
  }, [wordInput]);

  return (
    <div className="page-body">
      <div className="word-search">
        <input
          type="text"
          name="word-search"
          placeholder="Type here."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch(e);
            }
          }}
          required
        />

        <button onClick={(e) => onSearch(e)}>
          <BiSearchAlt size={28} />
        </button>
      </div>

      <WordFetch
        wordInput={wordInput}
        setWordInput={setWordInput}
        variant="urban"
      />
    </div>
  );
};

export default UrbanDict;
