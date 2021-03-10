import React from 'react';
import '../styles.css';

const xlsx = require('xlsx');
// https://www.youtube.com/watch?v=tKz_ryychBY
// https://www.npmjs.com/package/xlsx

const createExcelFile = () => {
  const wb = xlsx.utils.book_new(); // Create a new workbook
  wb.Props = {
    Title: 'SheetJS Tutorial',
    Subject: 'This is the subject',
    Author: 'Red Stapler',
    CreatedDate: new Date(),
  };

  wb.SheetNames.push('Test Sheet'); // Assign a new sheet name and push to SheetNames array
  const ws_data = [['hello', 'world']]; // A row with two columns
  const ws = xlsx.utils.aoa_to_sheet(ws_data); // Create the sheet from the ws_data array
  wb.Sheets['Test Sheet'] = ws; // Assign sheet object to the workbook Sheets array
  xlsx.writeFile(wb, './newDataFile.xlsx');
};

const ExcelField = () => {
  return (
    <div className="excelField">
      <h1>Excel Field</h1>
      <button onClick={() => createExcelFile()}>Create Excel File</button>
    </div>
  );
};

export default ExcelField;