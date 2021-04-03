import React from 'react';
import './styles.css';

import AddToTableButton from './AddToTableButton';
import InputRow from './InputRow';

import { useDispatch } from 'react-redux';
import { generateMessage } from '../../redux/actions';

const InputField = ({
  inputObject,
  setInputObject,
  excelObject,
  setExcelObject,
  setExcelData,
}) => {
  const dispatch = useDispatch();

  const generate = (e) => {
    const newObject = Object.assign({}, inputObject);
    for (let key in newObject) {
      let inputTextID = 'inputTextBox' + key;
      newObject[key] = document.getElementById(inputTextID).value;
      setInputObject(newObject);
    }
    e.preventDefault();

    // testy in generate
    dispatch(generateMessage());
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

      <AddToTableButton
        excelObject={excelObject}
        setExcelObject={setExcelObject}
        setExcelData={setExcelData}
      />
    </div>
  );
};

export default InputField;
