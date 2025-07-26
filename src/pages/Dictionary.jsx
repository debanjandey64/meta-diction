import { useEffect, useState } from 'react';
import WordDetails from '../components/WordDetails';
import { BiSearchAlt } from "react-icons/bi";

const Dictionary = () => {
  const [wordInput, setWordInput] = useState("hello");

  const onSearch = (e) => {
    e.preventDefault();
    const textInput = document.querySelector('input[name="word-search"]');
    setWordInput(textInput.value);
  }

  useEffect(() => {
    const textInput = document.querySelector('input[name="word-search"]');
    textInput.value = wordInput;
  }, [wordInput]);

  return (
    <div className='page-body'>
      <div className='word-search'>
        <input type="text"
          name='word-search'
          placeholder='Type here. We already started - hello'
          onKeyDown={e => { if(e.key === "Enter") {onSearch(e)} }}
          required
        />

        <button onClick={e => onSearch(e)}>
          <BiSearchAlt size={28} />
        </button>
      </div>
      <WordDetails wordInput={wordInput} setWordInput={setWordInput} />
    </div>
  );
}

export default Dictionary;
