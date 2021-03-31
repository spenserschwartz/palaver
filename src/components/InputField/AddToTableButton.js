import React from 'react';

const AddToTableButton = ({ excelObject, setExcelObject }) => {
  console.log('ATT: ', excelObject);

  const addToExcelTable = () => {
    console.log('clicky');

    // Add new row to excelObject

    const inputCompanyName = document.getElementById('inputTextBoxcompanyName');
    const newRow = {
      Status: 'Initial Contact',
      'Date Submitted': Date.now(),
      'Company Name': inputCompanyName,
    };

    const newExcelObject = Object.assign({}, excelObject);
    newExcelObject['Applications'].push(newRow);
    setExcelObject(newExcelObject);
    console.log(newExcelObject);
  };

  return (
    <div>
      <button className="button" onClick={() => addToExcelTable()}>
        Add to Table
      </button>
    </div>
  );
};

export default AddToTableButton;
