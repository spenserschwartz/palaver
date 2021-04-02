import React from 'react';

const AddToTableButton = ({ excelObject, setExcelObject, setExcelData }) => {
  const addToExcelTable = () => {
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

    //setExcelData(newExcelObject['Applications']);
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
