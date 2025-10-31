import React, { useEffect, useRef, useState } from "react";
import ActionButtons from "../components/ActionButtons";

const WordTools = () => {
  const outputTextArea = useRef();
  const [textInput, setTextInput] = useState("");
  const [textStats, setTextStats] = useState({
    characterCount: 0,
    nonSpaceCharacterCount: 0,
    wordCount: 0,
  });

  const onType = (text) => {
    setTextInput(text);
  };

  useEffect(() => {
    const characterCount = textInput.length;
    const nonSpaceCharacterCount = textInput.match(/\S/g)?.length || 0;
    const wordCount = textInput.match(/\S+/g)?.length || 0;

    setTextStats((tS) => ({
      ...tS,
      characterCount: characterCount,
      nonSpaceCharacterCount: nonSpaceCharacterCount,
      wordCount: wordCount,
    }));
  }, [textInput]);

  return (
    <div className="page-body">
      <h1>Word Tools</h1>

      <ActionButtons outputTextArea={outputTextArea} textInput={textInput} />

      <div className="put-panes">
        <div className="pane">
          <h2> Input </h2>
          <textarea
            name="text-input"
            className="text-input"
            placeholder="Enter your text"
            onChange={(e) => onType(e.target.value)}
          >
            {textInput}
          </textarea>
        </div>

        <div className="pane">
          <h2> Output </h2>
          <textarea
            name="text-output"
            className="text-output"
            placeholder="Your output text"
            ref={outputTextArea}
            readOnly
          />
        </div>
      </div>

      <div className="text-stats">
        <span>Character count : {textStats.characterCount}</span>
        <span>
          Character count (without spaces) : {textStats.nonSpaceCharacterCount}
        </span>
        <span>Word count : {textStats.wordCount}</span>
      </div>
    </div>
  );
};

export default WordTools;
