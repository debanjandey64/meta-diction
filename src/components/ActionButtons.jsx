import { useState } from "react";
import { ACTION_CLASSES } from "../constants";
import ld from 'lodash';

const changeToUpperCase = (input, outputTextArea) => {
  const output = input.toUpperCase();
  outputTextArea.current.innerHTML = output;
}

const changeToLowerCase = (input, outputTextArea) => {
  const output = input.toLowerCase();
  outputTextArea.current.innerHTML = output;
}

const changeToTitleCase = (input, outputTextArea) => {
  const output = input.replace(/\w\S*/g, str => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase());
  outputTextArea.current.innerHTML = output;
}

const changeToCamelCase = (input, outputTextArea) => {
  const output = ld.camelCase(input);
  outputTextArea.current.innerHTML = output;
}

const changeToPascalCase = (input, outputTextArea) => {
  const output = input.charAt(0).toUpperCase() + ld.camelCase(input.substring(1));
  outputTextArea.current.innerHTML = output;
}

const changeToKebabCase = (input, outputTextArea) => {
  const output = ld.kebabCase(input);
  outputTextArea.current.innerHTML = output;
}

const changeToSnakeCase = (input, outputTextArea) => {
  const output = ld.snakeCase(input);
  outputTextArea.current.innerHTML = output;
}

const ActionButtons = ({ outputTextArea, textInput }) => {
  const [actionClass, setActionClass] = useState(Object.values(ACTION_CLASSES)[0]);

  return (
    <div className="action-buttons">
      <div className="action-select">
        <span>
          Select what type of operations you want to do
        </span>

        <select name="action-classes" value={actionClass} onChange={(e) => {setActionClass(e.target.value)}}>
          {Object.values(ACTION_CLASSES).map(aCl => (
            <option key={aCl} value={aCl}>{ld.startCase(aCl)}</option>
          ))}
        </select>
      </div>

      <div className="button-set">
       {actionClass === ACTION_CLASSES.caseConversions && (
          <>
            <button onClick={() => changeToUpperCase(textInput, outputTextArea)}>Upper Case</button>
            <button onClick={() => changeToLowerCase(textInput, outputTextArea)}>Lower Case</button>
            <button onClick={() => changeToTitleCase(textInput, outputTextArea)}>Title Case</button>
            <button onClick={() => changeToCamelCase(textInput, outputTextArea)}>Camel Case</button>
            <button onClick={() => changeToPascalCase(textInput, outputTextArea)}>Pascal Case</button>
            <button onClick={() => changeToKebabCase(textInput, outputTextArea)}>Kebab Case</button>
            <button onClick={() => changeToSnakeCase(textInput, outputTextArea)}>Snake Case</button>
          </>
        )}
      </div>

    </div>
  );
};

export default ActionButtons;
