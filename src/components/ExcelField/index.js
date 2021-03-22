import React from 'react';
import ConvertField from './ConvertField';
import ExcelTableField from './ExcelTableField';
import '../styles.css';
import '../../helpers/styles.css';
// https://www.youtube.com/watch?v=tKz_ryychBY
// https://www.npmjs.com/package/xlsx

const xlsx = require('xlsx');

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

const ExcelField = ({ excelObject, setExcelObject }) => {
  return (
    <div className="excelField">
      <h1>Excel Field</h1>
      <button className="button green" onClick={() => createExcelFile()}>
        Create Excel File
      </button>
      <ConvertField excelObject={excelObject} setExcelObject={setExcelObject} />
      <ExcelTableField
        excelObject={excelObject}
        setExcelObject={setExcelObject}
      />
    </div>
  );
};

export default ExcelField;
