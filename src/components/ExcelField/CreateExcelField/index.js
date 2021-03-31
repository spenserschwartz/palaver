import React from 'react';
const xlsx = require('xlsx');

const CreateExcelField = () => {
  const createExcelFile = () => {
    const wb = xlsx.utils.book_new(); // Create a new workbook
    wb.Props = {
      Title: 'Palaver Database',
      Subject: 'Palaver Database',
      //Author: 'Red Stapler',
      CreatedDate: new Date(),
    };

    wb.SheetNames.push('Palaver'); // Assign a new sheet name and push to SheetNames array
    const ws_data = [['hello', 'world']]; // A row with two columns
    const ws = xlsx.utils.aoa_to_sheet(ws_data); // Create the sheet from the ws_data array
    wb.Sheets['Palaver'] = ws; // Assign sheet object to the workbook Sheets array
    xlsx.writeFile(wb, 'createdTestFile.xlsx');
  };

  const createExcelFromExcelObject = () => {
    console.log('hey');
  };

  return (
    <div className="createExcelField">
      <h3>Create Excel Field</h3>
      <button
        className="button green"
        onClick={() => createExcelFromExcelObject()}
      >
        Create from excelObject
      </button>
      <button className="button green" onClick={() => createExcelFile()}>
        Create Excel File
      </button>
    </div>
  );
};

export default CreateExcelField;
