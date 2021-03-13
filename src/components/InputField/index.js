import React from 'react';
import './styles.css';

import InputRow from './InputRow';

const InputField = ({ inputObject, setInputObject }) => {
  const generate = (e) => {
    const newObject = Object.assign({}, inputObject);
    for (let key in newObject) {
      let inputTextID = 'inputTextBox' + key;
      newObject[key] = document.getElementById(inputTextID).value;
      setInputObject(newObject);
    }
    e.preventDefault();
  };

  return (
    <div className="inputField">
      <h1>Input Field</h1>

      <form className="introMessageForm" onSubmit={(e) => generate(e)}>
        <div>
          {Object.keys(inputObject).map((row, i) => (
            <InputRow key={i} row={row} index={i} />
          ))}
        </div>
        <input
          type="submit"
          className=" button generateButton"
          value="Generate"
        />
      </form>
    </div>
  );
};

export default InputField;
